export default (state = {}, action) => {

  const {history, xIsNext, stepNumber, squares} = action;
  
  switch (action.type) {
    case 'START_GAME':
      return Object.assign({}, state, {
        history: history,
        stepNumber: stepNumber,
        xIsNext: xIsNext,
      });
    case 'NEXT_MOVE':
      return Object.assign({}, state, {
        history: history.concat([
              {
                squares: squares
              },
            ]),
            stepNumber: history.length,
            xIsNext: !xIsNext,
      });
    default:
    return state;
  }
};