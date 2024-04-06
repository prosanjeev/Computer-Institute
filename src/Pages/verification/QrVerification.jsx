import React, { useEffect, useState } from 'react';
import {
  Box,
  Center,
  Divider,
  Heading,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from "react-redux";
import { fetchStudentData, selectStudentData } from '../../AFS Panel/redux/student/slice/studentSlice';
import {  useParams } from 'react-router-dom';
import StepCard from './StepCard';


const QrVerification = () => {
    const dispatch = useDispatch();
    const { regNumber } = useParams();
    const studentData = useSelector(selectStudentData);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      dispatch(fetchStudentData(regNumber))
        .then(() => setIsLoading(false))
        .catch(() => setIsLoading(false));
    }, [dispatch]);

  return (
    <Center mt={8}>
      <Box maxW="800px" w="100%" p={4}>
        <Heading as="h1" mb={4}>QR Validation</Heading>
        <Divider mb={4} />
        <SimpleGrid columns={2} spacing={4}>
         
            <Box p={2} borderWidth="1px" borderRadius="md">
              <Text fontWeight="bold">{studentData && studentData.studentName}</Text>
              <Text>{studentData && studentData.email}</Text>
              <Text>{studentData && studentData.rollNumber}</Text>
              {/* Add more fields as needed */}
            </Box>
       
        </SimpleGrid>
        <StepCard/>
      </Box>
    </Center>
  );
};

export default QrVerification;
