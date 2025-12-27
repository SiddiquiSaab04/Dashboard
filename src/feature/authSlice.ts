import { createSlice } from "@reduxjs/toolkit";
import type { AuthState } from "../components/interface/AuthState";

const initialState: AuthState = {
  user: JSON.parse(localStorage.getItem("user") || "null"),
  accessToken: localStorage.getItem("accessToken"),
  isLoggedIn: localStorage.getItem("isLoggedIn") === "false",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("accessToken", JSON.stringify(action.payload.accessToken));
      localStorage.setItem("isLoggedIn", JSON.stringify(true));
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.user = null;
      state.accessToken = null;
      state.isLoggedIn = false;
      localStorage.removeItem("user");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("isLoggedIn");
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
