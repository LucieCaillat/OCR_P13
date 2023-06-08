import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    email: "",
    firstName: "",
    lastName: "",
    createdAt: "",
    updatedAt: "",
    id: "",
  },
  error: null,
  success: false,
  pending: false,
};

const { actions, reducer } = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
});

export function getUserInfo() {
  return async (dispatch, getState) => {
    // 1. choper le token qui est dans le state
    // 2. dispatch pending
    // 3. requete authentifié
    // 4. traitement de la requete
    // 5. dispatch success
    // 6. dispatch error
    // 7. ne pas oublier de reset le pending :-)
  };
}

export const { getConnect, disconnect } = actions;

export default reducer;
