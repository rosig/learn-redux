import { all } from "redux-saga/effects";
import sagaNames from "./sagaNames";

export default function* rootSaga() {
  return yield all([sagaNames]);
}
