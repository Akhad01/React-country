import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "@@theme",
  initialState: "light",
  reducers: {
    setTheme: (_, actions) => actions.payload,
  },
});

export const themeReducer = themeSlice.reducer;

export const { setTheme } = themeSlice.actions;
