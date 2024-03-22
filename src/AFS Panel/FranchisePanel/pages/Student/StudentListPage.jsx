// StudentListPage.js

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFranchiseData,  selectbranchData, selectStudents } from '../../../redux/slice/franchise/authSlice';
import { Box, Heading, List, ListItem, Text } from '@chakra-ui/react';
import FranchiseDashboardLayout from '../../components/FranchiseDashboardLayout';

const StudentListPage = () => {
  const dispatch = useDispatch();
  const branchData = useSelector(selectbranchData);
  const students = useSelector(selectStudents);

  useEffect(() => {
    dispatch(fetchFranchiseData());
  }, [dispatch]);

  return (
   <FranchiseDashboardLayout>
     <Box p={4}>
      <Heading as="h1" mb={4}>Student List</Heading>
      {branchData && (
        <Box mb={4}>
          <Heading as="h2" size="md">Franchise Name: {branchData.franchiseName}</Heading>
          <Text>Location: {branchData.location}</Text>
        </Box>
      )}
      <List>
        {students.map(student => (
          <ListItem key={student.id}>
            <Text>{student.studentName}</Text>
            <Text>Email: {student.email}</Text>
            {/* Display other student details as needed */}
          </ListItem>
        ))}
      </List>
    </Box>
   </FranchiseDashboardLayout>
  );
};

export default StudentListPage;
