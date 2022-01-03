import createActionTypes from "src/utils/createActionTypes";
import { Response } from "../types";

// DataType
export type ResponseGetInfo = Response<{
  target: "building" | "unit" | "sensor";
  data: Building[] | Unit[] | Sensor[];
}>;

export type InfosPath = {
  target: "building" | "unit" | "sensor";
  rootId?: number;
};

export type Building = {
  id: number;
  name: string;
  image?: string;
};

export type Unit = {
  id: number;
  name: string;
};

export type Sensor = Unit & {
  timeReports: Report;
};

export type Report = {
  createdAt: Date;

  isStay?: boolean;
  residentCount?: number;
  temperature?: number;
  humidity?: number;
  lux?: number;
  skinTemperature?: number;
  residentDistribution?: number;
  satisfaction?: number;
};

// Redux Action Type
export const [GET_INFOS, GET_INFOS_SUCCESS, GET_INFOS_FAILURE] =
  createActionTypes("info/get_infos");
