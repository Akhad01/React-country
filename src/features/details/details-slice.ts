import { Extra } from "types/extra";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Country } from "types/countries";
import { Status } from "types/status";

export const loadСountriesByName = createAsyncThunk<
  { data: Country[] },
  string,
  { extra: Extra }
>("@@details/load-country-by-name", (name, { extra: { client, api } }) => {
  return client.get(api.searchByCountry(name));
});

export const loadNeighboursСountriesByName = createAsyncThunk<
  { data: Country[] },
  string[],
  { extra: Extra }
>(
  "@@details/load-neighbours-countries-by-name",
  (neighbours, { extra: { client, api } }) => {
    return client.get(api.filterByCode(neighbours));
  }
);

type DetailsSlice = {
  status: Status;
  error: string | null;
  currentCountry: Country | null;
  neighbours: string[];
};

const initialState: DetailsSlice = {
  status: "idle",
  error: null,
  currentCountry: null,
  neighbours: [],
};

const detailsSlice = createSlice({
  name: "@@details",
  initialState,
  reducers: {
    clearDetails: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadСountriesByName.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loadСountriesByName.rejected, (state, actions) => {
        state.status = "rejected";
        state.error = "Can not load data";
      })
      .addCase(loadСountriesByName.fulfilled, (state, actions) => {
        state.status = "received";
        state.currentCountry = actions.payload.data[0];
      })
      .addCase(loadNeighboursСountriesByName.fulfilled, (state, actions) => {
        state.neighbours = actions.payload.data.map((item) => {
          return item.name;
        });
      });
  },
});

export const detailsReducer = detailsSlice.reducer;
export const { clearDetails } = detailsSlice.actions;
