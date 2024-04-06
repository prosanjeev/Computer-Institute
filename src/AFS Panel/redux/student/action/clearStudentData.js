import { setStudentData } from "../slice/studentSlice";

export const clearStudentData = () => (dispatch) => {
    dispatch(setStudentData(null));
  };
  