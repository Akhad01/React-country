import { combineReducers } from "redux";
import { setThemes } from "./theme/theme-reducer";
import { countriesReducer } from "./countries/countries-reducer";
import { controlsReducer } from "./controls/controls-reducer";

export const rootReducer = combineReducers({
  theme: setThemes,
  countries: countriesReducer,
  controls: controlsReducer,
});
