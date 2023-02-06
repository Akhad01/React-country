import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Country } from "types/countries";
import { Extra } from "types/extra";
import { Status } from "types/status";

export const loadСountries = createAsyncThunk<
  { data: Country[] },
  undefined,
  { extra: Extra; rejectValue: string }
>(
  "@@countries/load-countries",
  (_, { extra: { client, api }, rejectWithValue }) => {
    try {
      return client.get(api.ALL_COUNTRIES);
    } catch (error: any) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }

      return rejectWithValue("Unknown error");
    }
  }
);

type CountrySlice = {
  status: Status;
  error: string | null;
  list: Country[];
};

const initialState: CountrySlice = {
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
        state.error = actions.payload || "Cannot load data";
      })
      .addCase(loadСountries.pending, (state) => {
        state.status = "loading";
        state.error = null;
      });
  },
});

export const countryReducer = countriesSlice.reducer;
