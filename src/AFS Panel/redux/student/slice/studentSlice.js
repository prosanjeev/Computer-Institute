// studentSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { fireDB } from "../../../firebase/FirebaseConfig";
import { getDoc, doc, getDocs, collection, query, where } from "firebase/firestore";
import { toast } from "react-toastify";

const initialState = {
  isLoggedIn: localStorage.getItem("isLoggedIn_student") === "true" || false,
  userId: localStorage.getItem("userId_student") || null,
  studentData: null,
};

export const fetchStudentData = (userName) => async (dispatch, getState) => {
  const state = getState();
  try {
    let studentId = state.student.userId;

    if (!studentId && userName) {
      // Fetch student ID using username
      const studentsRef = collection(fireDB, "students");
      const usernameQuery = query(studentsRef, where("userName", "==", userName));
      const usernameSnapshot = await getDocs(usernameQuery);
      if (usernameSnapshot.empty) {
        toast.error("No student  with this userName:", userName);
        return;
      }
      studentId = usernameSnapshot.docs[0].id;
    }

    if (!studentId) {
      console.log("No student ID or username provided.");
      return;
    }

    const docRef = doc(fireDB, "students", studentId);
    const docSnap = await getDoc(docRef);
    const studentData = docSnap.data();

    if (docSnap.exists()) {
      // Fetch franchise data for centerName
      const franchiseId = studentData.franchiseId;
      const franchiseDocRef = doc(fireDB, "franchiseData", franchiseId);
      const franchiseDocSnap = await getDoc(franchiseDocRef);
      if (!franchiseDocSnap.exists()) {
        console.log("No franchise data found for franchiseId:", franchiseId);
        return;
      }
      const franchiseData = franchiseDocSnap.data();

      // Assign centerName to studentData
      studentData.centerName = franchiseData.centerName;
      studentData.centerPhotoUrl = franchiseData.logoUrl;

      // Fetch student courses and course names
      const studentCoursesRef = collection(fireDB, "studentCourses");
      const studentCoursesQuery = query(studentCoursesRef, where("studentId", "==", studentId));
      const studentCoursesSnapshot = await getDocs(studentCoursesQuery);
      const coursePromises = studentCoursesSnapshot.docs.map(async (courseDoc) => {
        const courseId = courseDoc.data().courseId;
        const courseDocRef = doc(fireDB, "courses", courseId);
        const courseDocSnap = await getDoc(courseDocRef);
        return courseDocSnap.exists() ? courseDocSnap.data().courseName : "Course not selected";
      });
      const courses = await Promise.all(coursePromises);

      // Assign courses to studentData
      studentData.courses = courses.filter(Boolean);

      dispatch(setStudentData(studentData));
    } else {
      console.log("No student data found for user ID:", studentId);
    }
  } catch (error) {
    console.error("Error fetching student data:", error);
  }
};

export const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      localStorage.setItem("isLoggedIn_student", "true");
      localStorage.setItem("userId_student", action.payload.userId); // Store userId in localStorage
      state.userId = action.payload.userId;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      localStorage.removeItem("isLoggedIn_student");
      localStorage.removeItem("userId_student"); // Remove userId from localStorage
      state.userId = null;
      state.studentData = null; // Clear student data on logout
    },
    setStudentData: (state, action) => {
      state.studentData = action.payload;
    },
  },
});

export const { login, logout, setStudentData } = studentSlice.actions;

export const selectIsLoggedInStudent = (state) => state.student.isLoggedIn;
export const selectUserIdStudent = (state) => state.student.userId;
export const selectStudentData = (state) => state.student.studentData;

export default studentSlice.reducer;
