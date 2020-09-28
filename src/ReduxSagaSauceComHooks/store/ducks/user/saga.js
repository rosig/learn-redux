import { put, takeLatest, all } from "redux-saga/effects";

import { Types, Creators as NamesActions } from "./index";

function* fetchName(action) {
  const { toggleFlagName, toggleFlagAge } = NamesActions;
  try {
    yield put(toggleFlagAge());
    // ----------------
    yield put(toggleFlagName());
    // ---------------------
    // yield put(submittoApi())
    console.log("OKOKOK");
  } catch (e) {
    console.log(e);
  }
}

export default all([takeLatest(Types.FLAG_SAGA, fetchName)]);
