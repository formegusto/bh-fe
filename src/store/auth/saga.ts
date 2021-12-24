import { takeLatest } from "redux-saga/effects";
import Api from "src/api";
import createRequestSaga from "src/utils/createRequestSaga";
import { SIGNIN, SIGNUP } from "./types";

const signInSaga = createRequestSaga<string>(
  SIGNIN,
  Api["AuthAPI"].signIn,
  true,
  true,
  "로그인 되었습니다."
);

const signUpSaga = createRequestSaga<string>(
  SIGNUP,
  Api["AuthAPI"].signUp,
  true,
  true,
  "회원가입에 성공하였습니다."
);

export default function* authSaga() {
  yield takeLatest(SIGNIN, signInSaga);
  yield takeLatest(SIGNUP, signUpSaga);
}
