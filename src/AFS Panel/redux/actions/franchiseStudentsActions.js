// franchiseStudentsActions.js

import {
    fetchStudentsStart,
    fetchStudentsSuccess,
    fetchStudentsFailure,
    addStudent as addStudentAction,
    updateStudent as updateStudentAction,
    deleteStudent as deleteStudentAction,
  } from "../slice/admin/franchiseStudentsSlice";
  import { collection, getDocs, addDoc, updateDoc, deleteDoc, getDoc, query, orderBy, limit } from "firebase/firestore";
  import { fireDB } from "../../firebase/FirebaseConfig";
  
  // franchiseStudentsActions.js

// export const fetchStudents = () => async (dispatch) => {
//     dispatch(fetchStudentsStart());
//     try {
//       const franchiseStudentsRef = collection(fireDB, "students");
//       const querySnapshot = await getDocs(franchiseStudentsRef);
//       const students = [];
//       querySnapshot.forEach((doc) => {
//         students.push({ id: doc.id, ...doc.data() });
//       });
//       dispatch(fetchStudentsSuccess(students));
//     } catch (error) {
//       dispatch(fetchStudentsFailure(error.message));
//     }
//   };
// import { collection, getDocs, query, orderBy } from "firebase/firestore";

export const fetchStudents = () => async (dispatch) => {
  dispatch(fetchStudentsStart());
  try {
    // Fetch all franchiseData documents
    const franchiseDataRef = collection(fireDB, "franchiseData");
    const franchiseDataSnapshot = await getDocs(franchiseDataRef);
    const franchiseDataMap = {};

    // Store franchiseData documents in a map for easy access
    franchiseDataSnapshot.forEach((doc) => {
      franchiseDataMap[doc.id] = doc.data();
    });

    // Fetch all students ordered by createdAt
    const franchiseStudentsRef = collection(fireDB, "students");
    const studentsQuery = query(franchiseStudentsRef, orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(studentsQuery);

    const students = [];

    // Iterate over the query snapshot and add centerName to each student
    querySnapshot.forEach((doc) => {
      const studentData = doc.data();
      const franchiseId = studentData.franchiseId;

      // Check if franchiseData exists for the current student
      if (franchiseId in franchiseDataMap) {
        const franchiseData = franchiseDataMap[franchiseId];
        const studentWithCenterName = {
          id: doc.id,
          ...studentData,
          centername: franchiseData.centername,
        };
        students.push(studentWithCenterName);
      } else {
        console.log(`FranchiseData not found for franchiseId: ${franchiseId}`);
      }
    });

    dispatch(fetchStudentsSuccess(students));
  } catch (error) {
    dispatch(fetchStudentsFailure(error.message));
    console.error("Error fetching students:", error);
  }
};




export const fetchLatestStudents = () => async (dispatch) => {
  dispatch(fetchStudentsStart());
  try {
    // Fetch all franchiseData documents
    const franchiseDataRef = collection(fireDB, "franchiseData");
    const franchiseDataSnapshot = await getDocs(franchiseDataRef);
    const franchiseDataMap = {};

    // Store franchiseData documents in a map for easy access
    franchiseDataSnapshot.forEach((doc) => {
      franchiseDataMap[doc.id] = doc.data();
    });

    // Fetch the latest 10 students ordered by createdAt
    const franchiseStudentsRef = collection(fireDB, "students");
    const q = query(franchiseStudentsRef, orderBy("createdAt", "desc"), limit(10));
    const querySnapshot = await getDocs(q);
    const students = [];

    // Iterate over the query snapshot and add centerName to each student
    querySnapshot.forEach((doc) => {
      const studentData = doc.data();
      const franchiseId = studentData.franchiseId;

      // Check if franchiseData exists for the current student
      if (franchiseId in franchiseDataMap) {
        const franchiseData = franchiseDataMap[franchiseId];
        const studentWithCenterName = {
          id: doc.id,
          ...studentData,
          centername: franchiseData.centername,
        };
        students.push(studentWithCenterName);
      } else {
        console.log(`FranchiseData not found for franchiseId: ${franchiseId}`);
      }
    });

    dispatch(fetchStudentsSuccess(students));
  } catch (error) {
    dispatch(fetchStudentsFailure(error.message));
    console.error("Error fetching students:", error);
  }
};



  
  export const addStudent = (studentData) => async (dispatch) => {
    try {
      const docRef = await addDoc(collection(fireDB, "franchiseStudents"), studentData);
      dispatch(addStudentAction({ id: docRef.id, ...studentData }));
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };
  
  export const updateStudent = (studentId, updatedData) => async (dispatch) => {
    try {
      await updateDoc(collection(fireDB, "franchiseStudents", studentId), updatedData);
      dispatch(updateStudentAction({ id: studentId, ...updatedData }));
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };
  
  export const deleteStudent = (studentId) => async (dispatch) => {
    try {
      await deleteDoc(collection(fireDB, "franchiseStudents", studentId));
      dispatch(deleteStudentAction(studentId));
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };
  