import React from 'react';
import AppViews from './views/AppViews';
import DeployerViews from './views/DeployerViews';
import AttacherViews from './views/AttacherViews';
import {renderDOM, renderView} from './views/render';
import './index.css';
import * as backend from './build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env); //used to call it stdlib

import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
reach.setWalletFallback(reach.walletFallback({
  providerEnv: 'TestNet', MyAlgoConnect }));

const {standardUnit} = reach;
const defaults = {defaultFundAmt: '10', defaultWager: '3', standardUnit};

/*
const startingBalance = reach.parseCurrency(100)
const accAlice = await reach.newTestAccount(startingBalance)
const accBob = await reach.newTestAccount(startingBalance)

const ctcAlice = accAlice.contract(backend)
const ctcBob = accBob.contract(backend, ctcAlice.getInfo())
*/
const OUTCOME = ['Bob wins', 'Draw', 'Alice wins'];

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {view: 'ConectedAccount', ...defaults}
  }
  async componentDidMount(){
    const acc = await reach.getDefaultAccount();
    const balAtomic = await reach.balanceOf(acc);
    const bal = reach.formatCurrency(balAtomic, 4);
    this.setState({acc, bal});
    if(await reach.canFundFromFaucet()){
      this.setState({view: 'FundAccount'})
    } else {
      this.setState({view: 'DeployerOrAttacher'});
    }
  }
  render () { return renderView(this, AppViews); }

  async fundAccount(fundAmount){
    await reach.fundFromFaucet(this.state.acc, reach.parseCurrency(fundAmount));
    this.setState({view: 'DeployerOrAttacher'});
  }
  async skipFundAccount() { this.setState({view: 'DeployerOrAttacher'}); }
  selectAttacher() { this.setState({view: 'Wrapper', ContentView: Attacher}); }
  selectDeployer() { this.setState({view: 'Wrapper', ContentView: Deployer}); }
}

class Player extends React.Component{
  random() { return reach.hasRandom.random(); }
  async getHand() {
    const hand = await new Promise(resolveHandP => {
      this.setState({view: 'GetHand', playable: true, resolveHandP});
    });
    this.setState({view: 'WaitingForResults', hand});
    return hand
  }
  async guessSum() {
    const guess = await new Promise(resolveGuessP => {
      this.setState({view: 'GuessSum', playable: true, resolveGuessP});
    });
    this.setState({view: 'WaitingForResults', guess});
    return guess 
  }
  seeOutcome(i) { this.setState({view: 'Done', outcome: intToOutcome[i]}); }
  informTimeout() { this.setState({view: 'Timeout'}); }
  playHand(hand) { this.state.resolveHandP(hand); }
  predict(guess) { this.setState.resolveGuessP(guess); }
}