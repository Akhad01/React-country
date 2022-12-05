import { combineReducers } from "redux";
import { setThemes } from "./theme/theme-reducer";

export const rootReducer = combineReducers({
  theme: setThemes,
});
