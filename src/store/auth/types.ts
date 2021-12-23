import createActionTypes from "src/utils/createActionTypes";

// auth variable type
export interface Auth {
  token: string;
}

export interface RequestSignIn {
  username: string;
  password: string;
}

export interface RequestSignUp extends RequestSignIn {
  passwordConfirm: string;
  name: string;
  organization: string;
  email: string;
  phone: string;
}

// redux action type
export const [SIGNIN, SIGNIN_SUCCESS, SIGNIN_FAILURE] =
  createActionTypes("auth/signin");
export const [SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE] =
  createActionTypes("auth/signup");
