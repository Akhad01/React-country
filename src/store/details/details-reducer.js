import {
  SET_COUNTRY,
  SET_LOADING,
  SET_ERROR,
  CLEAR_DETAILS,
} from "./details-actions";

const initialState = {
  status: "idle",
  error: null,
  currentCountry: null,
};

export const detailsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        error: null,
        status: "loading",
      };
    case SET_ERROR:
      return {
        ...state,
        error: payload,
        status: "rejected",
      };
    case SET_COUNTRY:
      return {
        ...state,
        currentCountry: payload,
        status: "received",
      };
    case CLEAR_DETAILS:
      return initialState;
    default:
      return state;
  }
};
