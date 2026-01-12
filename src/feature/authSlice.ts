import { createSlice } from "@reduxjs/toolkit";
import type { AuthState } from "../components/interface/AuthState";

const initialState: AuthState = {
  user: JSON.parse(sessionStorage.getItem("user") || "null"),
  accessToken: sessionStorage.getItem("accessToken"),
  isLoggedIn: sessionStorage.getItem("isLoggedIn") === "true",
  sidebarOpen: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      sessionStorage.setItem("user", JSON.stringify(action.payload.user));
      sessionStorage.setItem("accessToken", JSON.stringify(action.payload.accessToken));
      sessionStorage.setItem("isLoggedIn", JSON.stringify(true));
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.isLoggedIn = true;
    },
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
    logout: (state) => {
      state.user = null;
      state.accessToken = null;
      state.isLoggedIn = false;
      sessionStorage.removeItem("user");
      sessionStorage.removeItem("accessToken");
      sessionStorage.removeItem("isLoggedIn");
    },
  },
});

export const { setCredentials, toggleSidebar, logout } = authSlice.actions;
export default authSlice.reducer;
