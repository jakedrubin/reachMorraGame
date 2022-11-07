'reach 0.1'

const [ isOutcome, B_WINS, DRAW, A_WINS ] = makeEnum(3);

const winner = function(handA, handB, guessA, guessB){
  const tot = handA + handB;
  const AWins = (guessA == tot ? true : false)
  const BWins = (guessB == tot ? true : false)
  if (AWins &&!BWins) return A_WINS;
  else if (BWins && !AWins) return B_WINS;
  else return DRAW;
}

assert(winner(1, 0, 1, 0) == A_WINS);
assert(winner(0, 1, 0, 1) == B_WINS);
assert(winner(1, 1, 2, 2) == DRAW);
assert(winner(1, 1, 5, 6) == DRAW);

forall(UInt, handA =>
  forall(UInt, handB =>
    forall(UInt, guessA =>
      forall(UInt, guessB =>
        assert(isOutcome(winner(handA, handB, guessA, guessB)))))));

forall(UInt, handA =>
  forall(UInt, handB =>
    forall(UInt, guessC =>
      assert(winner(handA, handB, guessC, guessC) == DRAW))));

const Player = {
  ...hasRandom,
  getHand: Fun([], UInt),
  guessSum: Fun([], UInt),
  seeOutcome: Fun([UInt], Null), 
  informTimeout: Fun([], Null),
  //playHand: Fun([UInt], Null),
  //predict: Fun([UInt], Null)
}

export const main = Reach.App(() => {
  const Alice = Participant('Alice', {
    ...Player,
    wager: UInt,
    deadline: UInt,
  })
  const Bob = Participant('Bob', {
    ...Player,
    acceptWager: Fun([UInt], Null),
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
  invariant(balance() == 2 * amount && isOutcome(outcome));
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

    outcome = winner(handAlice, handBob, guessAlice, guessBob);
    continue;      
  }
  assert(outcome == A_WINS || outcome == B_WINS);
  transfer(2 * amount).to(outcome == A_WINS ? Alice : Bob);
  commit();

  each([Alice, Bob], () => {
    interact.seeOutcome(outcome);
  });

  exit();
})