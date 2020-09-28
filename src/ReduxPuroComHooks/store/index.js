import { createStore, compose } from "redux";

import rootReducers from "./reducers";

const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default createStore(rootReducers, enhancers);
