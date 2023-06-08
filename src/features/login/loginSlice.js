import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
  name: "login",
  initialState: false,
  reducers: {
    getConnect: () => {
      return true;
    },
    disconnect: () => {
      return false;
    },
  },
});

export const { getConnect, disconnect } = actions;

export default reducer;
