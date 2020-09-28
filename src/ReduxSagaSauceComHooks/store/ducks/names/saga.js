import { put, takeLatest, all } from "redux-saga/effects";

import { Types, Creators as NamesActions } from "./index";

function* fetchName(action) {
  const { addName } = NamesActions;
  try {
    yield put(addName(action.name));
    console.log("fetch-saga");
  } catch (e) {
    console.log(e);
  }
}

export default all([takeLatest(Types.ADD_NAME_SAGA, fetchName)]);
