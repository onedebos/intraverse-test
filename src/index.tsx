import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./styles/index.css";
import { Provider } from "react-redux";
import { configureStore, Action } from "@reduxjs/toolkit";
import userSliceReducer from "./features/user/userSlice";
import { ThunkAction } from "redux-thunk";
import { UserState } from "./features/user/userSlice";

export type AppThunk = ThunkAction<void, UserState, unknown, Action<string>>;

export const store = configureStore({
  reducer: {
    userStore: userSliceReducer,
  },
  devTools: process.env.NODE_ENV !== "development" ? false : true,
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
