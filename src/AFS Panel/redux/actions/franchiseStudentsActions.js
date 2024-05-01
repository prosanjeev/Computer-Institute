// franchiseStudentsActions.js
//forAdmin
import {
  fetchStudentsStart,
  fetchStudentsSuccess,
  fetchStudentsFailure,
  addStudent as addStudentAction,
  updateStudent as updateStudentAction,
  deleteStudent as deleteStudentAction,
} from "../admin/franchiseStudentsSlice";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, query, orderBy, limit, where } from "firebase/firestore";
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
        const studentWithcenterName = {
          id: doc.id,
          ...studentData,
          centerName: franchiseData.centerName,
        };
        students.push(studentWithcenterName);
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

    // Fetch all courses documents
    const courseDataRef = collection(fireDB, "courses");
    const courseDataSnapshot = await getDocs(courseDataRef);
    const studentCourseDataMap = {};

    // Store courses documents in a map for easy access
    courseDataSnapshot.forEach((doc) => {
      studentCourseDataMap[doc.id] = doc.data();
    });

    // Fetch the latest 10 students ordered by createdAt
    const studentsRef = collection(fireDB, "students");
    const q = query(studentsRef, orderBy("createdAt", "desc"), limit(10));
    const querySnapshot = await getDocs(q);
    const students = [];

    // Iterate over the query snapshot and add centerName and courseName to each student
    await Promise.all(querySnapshot.docs.map(async (doc) => {
      const studentData = doc.data();
      const franchiseId = studentData.franchiseId;

      // Check if franchiseData exists for the current student
      if (franchiseId in franchiseDataMap) {
        const franchiseData = franchiseDataMap[franchiseId];
        const studentWithcenterName = {
          id: doc.id,
          ...studentData,
          centerName: franchiseData.centerName,
        };

        // Fetch corresponding studentCourses document for the current student
        const studentCoursesRef = collection(fireDB, "studentCourses");
        const studentCoursesQuery = query(studentCoursesRef, where("studentId", "==", doc.id));
        const studentCoursesSnapshot = await getDocs(studentCoursesQuery);

        // Check if there are any studentCourses for the current student
        if (!studentCoursesSnapshot.empty) {
          // Retrieve courseId from the first studentCourses document
          const courseId = studentCoursesSnapshot.docs[0].data().courseId;

          // Check if courseData exists for the retrieved courseId
          if (courseId in studentCourseDataMap) {
            const courseData = studentCourseDataMap[courseId];
            // Add courseName to the student object
            studentWithcenterName.courseName = courseData.courseName;
          } else {
            console.log(`CourseData not found for courseId: ${courseId}`);
          }
        } else {
          console.log(`No studentCourses found for studentId: ${doc.id}`);
        }

        // Push the modified student object into the students array
        students.push(studentWithcenterName);
      } else {
        console.log(`FranchiseData not found for franchiseId: ${franchiseId}`);
      }
    }));

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
