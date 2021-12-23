import { createAction } from "redux-actions";
import { RequestSignIn, RequestSignUp, SIGNIN, SIGNUP } from "./types";

export const signIn = createAction<RequestSignIn>(SIGNIN);
export const signUp = createAction<RequestSignUp>(SIGNUP);
