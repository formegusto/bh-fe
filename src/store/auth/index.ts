import { handleActions } from "redux-actions";
import {
  CHECK_SUCCESS,
  ResponseAuth,
  SETAUTH,
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
      user: action.payload.user,
    }),
    [SETAUTH]: (state, action) => ({
      ...state,
      auth: action.payload as any,
    }),
  },
  authStore
);

export default authReducer;
