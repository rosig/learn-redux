import { all } from "redux-saga/effects";
import sagaNames from "./names/saga";

export default function* rootSaga() {
  return yield all([sagaNames]);
}
