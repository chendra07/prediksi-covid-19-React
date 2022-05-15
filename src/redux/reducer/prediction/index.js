import { predictionTypes } from "../../action-types";
import { dummy } from "../../../data/dummy_data";
const { SET_PREDICTION_DATA, SET_PREDICTION_PPKM } = predictionTypes;

const initialState = {
  dataCovid: [],
  levelPPKM: "undefined",
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_PREDICTION_DATA:
      return { ...state, dataCovid: payload };
    case SET_PREDICTION_PPKM:
      return { ...state, levelPPKM: payload };
    default:
      return state;
  }
};

export default reducer;
