// coursesActions.js
import { collection, getDocs } from 'firebase/firestore';
import { fireDB } from '../../firebase/FirebaseConfig'; // Import your Firebase instance
import { setCourses } from './coursesSlice';

// export const fetchCourses = () => {
//   return async (dispatch) => {
//     const courses = [];
//     const snapshot = await fireDB.collection('courses').get();
//     snapshot.forEach(doc => {
//       courses.push({ id: doc.id, ...doc.data() });
//     });
//     dispatch(setCourses(courses));
//   };
// };

export const fetchCourses = () => async dispatch => {
    try {
      const coursesCollection = collection(fireDB, 'courses');
      const querySnapshot = await getDocs(coursesCollection);
      const courses = [];
      querySnapshot.forEach(doc => {
        courses.push({ id: doc.id, ...doc.data() });
      });
      dispatch(setCourses(courses));
    } catch (error) {
      console.error('Error fetching courses: ', error);
    }
  };