import createRequestSaga from "src/utils/createRequestSaga";
import { APPLY_API } from "./types";
import Api from "src/api";
import { takeLatest } from "redux-saga/effects";

const applyApiSaga = createRequestSaga<string>(
  APPLY_API,
  Api["ApiApplicationAPI"].applyApi,
  true,
  true,
  "API 신청이 완료되었습니다."
);

export default function* apiApplicationSaga() {
  yield takeLatest(APPLY_API, applyApiSaga);
}
