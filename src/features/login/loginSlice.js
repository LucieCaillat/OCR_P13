import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
  name: "login",
  initialState: "light",
  reducers: {
    toggle: (state) => {
      return state === "light" ? "dark" : "light";
    },
  },
});

export const { toggle } = actions;

export default reducer;
