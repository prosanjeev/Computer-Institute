// franchiseStudentsSelectors.js

export const selectStudents = (state) => state.franchiseStudents.students;
export const selectStudentsLoading = (state) => state.franchiseStudents.loading;
export const selectStudentsError = (state) => state.franchiseStudents.error;
