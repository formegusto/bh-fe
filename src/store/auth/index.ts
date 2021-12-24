import { handleActions } from "redux-actions";
import { Response } from "../types";
import { ResponseAuth, SIGNIN_SUCCESS, SIGNUP_SUCCESS } from "./types";

type AuthStore = {
  auth: string | null;
};

const authStore: AuthStore = {
  auth: null,
};

type Payload = Response<ResponseAuth>;
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
  },
  authStore
);

export default authReducer;
