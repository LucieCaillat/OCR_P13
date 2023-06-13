import { createSlice } from "@reduxjs/toolkit";
import * as userAction from "../user/userSlice";

const initialState = {
  status: "void",
  token: null,
  error: null,
};

const { actions, reducer } = createSlice({
  name: "login",
  initialState: initialState,
  reducers: {
    fetching: (draft) => {
      draft.status = "pending";
      return;
    },
    success: (draft, action) => {
      draft.status = "connected";
      draft.token = action.payload;
      draft.error = null;
    },
    reset: (draft) => {
      draft.status = "void";
      draft.token = null;
      draft.error = null;
      return;
    },
    error: (draft, action) => {
      draft.status = "rejected";
      draft.error = action.payload;
    },
  },
});

export function login(email, password) {
  return async (dispatch, getState) => {
    const loginStore = getState().login;
    if (loginStore.status === "pending") {
      return;
    }

    dispatch(actions.fetching());

    const result = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((result) => result.json());
    if (result.status === 200) {
      dispatch(actions.success(result.body.token));
      dispatch(userAction.fetchUser());
    } else {
      dispatch(actions.error(result.message));
    }
  };
}

export function disconnect(){
  return (dispatch, getState)=>{
    dispatch(actions.reset())
    dispatch(userAction.reset())
  }

}


export default reducer;
