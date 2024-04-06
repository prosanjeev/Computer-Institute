// store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./franchise/authSlice";
import branchReducer from './slice/admin/branchSlice';
import franchiseStudentsReducer from "../redux/slice/admin/franchiseStudentsSlice";
import franchiseWallteSlice from "./franchise/franchiseWallteSlice";
import coursesReducer from './course/coursesSlice'; // Assuming this is the path to your coursesSlice reducer
import studentReducer from "./student/slice/studentSlice";


const store = configureStore({
  reducer: {
    auth: authReducer,
    branch: branchReducer,
    franchiseStudents: franchiseStudentsReducer,
    franchiseWallte:franchiseWallteSlice,
    courses:coursesReducer,
    student: studentReducer,
    // Add other reducers here
  },
});

export default store;
