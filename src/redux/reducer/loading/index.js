import { loadingTypes } from "../../action-types";

const { DISMISS_LOADING, SHOW_LOADING } = loadingTypes;

const initialState = {
  loading: false,
};

const reducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case SHOW_LOADING:
      return { ...state, loading: true };
    case DISMISS_LOADING:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default reducer;
