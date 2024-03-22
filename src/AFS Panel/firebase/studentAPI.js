import { fireDB } from "./FirebaseConfig";


export const addStudentToFirestore = async (studentData) => {
  try {
    await fireDB.collection('students').add(studentData);
  } catch (error) {
    throw new Error("Error adding student to Firestore:", error);
  }
};

export const updateStudentInFirestore = async (studentId, updatedStudentData) => {
  try {
    await fireDB.collection('students').doc(studentId).update(updatedStudentData);
  } catch (error) {
    throw new Error("Error updating student in Firestore:", error);
  }
};

export const deleteStudentFromFirestore = async (studentId) => {
  try {
    await fireDB.collection('students').doc(studentId).delete();
  } catch (error) {
    throw new Error("Error deleting student from Firestore:", error);
  }
};
