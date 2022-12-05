import { combineReducers } from "redux";
import { setThemes } from "./theme/theme-reducer";
import { countriesReducer } from "./countries/countries-reducer";

export const rootReducer = combineReducers({
  theme: setThemes,
  countries: countriesReducer,
});
