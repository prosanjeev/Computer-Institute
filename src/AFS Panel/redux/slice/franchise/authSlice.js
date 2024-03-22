import { createSlice } from "@reduxjs/toolkit";
import { fireDB } from "../../../firebase/FirebaseConfig";
import { getDoc, doc, collection, query, where, getDocs } from "firebase/firestore";

const initialState = {
  isLoggedIn: localStorage.getItem("isLoggedIn") === "true" || false,
  userId: localStorage.getItem("userId") || null,
  branchData: null,
  students: [],
};

export const fetchFranchiseData = () => async (dispatch, getState) => {
  const state = getState();
  try {
    if (state.auth.userId) {
      const docRef = doc(fireDB, "franchiseData", state.auth.userId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        dispatch(setbranchData(docSnap.data()));
        // Fetch students for the franchise
        const studentsRef = collection(fireDB, "students");
        const franchiseStudentsQuery = query(studentsRef, where("franchiseId", "==", state.auth.userId));
        const snapshot = await getDocs(franchiseStudentsQuery);
        const students = [];
        snapshot.forEach((doc) => {
          students.push({ id: doc.id, ...doc.data() });
        });
        dispatch(setStudents(students));
      } else {
        console.log("No franchise data found for user ID:", state.auth.userId);
      }
    } else {
      console.log("User ID not found.");
    }
  } catch (error) {
    console.error("Error fetching franchise data:", error);
  }
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userId", action.payload.userId); // Store userId in localStorage
      state.userId = action.payload.userId;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("userId"); // Remove userId from localStorage
      state.userId = null;
      state.branchData = null;
      state.students = []; // Clear students data on logout
    },
    setbranchData: (state, action) => {
      state.branchData = action.payload;
    },
    setStudents: (state, action) => {
      state.students = action.payload;
    },
  },
});

export const { login, logout, setbranchData, setStudents } = authSlice.actions;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectUserId = (state) => state.auth.userId;
export const selectbranchData = (state) => state.auth.branchData;
export const selectStudents = (state) => state.auth.students;

export default authSlice.reducer;
