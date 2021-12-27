import { createAction } from "redux-actions";
import {
  CHECK,
  RequestSignIn,
  RequestSignUp,
  SETAUTH,
  SIGNIN,
  SIGNUP,
} from "./types";

export const signIn = createAction<RequestSignIn>(SIGNIN);
export const signUp = createAction<RequestSignUp>(SIGNUP);
export const check = createAction(CHECK);
export const setAuth = createAction<string>(SETAUTH);
