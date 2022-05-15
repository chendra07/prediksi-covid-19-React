import { loadingTypes } from "../../action-types";

const { DISMISS_LOADING, SHOW_LOADING } = loadingTypes;

export const showLoading = (payload) => {
  return {
    type: SHOW_LOADING,
    payload: payload,
  };
};

export const dismissLoading = (payload) => {
  return {
    type: DISMISS_LOADING,
    payload: payload,
  };
};

// export { showLoading, dismissLoading };
