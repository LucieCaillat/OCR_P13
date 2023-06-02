import { configureStore } from "@reduxjs/toolkit";
import mailReducer from "./reducers/MailSlice";

export const store = configureStore({
  reducer: {
    mail: mailReducer,
  },
});
