import { createAction } from "redux-actions";
import { ApiApplication } from "../apiApplication/types";
import {
  CHECK,
  RequestSignIn,
  RequestSignUp,
  SETAUTH,
  SET_AUTH_NEW_APPLICATION,
  SIGNIN,
  SIGNUP,
} from "./types";

export const signIn = createAction<RequestSignIn>(SIGNIN);
export const signUp = createAction<RequestSignUp>(SIGNUP);
export const check = createAction(CHECK);
export const setAuth = createAction<string>(SETAUTH);
export const setNewApplication = createAction<ApiApplication>(
  SET_AUTH_NEW_APPLICATION
);
