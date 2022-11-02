import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib();

const startingBalance = stdlib.parseCurrency(100)
const accAlice = await stdlib.newTestAccount(startingBalance)
const accBob = await stdlib.newTestAccount(startingBalance)

const ctcAlice = accAlice.contract(backend)
const ctcBob = accBob.contract(backend, ctcAlice.getInfo())

const OUTCOME = ['Bob wins', 'Draw', 'Alice wins'];

const Player = (Who) => ({ 
    getHand: () => {
        const hand = Math.floor(Math.random() * 6) - 1
        console.log(`${Who} threw ${hand} fingers`)
        return hand
    },
    seeOutcome: (outcome) => {
        console.log(`${Who} saw total ${OUTCOME[outcome]}`) // OUTCOME[outcome] does not work the way you want yet
    }
})

await Promise.all ([
    ctcAlice.p.Alice({
        ...Player('Alice')
    }),
    ctcBob.p.Bob({
        ...Player('Bob')
    })
])