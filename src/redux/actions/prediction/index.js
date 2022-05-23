import { predictionTypes } from "../../action-types";
import { message } from "antd";
import Services from "../../../services";
import findLevelPPKM from "../../../utils/findLevelPPKM";

const { SET_PREDICTION_DATA, SET_PREDICTION_PPKM } = predictionTypes;

const setPredictionData = (payload) => {
  return {
    type: SET_PREDICTION_DATA,
    payload: payload,
  };
};

const setPredictionPPKM = (payload) => {
  return {
    type: SET_PREDICTION_PPKM,
    payload: payload,
  };
};

const postPredictionData =
  (request, showLoading, dismissLoading) => (dispatch) => {
    showLoading && dispatch(showLoading());
    return new Promise((resolve, reject) => {
      const data = {
        numOfDays: request,
      };
      Services.Post("predictCovid/predict", data, false)
        .then((res) => {
          console.log("isi res: ", res.data.data);
          if (res.data.data) {
            resolve(res.data.data);
            dispatch(setPredictionData(res.data.data));
            dispatch(setPredictionPPKM(findLevelPPKM(res.data.data)));
            message.success("Data Fetched!");
          } else {
            reject(res);
          }
        })
        .catch((err) => {
          message.error("Error Connection!");
          reject(err);
        })
        .finally(() => {
          dismissLoading && dispatch(dismissLoading());
        });
    });
  };

export { postPredictionData };
