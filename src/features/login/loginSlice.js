import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "void",
  data: null,
  error: null,
};

const { actions, reducer } = createSlice({
  name: "login",
  initialState: initialState,
  reducers: {
    tokenFetching: (draft) => {
      draft.status = "pending";
      return;
    },
    getConnect: (draft) => {
      draft.status = "connected";
      return;
    },
    disconnect: (draft) => {
      draft.status = "void";
      return;
    },
  },
});

export function fetchToken(email, password) {
  return async (dispatch, getState) => {
    const status = getState().loging.status;
    if (status === "pending") {
      return;
    }
  };
}

export const { getConnect, disconnect } = actions;

export default reducer;
