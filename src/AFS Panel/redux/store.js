// store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./franchise/authSlice";
import branchReducer from './admin/branchSlice';
import franchiseStudentsReducer from "../redux/admin/franchiseStudentsSlice";
import franchiseWallteSlice from "./franchise/franchiseWallteSlice";
import coursesReducer from './course/coursesSlice'; // Assuming this is the path to your coursesSlice reducer
import studentReducer from "./student/slice/studentSlice";
import notificationsReducer from "./notifications/userNotificationsSlice";


const store = configureStore({
  reducer: {
    auth: authReducer,
    branch: branchReducer,
    franchiseStudents: franchiseStudentsReducer,
    franchiseWallte:franchiseWallteSlice,
    courses:coursesReducer,
    student: studentReducer,
    notifications: notificationsReducer,
    // Add other reducers here
  },
});

export default store;
