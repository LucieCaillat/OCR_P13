import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./features/login/loginSlice";
import userReducer from "./features/user/userSlice";
import updateReducer from "./features/update/updateSlice";

const store = configureStore({
  reducer: { login: loginReducer, user: userReducer, update: updateReducer },
});

export default store;
