// store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/franchise/authSlice";
import branchReducer from './slice/admin/branchSlice';
import franchiseStudentsReducer from "../redux/slice/admin/franchiseStudentsSlice";
import franchiseWallteSlice from "./slice/franchise/franchiseWallteSlice";


const store = configureStore({
  reducer: {
    auth: authReducer,
    branch: branchReducer,
    franchiseStudents: franchiseStudentsReducer,
    franchiseWallte:franchiseWallteSlice
    // Add other reducers here
  },
});

export default store;
