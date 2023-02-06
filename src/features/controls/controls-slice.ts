import { createSlice } from "@reduxjs/toolkit";
import { Region } from "types/region";

type ControlsSlice = {
  search: string;
  region: Region | "";
};

const initialState: ControlsSlice = {
  search: "",
  region: "",
};

const controlsSlice = createSlice({
  name: "@@controls",
  initialState,
  reducers: {
    setRegion: (state, actions) => {
      state.region = actions.payload;
    },
    setSearch: (state, actions) => {
      state.search = actions.payload;
    },
    clearControls: () => initialState,
  },
});

export const { setRegion, setSearch, clearControls } = controlsSlice.actions;
export const controlsReducer = controlsSlice.reducer;
