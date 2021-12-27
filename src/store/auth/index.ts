import { handleActions } from "redux-actions";
import { API_STATUS } from "../apiApplication/types";
import {
  CHECK_SUCCESS,
  ResponseAuth,
  SETAUTH,
  SET_AUTH_NEW_APPLICATION,
  SIGNIN_SUCCESS,
  SIGNUP_SUCCESS,
  UserData,
} from "./types";

type AuthStore = {
  auth?: string | null;
  user?: UserData | null;
};

const authStore: AuthStore = {
  auth: null,
  user: null,
};

type Payload = ResponseAuth;
const authReducer = handleActions<AuthStore, Payload>(
  {
    [SIGNIN_SUCCESS]: (state, action) => ({
      ...state,
      auth: action.payload.token,
    }),
    [SIGNUP_SUCCESS]: (state, action) => ({
      ...state,
      auth: action.payload.token,
    }),
    [CHECK_SUCCESS]: (state, action) => ({
      ...state,
      user: action.payload.user
        ? {
            ...action.payload.user,
            apiApplication:
              action.payload.user.apiApplication === null
                ? {
                    status: API_STATUS.NONE,
                  }
                : action.payload.user.apiApplication,
          }
        : null,
    }),
    [SETAUTH]: (state, action) => ({
      ...state,
      auth: action.payload as any,
    }),
    [SET_AUTH_NEW_APPLICATION]: (state, action: any) => ({
      ...state,
      user: state.user
        ? {
            ...state.user,
            apiApplication: action.payload,
          }
        : null,
    }),
  },
  authStore
);

export default authReducer;
