import { SET_THEME } from "./theme-actions";

export const setThemes = (state = "light", { type, payload }) => {
  switch (type) {
    case SET_THEME:
      return payload;
    default:
      return state;
  }
};
