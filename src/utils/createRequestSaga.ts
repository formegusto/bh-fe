import { AxiosResponse } from "axios";
import { Action } from "redux";
import { call, put } from "redux-saga/effects";

interface SagaAction<Payload = any> extends Action<string> {
  payload: Payload;
  error?: boolean;
}

export default function createRequestSaga<P = any, AR = any>(
  type: string,
  request: (...params: P[]) => Promise<AxiosResponse<AR>>,
  successCb?: () => void | null,
  failureCb?: () => void | null
) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return function* (action: SagaAction<P>) {
    try {
      const response: AxiosResponse<AR> = yield call(request, action.payload);
      yield put<SagaAction<AR>>({
        type: SUCCESS,
        payload: response.data,
      });
      if (successCb) successCb();
    } catch (e: any) {
      yield put<SagaAction<AR>>({
        type: FAILURE,
        payload: e.response.data,
        error: true,
      });
      if (failureCb) failureCb();
    }
  };
}
