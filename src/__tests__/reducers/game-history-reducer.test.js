import gameHistoryReducer from '../../reducers/game-history-reducer';

describe('gameHistoryReducer', () => {

  test('Should return default state if there no action type passed into the reducer', () => {
    expect(gameHistoryReducer({}, { type: null })).toEqual({});
  });
  

})
// {
//   history: [{squares: Array(9).fill(null)}],
//   stepNumber: 0,
//   xIsNext: true,
// };

// {
//   // formVisibleOnPage: false,
//   selectedTicket: null,
//   editing: false
// };