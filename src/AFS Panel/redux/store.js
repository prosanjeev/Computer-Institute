// store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/franchise/authSlice";
import branchReducer from './slice/admin/branchSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    branch: branchReducer,
    // Add other reducers here
  },
});

export default store;
