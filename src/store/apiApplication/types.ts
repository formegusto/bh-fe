import createActionTypes from "src/utils/createActionTypes";

// data types
export enum API_STATUS {
  NONE = "none",
  INACTIVE = "inactive",
  WAITING = "waiting",
  ACTIVE = "active",
}

export const API_STATUS_MESSAGE: { [key: string]: string } = {
  [API_STATUS.NONE]: "API 신청정보가 존재하지 않습니다.",
  [API_STATUS.INACTIVE]: "API 사용이 중지된 상태 입니다.",
  [API_STATUS.WAITING]: "관리자 승인 대기 중 입니다.",
  [API_STATUS.ACTIVE]: "API 사용이 가능한 상태 입니다.",
};

export type ApiApplication = {
  id?: number;
  status?: API_STATUS;
  purpose?: string;
};

// redux action types
export const [APPLY_API, APPLY_API_SUCCESS, APPLY_API_FAILURE] =
  createActionTypes("apiApplication/apply");
