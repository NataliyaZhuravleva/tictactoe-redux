import gameHistoryReducer from '../../reducers/game-history-reducer';

describe('gameHistoryReducer', () => {

  let action;
  const startGame = {
    history:[
        {
         squares: [null,null,null,null,null,null,null,null,null]
        },

    ],
    stepNumber: 0,
    xIsNext: true,
  }
  
  const firstMove = 
    // move: [
  
        {
          squares: ['X',null,null,null,null,null,null,null,null]
        }
      // ]

  test('Should return default state if there no action type passed into the reducer', () => {
    
    expect(gameHistoryReducer({}, { type: null })).toEqual({});
  });
  
  test('Should return state of first game with null history and stepNumber=0 and xIsNext: true', ()=>{
    const {history, stepNumber, xIsNext}=startGame;
    action ={
      type: 'START_GAME',
      history: history,
      stepNumber: stepNumber,
      xIsNext: xIsNext,
    };
    expect(gameHistoryReducer({}, action)).toEqual({
        history: history,
        stepNumber: stepNumber,
        xIsNext: xIsNext,   
    });
  });
  
  test('Should return state after move stepNumber=1 and xIsNext: false', ()=>{
    const {history, stepNumber, xIsNext}=startGame;
    const {squares}=firstMove;
    
    console.log(squares);
    console.log({squares});
    // console.log({squares});
    action ={
      type: 'NEXT_MOVE',
      history: history,//.concat([{squares}]),
      stepNumber: history.length,
      xIsNext: xIsNext,
      squares: squares,
    };
    console.log(action);
    expect(gameHistoryReducer({startGame}, action)).toMatchObject({
      history:[
        {
         squares: [null,null,null,null,null,null,null,null,null]
        },
        {
          squares: ['X',null,null,null,null,null,null,null,null]
        },
      ],
      stepNumber: 1,
      xIsNext: false,
    });
  });
})

// history = [
//   // Before first move
//   {
//     squares: [
//       null, null, null,
//       null, null, null,
//       null, null, null,
//     ]
//   },
//       null, null, null,
//       null, 'X', null,
//       null, null, null,
//     ]
//   },
//   // After second move
//   {
//     squares: [
//       null, null, null,
//       null, 'X', null,
//       null, null, 'O',
//     ]
//   },
//   // ...
// ]



// describe('gameHistoryReducer', () => {

//   let action; 
//   const startGame = { squares: [null,null,null,null,null,null,null,null,null] };
//   const newHistory = [ { squares: ['X',null,null,null,null,null,null,null,null] }, ];


//   test('Should return state after move stepNumber=1 and xIsNext: false', ()=>{
//     action = {
//       type: 'NEXT_MOVE',
//       squares: newHistory,
//     };

//     expect(gameHistoryReducer(newHistory, action)).toEqual(
//       [
//         { squares: [null,null,null,null,null,null,null,null,null] },
//         { squares: ['X',null,null,null,null,null,null,null,null] }
//       ]
//     )
//     }
    