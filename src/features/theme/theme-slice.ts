import { createSlice } from "@reduxjs/toolkit";

export type Theme = "light" | "dark";

export const themeSlice = createSlice({
  name: "@@theme",
  initialState: "light" as Theme,
  reducers: {
    setTheme: (_, actions) => actions.payload,
  },
});

export const themeReducer = themeSlice.reducer;

export const { setTheme } = themeSlice.actions;
