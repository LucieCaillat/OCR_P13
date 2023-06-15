import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "void",
  data: null,
  error: null,
};

const { actions, reducer } = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    fetching: (draft) => {
      draft.status = "pending";
      return;
    },
    success: (draft, action) => {
      draft.status = "resolved";
      draft.data = action.payload;
      draft.error = null;
    },
    reset: (draft) => {
      draft.status = "void";
      draft.data = null;
      draft.error = null;
      return;
    },
    error: (draft, action) => {
      draft.status = "rejected";
      draft.error = action.payload;
    },
  },
});

export default reducer;
export const { reset } = actions;

export function fetchUser() {
  return async (dispatch, getState) => {
    const token = getState().login.token;
    const userStore = getState().user;
    if (userStore.status === "pending") {
      return;
    }

    dispatch(actions.fetching());

    const result = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((result) => result.json());
    if (result.status === 200) {
      dispatch(actions.success(result.body));
    } else {
      dispatch(actions.error(result.message));
    }
  };
}
