// coursesSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { fireDB } from '../../firebase/FirebaseConfig'; // Import your Firebase instance

const coursesSlice = createSlice({
  name: 'courses',
  initialState: [],
  reducers: {
    addCourse: (state, action) => {
      const newCourse = action.payload;
      // Add newCourse to the state
      state.push(newCourse);
      // Add newCourse to Firebase Firestore
      fireDB.collection('courses').add(newCourse);
    },
    updateCourse: (state, action) => {
      const { id, ...updatedCourse } = action.payload;
      // Update course in the state
      const index = state.findIndex(course => course.id === id);
      if (index !== -1) {
        state[index] = { id, ...updatedCourse };
      }
      // Update course in Firebase Firestore
      fireDB.collection('courses').doc(id).update(updatedCourse);
    },
    deleteCourse: (state, action) => {
      const id = action.payload;
      // Remove course from the state
      state = state.filter(course => course.id !== id);
      // Remove course from Firebase Firestore
      fireDB.collection('courses').doc(id).delete();
    },
    setCourses: (state, action) => {
      // Set courses in the state
      return action.payload;
    },
  },
});

export const { addCourse, updateCourse, deleteCourse, setCourses } = coursesSlice.actions;
export default coursesSlice.reducer;

