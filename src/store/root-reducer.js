import { combineReducers } from "redux";
import { setThemes } from "./theme/theme-reducer";
import { countriesReducer } from "./countries/countries-reducer";
import { controlsReducer } from "./controls/controls-reducer";
import { detailsReducer } from "./details/details-reducer";

export const rootReducer = combineReducers({
  theme: setThemes,
  countries: countriesReducer,
  controls: controlsReducer,
  details: detailsReducer,
});
