import { takeLatest } from "redux-saga/effects";
import Api from "src/api";
import createRequestSaga from "src/utils/createRequestSaga";
import { SIGNUP } from "./types";

const signUpSaga = createRequestSaga<string>(
  SIGNUP,
  Api["AuthAPI"].signUp,
  true,
  true
);

export default function* authSaga() {
  yield takeLatest(SIGNUP, signUpSaga);
}
