// store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "..//AFS Panel/FranchisePanel/Auth/slice/authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    // Add other reducers here
  },
});

export default store;