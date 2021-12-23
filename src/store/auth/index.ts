import { handleActions } from "redux-actions";
import { Auth, SIGNIN_SUCCESS, SIGNUP_SUCCESS } from "./types";

type AuthStore = {
  auth: Auth | null;
};

const authStore: AuthStore = {
  auth: null,
};

type Payload = Auth;
const authReducer = handleActions<AuthStore, Payload>(
  {
    [SIGNIN_SUCCESS]: (state, action) => ({
      ...state,
      auth: action.payload,
    }),
    [SIGNUP_SUCCESS]: (state, action) => ({
      ...state,
      auth: action.payload,
    }),
  },
  authStore
);

export default authReducer;
