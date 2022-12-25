import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadСountriesByName = createAsyncThunk(
  "@@details/load-country-by-name",
  (name, { extra: { client, api } }) => {
    return client.get(api.searchByCountry(name));
  }
);

export const loadNeighboursСountriesByName = createAsyncThunk(
  "@@details/load-neighbours-countries-by-name",
  (neighbours, { extra: { client, api } }) => {
    return client.get(api.filterByCode(neighbours));
  }
);

const initialState = {
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
      .addCase(loadСountriesByName.pending, (state, actions) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loadСountriesByName.rejected, (state, actions) => {
        state.status = "rejected";
        state.error = actions.payload;
      })
      .addCase(loadСountriesByName.fulfilled, (state, actions) => {
        state.status = "received";
        state.currentCountry = actions.payload.data[0];
      })
      .addCase(loadNeighboursСountriesByName.fulfilled, (state, actions) => {
        state.neighbours = actions.payload.data.map((item) => {
          console.log(item);
          return item.name;
        });
      });
  },
});

export const detailsReducer = detailsSlice.reducer;
export const { clearDetails } = detailsSlice.actions;

export const selectDetails = (state) => state.details;
export const selectNeighbours = (state) => state.details.neighbours;
