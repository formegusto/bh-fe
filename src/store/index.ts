import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import sessionCert from "./sessionCert";

const rootReducer = combineReducers({ auth, sessionCert, alert });

export type RootReducer = ReturnType<typeof rootReducer>;
export default rootReducer;
