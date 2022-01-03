import { handleActions } from "redux-actions";
import { Building, Unit, Sensor, GET_INFOS_SUCCESS } from "./types";

type InformationStore = {
  buildings?: Building[] | null;
  units?: Unit[] | null;
  sensors?: Sensor[] | null;
};

const informationStore: InformationStore = {
  buildings: null,
  units: null,
  sensors: null,
};

const informationReducer = handleActions<InformationStore, any>(
  {},
  informationStore
);
export default informationReducer;
