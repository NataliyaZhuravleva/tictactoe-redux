import gameHistoryReducer from "../../reducers/game-history-reducer";

describe("gameHistoryReducer", () => {
  let action;
  const startGame = {
    history: [
      {
        squares: [null, null, null, null, null, null, null, null, null],
      },
    ],
    stepNumber: 0,
    xIsNext: true,
  };

  const firstMove = {
    squares: ["X", null, null, null, null, null, null, null, null],
  };

  const historySecondStep = [
    {
      squares: [null, null, null, null, null, null, null, null, null],
    },
    {
      squares: ["X", null, null, null, null, null, null, null, null],
    },
    {
      squares: ["X", "Y", null, null, null, null, null, null, null],
    },
  ];

  test("Should return default state if there no action type passed into the reducer", () => {
    expect(gameHistoryReducer({}, { type: null })).toEqual({});
  });

  test("Should return state of first game with null history and stepNumber=0 and xIsNext: true", () => {
    const { history, stepNumber, xIsNext } = startGame;
    action = {
      type: "START_GAME",
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

  test("Should return state after move stepNumber=1 and xIsNext: false", () => {
    const { history, stepNumber, xIsNext } = startGame;
    const { squares } = firstMove;
    action = {
      type: "NEXT_MOVE",
      history: history,
      stepNumber: history.length,
      xIsNext: xIsNext,
      squares: squares,
    };
    expect(gameHistoryReducer({ startGame }, action)).toMatchObject({
      history: [
        {
          squares: [null, null, null, null, null, null, null, null, null],
        },
        {
          squares: ["X", null, null, null, null, null, null, null, null],
        },
      ],
      stepNumber: 1,
      xIsNext: false,
    });
  });
  test("Should return previous history state", () => {
    console.log(historySecondStep);
    action = {
      type: 'PREVIOUS_STEP',
      stepNumber: 1,
    };
    console.log(ac)
    expect(gameHistoryReducer({historySecondStep}, action)).toEqual({
      history: [
        {
          squares: [null, null, null, null, null, null, null, null, null],
        },
        {
          squares: ["X", null, null, null, null, null, null, null, null],
        },
      ],
      //stepNumber: 2,
    });
  });
});
