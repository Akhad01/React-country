import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadСountries = createAsyncThunk(
  "@@countries/load-countries",
  (_, { extra: { client, api }, rejectWithValue }) => {
    try {
      return client.get(api.ALL_COUNTRIES);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  status: "idle",
  error: null,
  list: [],
};

const countriesSlice = createSlice({
  name: "@@countries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadСountries.fulfilled, (state, actions) => {
        state.status = "received";
        state.list = actions.payload.data;
      })
      .addCase(loadСountries.rejected, (state, actions) => {
        state.status = "rejected";
        state.error = actions.payload || actions.meta.error;
      })
      .addCase(loadСountries.pending, (state) => {
        state.status = "loading";
        state.error = null;
      });
  },
});

export const countryReducer = countriesSlice.reducer;

export const selectCountries = (state) => ({
  list: state.countries.list.length,
  error: state.countries.error,
  status: state.countries.status,
});

export const selectAllCountries = (state) => state.countries.list;

export const selectVisibleCountries = (state, { search = "", region = "" }) => {
  return state.countries.list.filter(
    (counter) =>
      counter.name.toLowerCase().includes(search.toLocaleLowerCase()) &&
      counter.region.includes(region)
  );
};
