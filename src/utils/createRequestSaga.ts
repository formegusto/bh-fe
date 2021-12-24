import { AxiosResponse } from "axios";
import { Action } from "redux";
import { call, put, select } from "redux-saga/effects";
import { symmetricDecrypt, symmetricEncrypt } from "./ARIAUtils";

interface SagaAction<Payload = any> extends Action<string> {
  payload: Payload;
  error?: boolean;
}

export default function createRequestSaga<P = any, AR = any>(
  type: string,
  request: (...params: P[]) => Promise<AxiosResponse<AR>>,
  isEncrypt?: boolean,
  isDecrypt?: boolean
) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return function* (action: SagaAction<P>) {
    try {
      if (isEncrypt) {
        const symKey: string = yield select(
          (state) => state.sessionCert.symmetricKey
        );
        action.payload = symmetricEncrypt(
          JSON.stringify(action.payload),
          symKey
        ) as any;
      }
      const response: AxiosResponse<AR> = yield call(request, action.payload);

      console.log(response);
      if (isDecrypt) {
        const symKey: string = yield select(
          (state) => state.sessionCert.symmetricKey
        );
        const decBody = symmetricDecrypt(response.data as any, symKey);
        yield put<SagaAction<AR>>({
          type: SUCCESS,
          payload: decBody as any,
        });
      } else {
        yield put<SagaAction<AR>>({
          type: SUCCESS,
          payload: response.data,
        });
      }
    } catch (e: any) {
      yield put<SagaAction<AR>>({
        type: FAILURE,
        payload: e.response.data,
        error: true,
      });
    }
  };
}
