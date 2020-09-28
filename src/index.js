import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//Redux puro sem hooks
// import App from "./ReduxPuroSemHooks/App";
// import store from "./ReduxPuroSemHooks/store";

//Redux puro com hooks
// import App from "./ReduxPuroComHooks/App";
// import store from "./ReduxPuroComHooks/store";

//Redux saga com hooks
// import App from "./ReduxSagaComHooks/App";
// import store from "./ReduxSagaComHooks/store";

//Reux saga com Sauce e Hooks
import App from "./ReduxSagaSauceComHooks/App";
import store from "./ReduxSagaSauceComHooks/store";

import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
