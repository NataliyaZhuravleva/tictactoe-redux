import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { createStore } from "redux";
import reducer from "./reducers/game-history-reducer";
import { Provider } from "react-redux";

const initialState = {
  // masterGame: {
    history: [
      {
        squares: Array(9).fill(null),
      },
    ],
    stepNumber: 0,
    xIsNext: true,
  // },
};
const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
