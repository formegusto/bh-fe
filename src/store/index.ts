import { combineReducers } from "redux";
import auth from "./auth";
import sessionCert from "./sessionCert";

const rootReducer = combineReducers({ auth, sessionCert });

export type RootReducer = ReturnType<typeof rootReducer>;
export default rootReducer;
