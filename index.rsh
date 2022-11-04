'reach 0.1'

const [ isOutcome, B_WINS, DRAW, A_WINS ] = makeEnum(3);

const Player = {
  getHand: Fun([], UInt),
  guessSum: Fun([], UInt),
  seeOutcome: Fun([UInt], Null), 
  informTimeout: Fun([], Null),
  playHand: Fun([UInt], Null),
  predict: Fun([UInt], Null)
}

export const main = Reach.App(() => {
  const Alice = Participant('Alice', {
    ...Player,
    wager: UInt,
    deadline: UInt,
  })
  const Bob = Participant('Bob', {
    ...Player,
  })
  init()

  const informTimeout = () => {
    each([Alice, Bob], () => {
      interact.informTimeout();
    })
  }

  Alice.only(() => {
    const amount = declassify(interact.wager);    
    const deadline = declassify(interact.deadline); //two different deadlines, second is for frontend
  });
  Alice.publish(amount, deadline)
    .pay(amount)
  commit();
  Bob.only(() => {
    interact.acceptWager(amount)
  });
  Bob.pay(amount)
    .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout))

  var [outcome] = [DRAW];
  while (outcome == DRAW) {
    commit();
    Alice.only(() => {
      const _handAlice = interact.getHand();
      const [ _commitAliceH, _saltAliceH ] = makeCommitment(interact, _handAlice);
      const commitAliceH = declassify(_commitAliceH);
      const _guessAlice = interact.guessSum();
      const [ _commitAliceG, _saltAliceG ] = makeCommitment(interact, _guessAlice);
      const commitAliceG = declassify(_commitAliceG);
    });
    Alice.publish(commitAliceH, commitAliceG)
      .timeout(relativeTime(deadline), () => closeTo(Bob, informTimeout));
    commit();
    unknowable(Bob, Alice(_handAlice, _saltAliceH, _guessAlice, _saltAliceG));
    Bob.only(() => {
      const handBob = declassify(interact.getHand());
      const guessBob = declassify(interact.guessSum());
    });
    Bob.publish(handBob, guessBob)
      .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));
    commit();
    
    Alice.only(() => {
      const saltAliceH = declassify(_saltAliceH);
      const saltAliceG = declassify(_saltAliceG);
      const handAlice = declassify(_handAlice);
      const guessAlice = declassify(_guessAlice);
    });
    Alice.publish(saltAliceH, handAlice, saltAliceG, guessAlice)
      .timeout(relativeTime(deadline), () => closeTo(Bob, informTimeout));
    checkCommitment(commitAliceH, saltAliceH, handAlice);
    checkCommitment(commitAliceG, saltAliceG, guessAlice);

    /*
    if(guessAlice == guessBob){ outcome = DRAW }
    else {
      const tot = handAlice + handBob;
      
      if (tot == guessAlice) { outcome = A_WINS; } 
      else if (tot == guessBob) { outcome = B_WINS; }
    }*/
    //outcome = winner(handAlice, handBob);

    outcome = (((guessAlice || guessBob) == tot) && (guessAlice != guessBob)) ? 
     (guessAlice == tot ? A_WINS  : B_WINS) : DRAW;
    continue;  
    
  }
  assert(outcome == A_WINS || outcome == B_WINS);
  transfer(2 * amount).to(outcome == A_WINS ? Alice : Bob);
  commit()

  each([Alice, Bob], () => {
    interact.seeOutcome(outcome);
  });
})