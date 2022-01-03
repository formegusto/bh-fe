import { createAction } from "redux-actions";
import { GET_INFOS, InfosPath } from "./types";

export const getInfos = createAction<string, InfosPath>(
  GET_INFOS,
  (infosPath) =>
    `/${infosPath.target}${infosPath.rootId ? `/${infosPath.rootId}` : ""}`
);
