// selectors.js
import { createSelector } from '@reduxjs/toolkit';

// Select the students slice from the state
const selectStudents = (state) => state.franchiseStudents.students;

// Create a selector to compute the size of the studentCourses collection
export const selectStudentCoursesSize = createSelector(
  selectStudents,
  (students) => {
    let studentCoursesSize = 0;
    students.forEach((student) => {
      if (student.studentCourses) {
        studentCoursesSize += student.studentCourses.length;
      }
    });
    return studentCoursesSize;
  }
);
