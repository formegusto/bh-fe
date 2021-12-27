import { handleActions } from "redux-actions";
import { APPLY_API_SUCCESS } from "./types";

type ApiApplicationStore = {};

const apiApplicationStore: ApiApplicationStore = {};

const apiApplicationReducer = handleActions<ApiApplicationStore, any>(
  {
    [APPLY_API_SUCCESS]: (state, action) => ({}),
  },
  apiApplicationStore
);
export default apiApplicationReducer;
