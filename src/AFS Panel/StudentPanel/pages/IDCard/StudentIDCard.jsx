import React, { useEffect } from "react";
import { Box,  Image, Text } from "@chakra-ui/react";
import StudentDashboardLayout from "../../components/StudentDashboardLayout";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudentData, selectStudentData, selectUserIdStudent } from "../../../redux/student/slice/studentSlice";

const StudentIDCard = () => {

const dispatch = useDispatch();
  const studentId = useSelector(selectUserIdStudent);
  const studentData = useSelector(selectStudentData);

  useEffect(() => {
    dispatch(fetchStudentData());
  }, [dispatch, studentId]);


  if (!studentData) {
    return <Box>Loading...</Box>;
  }

  return (
   <StudentDashboardLayout>
     <Box
    //   w="300px"
    //   h="200px"
    position='relative'
      w="1011px"
      h="639px"
      bg="gray.200"
      p="4"
      border="1px solid #ccc"
      borderRadius="md"
      bgImage='/idcard.png'
    >
      {/* <Heading size="md" mb="2">
        Student ID Card
      </Heading> */}
      <Image position='absolute' top='233px' left='85px'  src={studentData.photoUrl} h='230px' borderRadius='100%' alt=""/>
     
      <Text position='absolute' top='316px' right='200px' fontSize='30px' fontWeight='600'>
         {studentData.centerName}
      </Text>
      <Text  position='absolute' top='359px' right='200px' fontSize='30px' fontWeight='600'>
         {studentData.studentName}
      </Text>
      <Text  position='absolute' top='412px' right='100px' fontSize='20px' fontWeight='600'>
      {/* {studentData.courses.map((course, index) => (
          <li key={index}>{course}</li>
        ))} */}
        {studentData.courses.join(", ")}
      </Text>
      <Text  position='absolute' top='446px' right='200px' fontSize='30px' fontWeight='600'>
      {new Date(studentData.dateOfBirth).toLocaleDateString('en-GB')}
      </Text>
      <Text position='absolute' top='540px' left='185px' fontSize='30px' fontWeight='600' color='white'>
        {studentData.studentId}
      </Text>
    </Box>
   </StudentDashboardLayout>
  );
};

export default StudentIDCard;
