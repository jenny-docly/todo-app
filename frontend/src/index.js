import React from "react";
import ReactDOM from "react-dom";

// Redux
import { createStore } from "redux";
import { todoAppReducer } from "./store/reducer.js";
import { Provider as Redux } from "react-redux";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

const store = createStore(
  todoAppReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const Root = () => (
  <Redux store={store}>
    <App />
  </Redux>
);

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
