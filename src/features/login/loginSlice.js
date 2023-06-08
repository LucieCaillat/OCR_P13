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
    error: (draft, action) => {
      draft.error = action.payload;
      draft.status = "void";
    },
    success: (draft, action) => {
      console.log("token?", action.payload);
      draft.status = "connected";
      draft.data = action.payload;
      draft.error = null;
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

export function login(email, password) {
  return async (dispatch, getState) => {
    dispatch(actions.tokenFetching());
    //const status = getState().loging.status;
    const { login } = getState();

    const res = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((res) => res.json());
    console.log("response", res, getState());
    if (res.status === 200) {
      // good
      dispatch(actions.success(res.body.token));
    } else {
      dispatch(actions.error(res.message));
    }
  };
}

export const { getConnect, disconnect } = actions;

export default reducer;
