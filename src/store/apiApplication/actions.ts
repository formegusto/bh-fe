import { createAction } from "redux-actions";
import { ApiApplication, APPLY_API } from "./types";

export const applyApi = createAction<ApiApplication, string>(
  APPLY_API,
  (purpose: string) => ({
    purpose,
  })
);
