import { SET_COUNTRIES, SET_LOADING, SET_ERROR } from "./countries-action";

const initialState = {
  status: "idle",
  error: null,
  list: [],
};

export const countriesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_COUNTRIES:
      return {
        ...state,
        status: "received",
        list: payload,
      };
    case SET_LOADING:
      return {
        ...state,
        status: "loading",
        error: null,
      };
    case SET_ERROR:
      return {
        ...state,
        status: "received",
        error: payload,
      };
    default:
      return state;
  }
};
