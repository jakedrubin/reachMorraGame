import React from 'react';
import AppViews from './views/AppViews';
import DeployerViews from './views/DeployerViews';
import AttacherViews from './views/AttacherViews';
import {renderDOM, renderView} from './views/render';
import './index.css';
import * as backend from './build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';

const reach = loadStdlib(process.env); //used to call it stdlib
reach.setWalletFallback(reach.walletFallback({
  providerEnv: 'TestNet', MyAlgoConnect }));

const {standardUnit} = reach;
const defaults = {defaultFundAmt: '10', defaultWager: '3', standardUnit};

const OUTCOME = ['Bob wins', 'Draw', 'Alice wins'];

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {view: 'ConnectAccount', ...defaults};
    console.log('app constructed');
  }
  async componentDidMount(){
    console.log('compmount1')
    const acc = await reach.getDefaultAccount();
    const balAtomic = await reach.balanceOf(acc);
    const bal = reach.formatCurrency(balAtomic, 4);
    console.log("mount vars set, setting state...")
    this.setState({acc, bal});
    console.log('state set')
    if(await reach.canFundFromFaucet()){
      console.log("change state to 'fund account'")
      this.setState({view: 'FundAccount'})
    } else {
      console.log('ss to Dep or Att')
      this.setState({view: 'DeployerOrAttacher'});
    }
    console.log('compDidMount')
  }
  //render () { return renderView(this, AppViews); }
  async fundAccount(fundAmount){
    await reach.fundFromFaucet(this.state.acc, reach.parseCurrency(fundAmount));
    this.setState({view: 'DeployerOrAttacher'});
  }
  async skipFundAccount() { this.setState({view: 'DeployerOrAttacher'}); }
  selectAttacher() { this.setState({view: 'Wrapper', ContentView: Attacher}); }
  selectDeployer() { this.setState({view: 'Wrapper', ContentView: Deployer}); }
  render() { return renderView(this, AppViews); }
}
console.log('1')
class Player extends React.Component{
  random() { return reach.hasRandom.random(); }
  async getHand() {
    console.log('getHand')
    const hand = await new Promise(resolveHandP => {
      this.setState({view: 'GetHand', playable: true, resolveHandP});
    });
    this.setState({view: 'WaitingForResults', hand});
    return hand
  }
  async guessSum() {
    console.log('guessSum')
    const guess = await new Promise(resolveGuessP => {
      this.setState({view: 'GuessSum', playable: true, resolveGuessP});
    });
    this.setState({view: 'WaitingForResults', guess});
    return guess 
  }
  seeOutcome(i) { this.setState({view: 'Done', outcome: OUTCOME[i]}); }
  informTimeout() { this.setState({view: 'Timeout'}); }
  playHand(hand) { this.state.resolveHandP(hand); }
  predict(guess) { this.state.resolveGuessP(guess); }
}

class Deployer extends Player{
  constructor(props){
    console.log('deployer constructor called');
    super(props);
    this.state = {view: 'SetWager'};
    console.log('deployer constructor passed');
  }
  setWager(wager) { this.setState({view: 'Deploy', wager}); }
  async deploy() {
    console.log('Deploying')
    const ctc = this.props.acc.contract(backend);
    this.setState({view: 'Deploying', ctc});
    this.wager = reach.parseCurrency(this.state.wager);
    this.deadline = {ETH: 10, ALGO: 100, CFX: 1000}[reach.connector]; //change eth deadline for L2s
    backend.Alice(ctc, this);
    const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
    this.setState({view: 'WaitingForAttacher', ctcInfoStr});
  }
  render() { return renderView(this, DeployerViews); }
}

class Attacher extends Player{
  constructor(props){
    super(props);
    this.state = {view: 'Attach'};
    console.log('attacher constructor passed')
  }
  attach(ctcInfoStr){
    const ctc = this.props.acc.contract(backend, JSON.parse(ctcInfoStr));
    this.setState({view: 'Attaching'})
    backend.Bob(ctc, this);
  }
  async acceptWager(wagerAtomic){
    const wager = reach.formatCurrency(wagerAtomic, 4);
    return await new Promise(resolveAcceptedP => {
      this.setState({view: 'AcceptTerms', wager, resolveAcceptedP});
    });
  }
  termsAccepted(){
    this.state.resolveAcceptedP();
    this.setState({view: 'WaitingForTurn'});
  }
  render () { return renderView(this, AttacherViews); }
}

renderDOM(<App />);