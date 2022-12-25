import { configureStore } from "@reduxjs/toolkit";
import axios from "axios";
import { controlsReducer } from "./features/controls/controls-slice";
import { themeReducer } from "./features/theme/theme-slice";
import * as api from "./config";
import { countryReducer } from "./features/countries/countries-slice";
import { detailsReducer } from "./features/details/details-slice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    controls: controlsReducer,
    countries: countryReducer,
    details: detailsReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          client: axios,
          api,
        },
      },
      serializableCheck: false,
    }),
});
