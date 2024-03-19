// authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: localStorage.getItem("isLoggedIn") === "true" || false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    franchiseDetails: null,
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.franchiseDetails = action.payload;
      localStorage.setItem("isLoggedIn", "true");
    },
    logout: (state) => {
      state.isLoggedIn = false;
      localStorage.removeItem("isLoggedIn");
    },
  },
});

export const { login, logout } = authSlice.actions;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export default authSlice.reducer;