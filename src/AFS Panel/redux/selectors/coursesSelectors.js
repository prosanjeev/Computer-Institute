// coursesSelectors.js
import { createSelector } from '@reduxjs/toolkit';

const selectCourses = state => state.courses;

export const selectAllCourses = createSelector(
  selectCourses,
  courses => courses
);
