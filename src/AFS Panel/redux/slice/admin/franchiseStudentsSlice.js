// franchiseStudentsSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  students: [],
  loading: false,
  error: null,
};

const franchiseStudentsSlice = createSlice({
  name: "franchiseStudents",
  initialState,
  reducers: {
    fetchStudentsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchStudentsSuccess(state, action) {
      state.loading = false;
      state.students = action.payload;
    },
    fetchStudentsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    addStudent(state, action) {
      state.students.push(action.payload);
    },
    updateStudent(state, action) {
      const index = state.students.findIndex((student) => student.id === action.payload.id);
      if (index !== -1) {
        state.students[index] = action.payload;
      }
    },
    deleteStudent(state, action) {
      state.students = state.students.filter((student) => student.id !== action.payload);
    },
  },
});

export const {
  fetchStudentsStart,
  fetchStudentsSuccess,
  fetchStudentsFailure,
  addStudent,
  updateStudent,
  deleteStudent,
} = franchiseStudentsSlice.actions;

export default franchiseStudentsSlice.reducer;
