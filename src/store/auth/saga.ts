import { takeLatest } from "redux-saga/effects";
import Api from "src/api";
import createRequestSaga from "src/utils/createRequestSaga";
import { SIGNIN, SIGNUP } from "./types";

const signInSaga = createRequestSaga<string>(
  SIGNIN,
  Api["AuthAPI"].signIn,
  true,
  true
);

const signUpSaga = createRequestSaga<string>(
  SIGNUP,
  Api["AuthAPI"].signUp,
  true,
  true
);

export default function* authSaga() {
  yield takeLatest(SIGNIN, signInSaga);
  yield takeLatest(SIGNUP, signUpSaga);
}
