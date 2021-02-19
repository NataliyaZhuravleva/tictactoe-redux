export default (state = {}, action) => {

  const {history, xIsNext, stepNumber, squares, historyStep} = action;
  
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
    case 'PREVIOUS_STEP':
      let state={...state};
      return history.slice(0, stepNumber+1);
   
    default:
    return state;
  }
};