import { put, takeLatest, all } from "redux-saga/effects";
import { addName } from "../actions";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchName(action) {
  try {
    yield put(addName(action.payload.name));
  } catch (e) {
    console.log(e);
  }
}

export default all([takeLatest("SAGA_ADD_NAME", fetchName)]);

/*
  Starts fetchName on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
// export default function* sagaNames() {
//   yield takeEvery("SAGA_ADD_NAME", fetchName);
// }

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/

// function* sagaNames() {
//   yield takeLatest("USER_FETCH_REQUESTED", fetchName);
// }
