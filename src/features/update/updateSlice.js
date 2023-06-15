import { createSlice } from "@reduxjs/toolkit";
import * as userAction from "../user/userSlice";

const initialState = {
  status: "void",
  error: null,
};

const { actions, reducer } = createSlice({
  name: "update",
  initialState: initialState,
  reducers: {
    fetching: (draft) => {
      draft.status = "pending";
      return;
    },
    success: (draft) => {
      draft.status = "success";
      draft.error = null;
    },
    reset: (draft) => {
      draft.status = "void";
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

export function update(firstName, lastName, redirector) {
  return async (dispatch, getState) => {
    const token = getState().login.token;
    const userStore = getState().user;
    if (userStore.status === "pending") {
      return;
    }

    dispatch(actions.fetching());

    const result = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ firstName, lastName }),
    }).then((result) => result.json());
    if (result.status === 200) {
      dispatch(userAction.fetchUser());
      dispatch(actions.success());
      // it is possible by pass useNavigate hook from component when dispatch action
      redirector("/user");
    } else {
      dispatch(actions.error(result.message));
    }
  };
}
