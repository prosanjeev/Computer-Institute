import {  Flex } from "@chakra-ui/react";
import PageTitle from "../../components/PagesComponents/PageTitleSection/PageTitle";
import VerifivaticationForm from "../../components/PagesComponents/VerifivaticationForm";
import StudentVerifiedCard from "./components/StudentVerifiedCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudentData, selectStudentData, selectUserIdStudent } from "../../AFS Panel/redux/student/slice/studentSlice";
import { useEffect } from "react";

const StudentVerification = () => {

  const dispatch = useDispatch();
  const studentData = useSelector(selectStudentData);

  // useEffect(() => {
  //   dispatch(fetchStudentData());
  // }, [dispatch]);

  const handleSubmit = (formData) => {
    const regNumber = formData.user;
    console.log("regNumber", regNumber); 
    dispatch(fetchStudentData(regNumber));
  };
 
  return (
    <>
    <PageTitle pagetitle="STUDENT VERIFICATION" />
    <Flex w={{md:'1000px', base:'90vw'}} mx='auto' flexWrap='wrap'>
      <VerifivaticationForm title='STUDENT VERIFICATION' label='Registration No' onSubmitCallback={handleSubmit} />
      <StudentVerifiedCard studentData={studentData} />
    </Flex>
    </>
  )
}

export default StudentVerification