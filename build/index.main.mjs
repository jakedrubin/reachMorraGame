// Automatically generated with Reach 0.1.12 (0b231964)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (0b231964)';
export const _backendVersion = 25;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      5: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1],
      7: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1],
      9: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const v372 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v373 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v373, v372],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:62:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v373, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v377, v378], secs: v380, time: v379, didSend: v89, from: v376 } = txn1;
      
      sim_r.txns.push({
        amt: v377,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v389 = stdlib.safeAdd(v379, v378);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v377, v378], secs: v380, time: v379, didSend: v89, from: v376 } = txn1;
  ;
  const v389 = stdlib.safeAdd(v379, v378);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v389],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v376, v377, v378, v389],
      evt_cnt: 0,
      funcNum: 2,
      lct: v379,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v561, time: v560, didSend: v309, from: v559 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v376,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v561, time: v560, didSend: v309, from: v559 } = txn3;
    ;
    ;
    stdlib.protect(ctc2, await interact.informTimeout(), {
      at: './index.rsh:54:29:application',
      fs: ['at ./index.rsh:53:9:application call to [unknown function] (defined at: ./index.rsh:53:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:52:28:function exp)', 'at ./index.rsh:69:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v395, time: v394, didSend: v98, from: v393 } = txn2;
    const v397 = stdlib.add(v377, v377);
    ;
    let v398 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v399 = v394;
    let v406 = v397;
    
    let txn3 = txn2;
    while (await (async () => {
      const v414 = stdlib.eq(v398, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v414;})()) {
      const v421 = stdlib.safeAdd(v399, v378);
      const v425 = stdlib.protect(ctc0, await interact.getHand(), {
        at: './index.rsh:76:42:application',
        fs: ['at ./index.rsh:75:15:application call to [unknown function] (defined at: ./index.rsh:75:19:function exp)'],
        msg: 'getHand',
        who: 'Alice'
        });
      const v426 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:77:60:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:75:15:application call to [unknown function] (defined at: ./index.rsh:75:19:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v427 = stdlib.digest([ctc0, ctc0], [v426, v425]);
      const v429 = stdlib.protect(ctc0, await interact.guessSum(), {
        at: './index.rsh:79:44:application',
        fs: ['at ./index.rsh:75:15:application call to [unknown function] (defined at: ./index.rsh:75:19:function exp)'],
        msg: 'guessSum',
        who: 'Alice'
        });
      const v430 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:80:60:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:75:15:application call to [unknown function] (defined at: ./index.rsh:75:19:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v431 = stdlib.digest([ctc0, ctc0], [v430, v429]);
      
      const txn4 = await (ctc.sendrecv({
        args: [v376, v377, v378, v393, v406, v421, v427, v431],
        evt_cnt: 2,
        funcNum: 4,
        lct: v399,
        onlyIf: true,
        out_tys: [ctc1, ctc1],
        pay: [stdlib.checkedBigNumberify('./index.rsh:83:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v434, v435], secs: v437, time: v436, didSend: v130, from: v433 } = txn4;
          
          ;
          const v445 = stdlib.safeAdd(v436, v378);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v421],
        tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v376, v377, v378, v393, v406, v421],
          evt_cnt: 0,
          funcNum: 5,
          lct: v399,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v527, time: v526, didSend: v260, from: v525 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v393,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v527, time: v526, didSend: v260, from: v525 } = txn5;
        ;
        const v528 = stdlib.addressEq(v376, v525);
        const v529 = stdlib.addressEq(v393, v525);
        const v530 = v528 ? true : v529;
        stdlib.assert(v530, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:84:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc2, await interact.informTimeout(), {
          at: './index.rsh:54:29:application',
          fs: ['at ./index.rsh:53:9:application call to [unknown function] (defined at: ./index.rsh:53:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:52:28:function exp)', 'at ./index.rsh:84:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alice'
          });
        
        return;
        
        }
      else {
        const {data: [v434, v435], secs: v437, time: v436, didSend: v130, from: v433 } = txn4;
        ;
        const v438 = stdlib.addressEq(v376, v433);
        stdlib.assert(v438, {
          at: './index.rsh:83:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v445 = stdlib.safeAdd(v436, v378);
        const txn5 = await (ctc.recv({
          didSend: false,
          evt_cnt: 2,
          funcNum: 6,
          out_tys: [ctc0, ctc0],
          timeoutAt: ['time', v445],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v376, v377, v378, v393, v406, v434, v435, v445],
            evt_cnt: 0,
            funcNum: 7,
            lct: v436,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v509, time: v508, didSend: v226, from: v507 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v376,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v509, time: v508, didSend: v226, from: v507 } = txn6;
          ;
          const v510 = stdlib.addressEq(v376, v507);
          const v511 = stdlib.addressEq(v393, v507);
          const v512 = v510 ? true : v511;
          stdlib.assert(v512, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:92:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc2, await interact.informTimeout(), {
            at: './index.rsh:54:29:application',
            fs: ['at ./index.rsh:53:9:application call to [unknown function] (defined at: ./index.rsh:53:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:52:28:function exp)', 'at ./index.rsh:92:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Alice'
            });
          
          return;
          
          }
        else {
          const {data: [v452, v453], secs: v455, time: v454, didSend: v142, from: v451 } = txn5;
          ;
          const v456 = stdlib.addressEq(v393, v451);
          stdlib.assert(v456, {
            at: './index.rsh:91:9:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const v463 = stdlib.safeAdd(v454, v378);
          const txn6 = await (ctc.sendrecv({
            args: [v376, v377, v378, v393, v406, v434, v435, v452, v453, v463, v426, v425, v430, v429],
            evt_cnt: 4,
            funcNum: 8,
            lct: v454,
            onlyIf: true,
            out_tys: [ctc0, ctc0, ctc0, ctc0],
            pay: [stdlib.checkedBigNumberify('./index.rsh:101:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [v468, v469, v470, v471], secs: v473, time: v472, didSend: v154, from: v467 } = txn6;
              
              ;
              const v480 = stdlib.safeAdd(v469, v452);
              const v481 = stdlib.eq(v471, v480);
              const v483 = stdlib.eq(v453, v480);
              const v485 = v483 ? false : true;
              const v486 = v481 ? v485 : false;
              const v487 = v481 ? false : true;
              const v488 = v483 ? v487 : false;
              const v576 = v488 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
              const v479 = v486 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : v576;
              const cv398 = v479;
              const cv399 = v472;
              const cv406 = v406;
              
              await (async () => {
                const v398 = cv398;
                const v399 = cv399;
                const v406 = cv406;
                
                if (await (async () => {
                  const v414 = stdlib.eq(v398, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                  
                  return v414;})()) {
                  const v421 = stdlib.safeAdd(v399, v378);
                  sim_r.isHalt = false;
                  }
                else {
                  const v543 = stdlib.eq(v398, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
                  const v546 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:110:12:decimal', stdlib.UInt_max, '2'), v377);
                  const v548 = v543 ? v376 : v393;
                  sim_r.txns.push({
                    kind: 'from',
                    to: v548,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }})();
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: ['time', v463],
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          if (txn6.didTimeout) {
            const txn7 = await (ctc.sendrecv({
              args: [v376, v377, v378, v393, v406, v434, v435, v452, v453, v463],
              evt_cnt: 0,
              funcNum: 9,
              lct: v454,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v491, time: v490, didSend: v192, from: v489 } = txn7;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v393,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v491, time: v490, didSend: v192, from: v489 } = txn7;
            ;
            const v492 = stdlib.addressEq(v376, v489);
            const v493 = stdlib.addressEq(v393, v489);
            const v494 = v492 ? true : v493;
            stdlib.assert(v494, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:102:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Alice'
              });
            ;
            stdlib.protect(ctc2, await interact.informTimeout(), {
              at: './index.rsh:54:29:application',
              fs: ['at ./index.rsh:53:9:application call to [unknown function] (defined at: ./index.rsh:53:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:52:28:function exp)', 'at ./index.rsh:102:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'informTimeout',
              who: 'Alice'
              });
            
            return;
            
            }
          else {
            const {data: [v468, v469, v470, v471], secs: v473, time: v472, didSend: v154, from: v467 } = txn6;
            ;
            const v474 = stdlib.addressEq(v376, v467);
            stdlib.assert(v474, {
              at: './index.rsh:101:11:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Alice'
              });
            const v475 = stdlib.digest([ctc0, ctc0], [v468, v469]);
            const v476 = stdlib.digestEq(v434, v475);
            stdlib.assert(v476, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:103:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Alice'
              });
            const v477 = stdlib.digest([ctc0, ctc0], [v470, v471]);
            const v478 = stdlib.digestEq(v435, v477);
            stdlib.assert(v478, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:104:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Alice'
              });
            const v480 = stdlib.safeAdd(v469, v452);
            const v481 = stdlib.eq(v471, v480);
            const v483 = stdlib.eq(v453, v480);
            const v485 = v483 ? false : true;
            const v486 = v481 ? v485 : false;
            const v487 = v481 ? false : true;
            const v488 = v483 ? v487 : false;
            const v576 = v488 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
            const v479 = v486 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : v576;
            const cv398 = v479;
            const cv399 = v472;
            const cv406 = v406;
            
            v398 = cv398;
            v399 = cv399;
            v406 = cv406;
            
            txn3 = txn6;
            continue;}
          
          }
        
        }
      
      }
    const v543 = stdlib.eq(v398, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
    const v546 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:110:12:decimal', stdlib.UInt_max, '2'), v377);
    const v548 = v543 ? v376 : v393;
    ;
    stdlib.protect(ctc2, await interact.seeOutcome(v398), {
      at: './index.rsh:114:24:application',
      fs: ['at ./index.rsh:113:7:application call to [unknown function] (defined at: ./index.rsh:113:25:function exp)'],
      msg: 'seeOutcome',
      who: 'Alice'
      });
    
    return;
    }
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v377, v378], secs: v380, time: v379, didSend: v89, from: v376 } = txn1;
  ;
  const v389 = stdlib.safeAdd(v379, v378);
  stdlib.protect(ctc1, await interact.acceptWager(v377), {
    at: './index.rsh:66:25:application',
    fs: ['at ./index.rsh:65:11:application call to [unknown function] (defined at: ./index.rsh:65:15:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v376, v377, v378, v389],
    evt_cnt: 0,
    funcNum: 1,
    lct: v379,
    onlyIf: true,
    out_tys: [],
    pay: [v377, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v395, time: v394, didSend: v98, from: v393 } = txn2;
      
      const v397 = stdlib.add(v377, v377);
      sim_r.txns.push({
        amt: v377,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v398 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v399 = v394;
      const v406 = v397;
      
      if (await (async () => {
        const v414 = stdlib.eq(v398, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        
        return v414;})()) {
        const v421 = stdlib.safeAdd(v399, v378);
        sim_r.isHalt = false;
        }
      else {
        const v543 = stdlib.eq(v398, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
        const v546 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:110:12:decimal', stdlib.UInt_max, '2'), v377);
        const v548 = v543 ? v376 : v393;
        sim_r.txns.push({
          kind: 'from',
          to: v548,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v389],
    tys: [ctc3, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v376, v377, v378, v389],
      evt_cnt: 0,
      funcNum: 2,
      lct: v379,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v561, time: v560, didSend: v309, from: v559 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v376,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v561, time: v560, didSend: v309, from: v559 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:54:29:application',
      fs: ['at ./index.rsh:53:9:application call to [unknown function] (defined at: ./index.rsh:53:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:52:28:function exp)', 'at ./index.rsh:69:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v395, time: v394, didSend: v98, from: v393 } = txn2;
    const v397 = stdlib.add(v377, v377);
    ;
    let v398 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v399 = v394;
    let v406 = v397;
    
    let txn3 = txn2;
    while (await (async () => {
      const v414 = stdlib.eq(v398, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v414;})()) {
      const v421 = stdlib.safeAdd(v399, v378);
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 2,
        funcNum: 4,
        out_tys: [ctc2, ctc2],
        timeoutAt: ['time', v421],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v376, v377, v378, v393, v406, v421],
          evt_cnt: 0,
          funcNum: 5,
          lct: v399,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v527, time: v526, didSend: v260, from: v525 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v393,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v527, time: v526, didSend: v260, from: v525 } = txn5;
        ;
        const v528 = stdlib.addressEq(v376, v525);
        const v529 = stdlib.addressEq(v393, v525);
        const v530 = v528 ? true : v529;
        stdlib.assert(v530, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:84:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:54:29:application',
          fs: ['at ./index.rsh:53:9:application call to [unknown function] (defined at: ./index.rsh:53:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:52:28:function exp)', 'at ./index.rsh:84:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Bob'
          });
        
        return;
        
        }
      else {
        const {data: [v434, v435], secs: v437, time: v436, didSend: v130, from: v433 } = txn4;
        ;
        const v438 = stdlib.addressEq(v376, v433);
        stdlib.assert(v438, {
          at: './index.rsh:83:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v445 = stdlib.safeAdd(v436, v378);
        const v449 = stdlib.protect(ctc0, await interact.getHand(), {
          at: './index.rsh:88:50:application',
          fs: ['at ./index.rsh:87:13:application call to [unknown function] (defined at: ./index.rsh:87:17:function exp)'],
          msg: 'getHand',
          who: 'Bob'
          });
        const v450 = stdlib.protect(ctc0, await interact.guessSum(), {
          at: './index.rsh:89:52:application',
          fs: ['at ./index.rsh:87:13:application call to [unknown function] (defined at: ./index.rsh:87:17:function exp)'],
          msg: 'guessSum',
          who: 'Bob'
          });
        
        const txn5 = await (ctc.sendrecv({
          args: [v376, v377, v378, v393, v406, v434, v435, v445, v449, v450],
          evt_cnt: 2,
          funcNum: 6,
          lct: v436,
          onlyIf: true,
          out_tys: [ctc0, ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:91:9:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v452, v453], secs: v455, time: v454, didSend: v142, from: v451 } = txn5;
            
            ;
            const v463 = stdlib.safeAdd(v454, v378);
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v445],
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v376, v377, v378, v393, v406, v434, v435, v445],
            evt_cnt: 0,
            funcNum: 7,
            lct: v436,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v509, time: v508, didSend: v226, from: v507 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v376,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v509, time: v508, didSend: v226, from: v507 } = txn6;
          ;
          const v510 = stdlib.addressEq(v376, v507);
          const v511 = stdlib.addressEq(v393, v507);
          const v512 = v510 ? true : v511;
          stdlib.assert(v512, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:92:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:54:29:application',
            fs: ['at ./index.rsh:53:9:application call to [unknown function] (defined at: ./index.rsh:53:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:52:28:function exp)', 'at ./index.rsh:92:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Bob'
            });
          
          return;
          
          }
        else {
          const {data: [v452, v453], secs: v455, time: v454, didSend: v142, from: v451 } = txn5;
          ;
          const v456 = stdlib.addressEq(v393, v451);
          stdlib.assert(v456, {
            at: './index.rsh:91:9:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const v463 = stdlib.safeAdd(v454, v378);
          const txn6 = await (ctc.recv({
            didSend: false,
            evt_cnt: 4,
            funcNum: 8,
            out_tys: [ctc0, ctc0, ctc0, ctc0],
            timeoutAt: ['time', v463],
            waitIfNotPresent: false
            }));
          if (txn6.didTimeout) {
            const txn7 = await (ctc.sendrecv({
              args: [v376, v377, v378, v393, v406, v434, v435, v452, v453, v463],
              evt_cnt: 0,
              funcNum: 9,
              lct: v454,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v491, time: v490, didSend: v192, from: v489 } = txn7;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v393,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v491, time: v490, didSend: v192, from: v489 } = txn7;
            ;
            const v492 = stdlib.addressEq(v376, v489);
            const v493 = stdlib.addressEq(v393, v489);
            const v494 = v492 ? true : v493;
            stdlib.assert(v494, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:102:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Bob'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:54:29:application',
              fs: ['at ./index.rsh:53:9:application call to [unknown function] (defined at: ./index.rsh:53:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:52:28:function exp)', 'at ./index.rsh:102:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'informTimeout',
              who: 'Bob'
              });
            
            return;
            
            }
          else {
            const {data: [v468, v469, v470, v471], secs: v473, time: v472, didSend: v154, from: v467 } = txn6;
            ;
            const v474 = stdlib.addressEq(v376, v467);
            stdlib.assert(v474, {
              at: './index.rsh:101:11:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Bob'
              });
            const v475 = stdlib.digest([ctc0, ctc0], [v468, v469]);
            const v476 = stdlib.digestEq(v434, v475);
            stdlib.assert(v476, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:103:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Bob'
              });
            const v477 = stdlib.digest([ctc0, ctc0], [v470, v471]);
            const v478 = stdlib.digestEq(v435, v477);
            stdlib.assert(v478, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:104:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Bob'
              });
            const v480 = stdlib.safeAdd(v469, v452);
            const v481 = stdlib.eq(v471, v480);
            const v483 = stdlib.eq(v453, v480);
            const v485 = v483 ? false : true;
            const v486 = v481 ? v485 : false;
            const v487 = v481 ? false : true;
            const v488 = v483 ? v487 : false;
            const v576 = v488 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
            const v479 = v486 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : v576;
            const cv398 = v479;
            const cv399 = v472;
            const cv406 = v406;
            
            v398 = cv398;
            v399 = cv399;
            v406 = cv406;
            
            txn3 = txn6;
            continue;}
          
          }
        
        }
      
      }
    const v543 = stdlib.eq(v398, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
    const v546 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:110:12:decimal', stdlib.UInt_max, '2'), v377);
    const v548 = v543 ? v376 : v393;
    ;
    stdlib.protect(ctc1, await interact.seeOutcome(v398), {
      at: './index.rsh:114:24:application',
      fs: ['at ./index.rsh:113:7:application call to [unknown function] (defined at: ./index.rsh:113:25:function exp)'],
      msg: 'seeOutcome',
      who: 'Bob'
      });
    
    return;
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `ByAOAAFQCAUJIAIHKJgBqAFYMCYDAQABAQAiNQAxGEEE+CpkSSJbNQElWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0khBAxAAoRJIQgMQAF4SSUMQAEfSSEFDEAAViEFEkQhBTQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVzAgNf+ABKIFZo6wMgY0AyELWw9ENANXACAxABI0/zEAEhFEsSKyATQDJFuyCCOyEDT/sgezQgQQSCEFNAESRDQESSISTDQCEhFEKGQpZFBJNQNXACA1/0k1BUlKIls1/iVbNf2BEFs1/IEYWzX7gAR/ojtSNP4WUDT9FlA0/BZQNPsWULAyBjQDIQtbDEQ0/zEAEkQ0A1dYIDT+FjT9FlABEkQ0A1d4IDT8FjT7FlABEkQ0/TQDIQpbCDX6NPs0+hI1+TQDgaABWzT6EjX4NP80AyEGWzQDIQlbNANXMCAjIjT4NPkUEE0hBzT5NPgUEE0yBjQDJFtCAuxIIQg0ARJENARJIhJMNAISEUQoZClkUEk1A1cAIDX/gATiG7OpsDIGNAMhClsPRDT/MQASNANXMCAxABIRRLEisgE0AyRbsggjshA0/7IHs0IC+0mBBgxAAK5IIQg0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSklXACA1/yEGWzX+IQlbNf1XMCA1/CRbNftXWCA1+ld4IDX5STUFSSJbNfglWzX3gARKIcv8NPgWUDT3FlCwMgY0AyEKWwxENPwxABJEMgY0/Qg19jT/NP4WUDT9FlA0/FA0+xZQNPpQNPlQNPgWUDT3FlA09hZQKEsBVwB/ZylLAVd/MWdIIQU1ATIGNQJCAmJIIQQ0ARJENARJIhJMNAISEUQoZEk1A1cwIDX/gATMmZJcsDIGNAMhDFsPRDQDVwAgMQASNP8xABIRRLEisgE0AyRbsggjshA0/7IHs0IB9kkhBwxAAOBJgQQMQACYSCEENAESRDQESSISTDQCEhFEKGRJNQNJSklXACA1/yEGWzX+IQlbNf1XMCA1/CRbNftJNQVJVwAgNfpXICA1+YAEYF2kKzT6UDT5ULAyBjQDIQxbDEQ0/zEAEkQyBjT9CDX4NP80/hZQNP0WUDT8UDT7FlA0+lA0+VA0+BZQKEsBVwB/ZylLAVd/IWdIIQg1ATIGNQJCAWwhBxJEIzQBEkQ0BEkiEkw0AhIRRChkNQOABEGxQE2wMgY0AyENWw9EsSKyATQDIQZbsggjshA0A1cAILIHs0IBD0kjDEAASEgjNAESRDQESSISTDQCEhFEKGRJNQMhBls1/4AEmouRdLAyBjQDIQ1bDEQ0/4gBRzQDVwAgNP80AyEJWzEAIzIGNP9JCEIAX0iBoI0GiAEnIjQBEkQ0BEkiEkw0AhIRREk1BUkiWzX/JVs1/oAErNEfwzT/FlA0/hZQsDT/iAD3MgY0/gg1/TEANP8WUDT+FlA0/RZQKEsBVwA4Z0gjNQEyBjUCQgB+Nf81/jX9Nfw1+zX6Nfk0/SMSQQAvNP40+wg1+DT5NPoWUDT7FlA0/FA0/xZQNPgWUChLAVcAYGdIIQQ1ATIGNQJCADqxIrIBIQc0+guyCCOyEDT8NPk0/SEHEk2yB7NCAAAxGSEEEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEgQMxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 176,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v377",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v378",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v377",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v378",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v434",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v435",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v452",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v453",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v468",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v469",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v470",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v471",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e9",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v434",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v435",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v452",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v453",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v468",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v469",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v470",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v471",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001df038038062001df08339810160408190526200002691620002a9565b6000808055436003556040805160208082018352928152815133815284518185015284840151805182850152909301516060840152905190917fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f95919081900360800190a16020820151516200009f90341460076200014a565b620000b9438360200151602001516200017560201b60201c565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a090910190935280519192620001409260029290910190620001cc565b505050506200036d565b81620001715760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b60008262000184838262000309565b9150811015620001c65760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640162000168565b92915050565b828054620001da9062000330565b90600052602060002090601f016020900481019282620001fe576000855562000249565b82601f106200021957805160ff191683800117855562000249565b8280016001018555821562000249579182015b82811115620002495782518255916020019190600101906200022c565b50620002579291506200025b565b5090565b5b808211156200025757600081556001016200025c565b604080519081016001600160401b0381118282101715620002a357634e487b7160e01b600052604160045260246000fd5b60405290565b60008183036060811215620002bd57600080fd5b620002c762000272565b835181526040601f1983011215620002de57600080fd5b620002e862000272565b60208581015182526040909501518582015293810193909352509092915050565b600082198211156200032b57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200034557607f821691505b602082108114156200036757634e487b7160e01b600052602260045260246000fd5b50919050565b611a73806200037d6000396000f3fe60806040526004361061009a5760003560e01c80638e314769116100615780638e31476914610115578063ab53f2c614610128578063bf2c5b241461014b578063cc923b291461015e578063de73699814610171578063ebdbfdcc1461018457005b80631e93b0f1146100a357806321642639146100c75780632c10a159146100da5780637eea518c146100ed578063832307571461010057005b366100a157005b005b3480156100af57600080fd5b506003545b6040519081526020015b60405180910390f35b6100a16100d536600461155e565b610197565b6100a16100e8366004611581565b6103fc565b6100a16100fb366004611581565b61058b565b34801561010c57600080fd5b506001546100b4565b6100a1610123366004611581565b610709565b34801561013457600080fd5b5061013d6108a4565b6040516100be929190611593565b6100a1610159366004611581565b610941565b6100a161016c3660046115f0565b610ad8565b6100a161017f366004611581565b610dec565b6100a161019236600461155e565b610f47565b6101a7600760005414601c6111b8565b6101c1813515806101ba57506001548235145b601d6111b8565b6000808055600280546101d390611602565b80601f01602080910402602001604051908101604052809291908181526020018280546101ff90611602565b801561024c5780601f106102215761010080835404028352916020019161024c565b820191906000526020600020905b81548152906001019060200180831161022f57829003601f168201915b5050505050806020019051810190610264919061168b565b905061027c6040518060200160405280600081525090565b61028d8260e001514310601e6111b8565b7fb2a03f9306ab783007397921312164b54fbeead1388356342ff3ef55c8552b3f33846040516102be929190611737565b60405180910390a16102d23415601a6111b8565b60608201516102ed906001600160a01b03163314601b6111b8565b6102fb4383604001516111de565b81526040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a0808601519084015260c080860151908401528581013560e084015285820135610100840152835161012084015260096000554360015590516103d191839101611768565b604051602081830303815290604052600290805190602001906103f5929190611417565b5050505050565b61040c60016000541460096111b8565b6104268135158061041f57506001548235145b600a6111b8565b60008080556002805461043890611602565b80601f016020809104026020016040519081016040528092919081815260200182805461046490611602565b80156104b15780601f10610486576101008083540402835291602001916104b1565b820191906000526020600020905b81548152906001019060200180831161049457829003601f168201915b50505050508060200190518101906104c991906117ef565b90506104dc81606001514310600b6111b8565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338360405161050d929190611868565b60405180910390a16105268160200151341460086111b8565b61052e61149b565b815181516001600160a01b039091169052602080830180518351830152604080850151845190910152825133606090910152818301805160019052514392019190915251800160208201516040015261058681611231565b505050565b61059b600160005414600d6111b8565b6105b5813515806105ae57506001548235145b600e6111b8565b6000808055600280546105c790611602565b80601f01602080910402602001604051908101604052809291908181526020018280546105f390611602565b80156106405780601f1061061557610100808354040283529160200191610640565b820191906000526020600020905b81548152906001019060200180831161062357829003601f168201915b505050505080602001905181019061065891906117ef565b905061066c8160600151431015600f6111b8565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d950338360405161069d929190611868565b60405180910390a16106b13415600c6111b8565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156106ee573d6000803e3d6000fd5b5060008080556001819055610705906002906114f4565b5050565b61071960056000541460176111b8565b6107338135158061072c57506001548235145b60186111b8565b60008080556002805461074590611602565b80601f016020809104026020016040519081016040528092919081815260200182805461077190611602565b80156107be5780601f10610793576101008083540402835291602001916107be565b820191906000526020600020905b8154815290600101906020018083116107a157829003601f168201915b50505050508060200190518101906107d691906118a5565b90506107ea8160a0015143101560196111b8565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d338360405161081b929190611868565b60405180910390a161082f341560156111b8565b8051610863906001600160a01b031633146108595760608201516001600160a01b0316331461085c565b60015b60166111b8565b80606001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f193505050501580156106ee573d6000803e3d6000fd5b6000606060005460028080546108b990611602565b80601f01602080910402602001604051908101604052809291908181526020018280546108e590611602565b80156109325780601f1061090757610100808354040283529160200191610932565b820191906000526020600020905b81548152906001019060200180831161091557829003601f168201915b50505050509050915091509091565b61095160076000541460216111b8565b61096b8135158061096457506001548235145b60226111b8565b60008080556002805461097d90611602565b80601f01602080910402602001604051908101604052809291908181526020018280546109a990611602565b80156109f65780601f106109cb576101008083540402835291602001916109f6565b820191906000526020600020905b8154815290600101906020018083116109d957829003601f168201915b5050505050806020019051810190610a0e919061168b565b9050610a228160e0015143101560236111b8565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3383604051610a53929190611868565b60405180910390a1610a673415601f6111b8565b8051610a9b906001600160a01b03163314610a915760608201516001600160a01b03163314610a94565b60015b60206111b8565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156106ee573d6000803e3d6000fd5b610ae860096000541460286111b8565b610b0281351580610afb57506001548235145b60296111b8565b600080805560028054610b1490611602565b80601f0160208091040260200160405190810160405280929190818152602001828054610b4090611602565b8015610b8d5780601f10610b6257610100808354040283529160200191610b8d565b820191906000526020600020905b815481529060010190602001808311610b7057829003601f168201915b5050505050806020019051810190610ba59190611939565b6040805160608101825260008082526020820181905291810191909152909150610bd78261012001514310602a6111b8565b604080513381528435602080830191909152850135818301529084013560608083019190915284013560808083019190915284013560a08201527fc7e07aa759791812e0e03fb583c5fbed2f43e8adb4535b4faa695e77e84ea4fe9060c00160405180910390a1610c4a341560246111b8565b8151610c62906001600160a01b0316331460256111b8565b60408051610cae91610c8891602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360a001511460266111b8565b604080516060858101356020830152608086013592820192909252610cf491016040516020818303038152906040528051906020012060001c8360c001511460276111b8565b610d0983602001602001358360e001516111de565b808252608084013581146020830152610100830151146040820152610d2c61149b565b825181516001600160a01b039182169052602080850151835182015260408086015184519091015260608086015184519316920191909152820151610d72576000610d85565b8160400151610d82576001610d85565b60005b610dbe578160400151610d99576000610dac565b8160200151610da9576001610dac565b60005b610db7576001610dc1565b6000610dc1565b60025b60208083018051929092528151439101526080840151905160400152610de681611231565b50505050565b610dfc600960005414602d6111b8565b610e1681351580610e0f57506001548235145b602e6111b8565b600080805560028054610e2890611602565b80601f0160208091040260200160405190810160405280929190818152602001828054610e5490611602565b8015610ea15780601f10610e7657610100808354040283529160200191610ea1565b820191906000526020600020905b815481529060010190602001808311610e8457829003601f168201915b5050505050806020019051810190610eb99190611939565b9050610ece816101200151431015602f6111b8565b7f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd3383604051610eff929190611868565b60405180910390a1610f133415602b6111b8565b8051610863906001600160a01b03163314610f3d5760608201516001600160a01b03163314610f40565b60015b602c6111b8565b610f5760056000541460126111b8565b610f7181351580610f6a57506001548235145b60136111b8565b600080805560028054610f8390611602565b80601f0160208091040260200160405190810160405280929190818152602001828054610faf90611602565b8015610ffc5780601f10610fd157610100808354040283529160200191610ffc565b820191906000526020600020905b815481529060010190602001808311610fdf57829003601f168201915b505050505080602001905181019061101491906118a5565b905061102c6040518060200160405280600081525090565b61103d8260a00151431060146111b8565b7fa8815bd11c35a4f9905db53f65c359036789c5fd334917c999c5b2420107265a338460405161106e929190611737565b60405180910390a1611082341560106111b8565b815161109a906001600160a01b0316331460116111b8565b6110a84383604001516111de565b81526040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915282516001600160a01b039081168252602080850151818401526040808601518185015260608087015190931692840192909252608080860151908401528581013560a08401528582013560c0840152835160e084015260076000554360015590516103d19183910160006101008201905060018060a01b038084511683526020840151602084015260408401516040840152806060850151166060840152506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b816107055760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6000826111eb83826119e4565b915081101561122b5760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b60448201526064016111d5565b92915050565b60408051602081019091526000815260208201515160011415611355576112688260200151602001518360000151604001516111de565b81526040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a08101919091528251516001600160a01b039081168083528451602090810151818501908152865160409081015181870190815288516060908101518716818901908152858b01518401516080808b019182528b5160a0808d019182526005600055436001558751998a019a909a529651958801959095529251918601919091525190951690830152925191810191909152905160c082015260e00160405160208183030381529060405260029080519060200190610de6929190611417565b60208201515160021461136d57815160600151611371565b8151515b6001600160a01b03166108fc61139060028560000151602001516113b8565b6040518115909202916000818181858888f193505050501580156106ee573d6000803e3d6000fd5b60008115806113dc575082826113ce81836119fc565b92506113da9083611a1b565b145b61122b5760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b60448201526064016111d5565b82805461142390611602565b90600052602060002090601f016020900481019282611445576000855561148b565b82601f1061145e57805160ff191683800117855561148b565b8280016001018555821561148b579182015b8281111561148b578251825591602001919060010190611470565b50611497929150611531565b5090565b6040805160c0810182526000918101828152606082018390526080820183905260a082019290925290819081526020016114ef60405180606001604052806000815260200160008152602001600081525090565b905290565b50805461150090611602565b6000825580601f10611510575050565b601f01602090049060005260206000209081019061152e9190611531565b50565b5b808211156114975760008155600101611532565b60006060828403121561155857600080fd5b50919050565b60006060828403121561157057600080fd5b61157a8383611546565b9392505050565b60006040828403121561155857600080fd5b82815260006020604081840152835180604085015260005b818110156115c7578581018301518582016060015282016115ab565b818111156115d9576000606083870101525b50601f01601f191692909201606001949350505050565b600060a0828403121561155857600080fd5b600181811c9082168061161657607f821691505b6020821081141561155857634e487b7160e01b600052602260045260246000fd5b604051610140810167ffffffffffffffff8111828210171561166957634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b038116811461168657600080fd5b919050565b600061010080838503121561169f57600080fd5b6040519081019067ffffffffffffffff821181831017156116d057634e487b7160e01b600052604160045260246000fd5b816040526116dd8461166f565b815260208401516020820152604084015160408201526116ff6060850161166f565b60608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b6001600160a01b03831681526080810161157a60208301848035825260208082013590830152604090810135910152565b81516001600160a01b031681526101408101602083015160208301526040830151604083015260608301516117a860608401826001600160a01b03169052565b506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525092915050565b60006080828403121561180157600080fd5b6040516080810181811067ffffffffffffffff8211171561183257634e487b7160e01b600052604160045260246000fd5b60405261183e8361166f565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b6001600160a01b03831681528135602080830191909152606082019083013580151580821461189657600080fd5b80604085015250509392505050565b600060c082840312156118b757600080fd5b60405160c0810181811067ffffffffffffffff821117156118e857634e487b7160e01b600052604160045260246000fd5b6040526118f48361166f565b815260208301516020820152604083015160408201526119166060840161166f565b60608201526080830151608082015260a083015160a08201528091505092915050565b6000610140828403121561194c57600080fd5b611954611637565b61195d8361166f565b8152602083015160208201526040830151604082015261197f6060840161166f565b60608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152508091505092915050565b634e487b7160e01b600052601160045260246000fd5b600082198211156119f7576119f76119ce565b500190565b6000816000190483118215151615611a1657611a166119ce565b500290565b600082611a3857634e487b7160e01b600052601260045260246000fd5b50049056fea2646970667358221220d2c586d8fbb589668963892b0dd4e3f58e1d7270e404f130222e18e2f00f53f564736f6c634300080c0033`,
  BytecodeLen: 7664,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:64:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:69:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:111:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:74:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:84:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:85:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:92:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:93:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:102:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
