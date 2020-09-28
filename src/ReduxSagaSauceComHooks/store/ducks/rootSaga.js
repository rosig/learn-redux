import { all } from "redux-saga/effects";
import sagaNames from "./names/saga";
import sageUsers from "./user/saga";

export default function* rootSaga() {
  return yield all([sagaNames, sageUsers]);
}
