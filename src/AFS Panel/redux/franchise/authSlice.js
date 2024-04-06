import { createSlice } from "@reduxjs/toolkit";
import { fireDB } from "../../firebase/FirebaseConfig";
import { getDoc, doc, collection, query, where, getDocs, orderBy } from "firebase/firestore";

const initialState = {
  isLoggedIn: localStorage.getItem("isLoggedIn") === "true" || false,
  userId: localStorage.getItem("userId") || null,
  branchData: null,
  wallet: 0,
  requestAmount: 0,
  students: [],
};

export const fetchFranchiseData = () => async (dispatch, getState) => {
  const state = getState();
  try {
    if (state.auth.userId) {
      const docRef = doc(fireDB, "franchiseData", state.auth.userId);
      const docSnap = await getDoc(docRef);
      const franchiseData = docSnap.data();

      // Fetch all courses documents
      const courseDataRef = collection(fireDB, "courses");
      const courseDataSnapshot = await getDocs(courseDataRef);
      const studentCourseDataMap = {};

      // Store courses documents in a map for easy access
      courseDataSnapshot.forEach((doc) => {
        studentCourseDataMap[doc.id] = doc.data();
      });

      if (docSnap.exists()) {
        dispatch(setbranchData(docSnap.data()));
        dispatch(setWallet(franchiseData.wallet));
        dispatch(setRequestAmount(franchiseData.requestAmount));

        // Fetch students for the franchise
        const studentsRef = collection(fireDB, "students");
        const franchiseStudentsQuery = query(
          studentsRef,
          where("franchiseId", "==", state.auth.userId),
          orderBy("createdAt", "desc") // Order by createdAt in descending order
        );
        const snapshot = await getDocs(franchiseStudentsQuery);
        const students = [];

        await Promise.all(snapshot.docs.map(async (doc) => {
          const studentData = doc.data();
          const studentId = doc.id;

          // Fetch corresponding studentCourses document for the current student
          const studentCoursesRef = collection(fireDB, "studentCourses");
          const studentCoursesQuery = query(
            studentCoursesRef,
            where("studentId", "==", studentId)
          );
          const studentCoursesSnapshot = await getDocs(studentCoursesQuery);

          // Check if there are any studentCourses for the current student
          if (!studentCoursesSnapshot.empty) {
            // Retrieve courseId from the first studentCourses document
            const courseId = studentCoursesSnapshot.docs[0].data().courseId;
            console.log(courseId);
            // Check if courseData exists for the retrieved courseId
            if (courseId in studentCourseDataMap) {
              const courseData = studentCourseDataMap[courseId];

              // Add courseName to the student object
              const studentWithCourseName = {
                id: studentId,
                ...studentData,
                courseName: courseData ? courseData.courseName : "null"
              };
              students.push(studentWithCourseName);
            } else {
              console.log(`CourseData not found for courseId: ${courseId}`);
            }

          } else {
            console.log(`No studentCourses found for studentId: ${studentId}`);
          }
        }));

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

export const fetchFranchiseDataOnly = () => async (dispatch, getState) => {
  const state = getState();
  try {
    if (state.auth.userId) {
      const docRef = doc(fireDB, "franchiseData", state.auth.userId);
      const docSnap = await getDoc(docRef);
      const franchiseData = docSnap.data();

      if (docSnap.exists()) {
        dispatch(setbranchData(docSnap.data()));
        dispatch(setWallet(franchiseData.wallet));
        dispatch(setRequestAmount(franchiseData.requestAmount));
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
    setWallet(state, action) {
      state.wallet = action.payload;
    },
    setRequestAmount(state, action) {
      state.requestAmount = action.payload;
    },
  },
});

export const { login, logout, setbranchData, setStudents, setWallet, setRequestAmount } = authSlice.actions;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectUserId = (state) => state.auth.userId;
export const selectbranchData = (state) => state.auth.branchData;
export const selectStudents = (state) => state.auth.students;

export default authSlice.reducer;
