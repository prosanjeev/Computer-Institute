import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import { Box, Button, Flex, Icon, Image, Switch, Text } from '@chakra-ui/react'
import { FaEdit, FaRegEdit } from "react-icons/fa";


const AllStudent = () => {
    const students = [
        {
          id: 1,
          date: '2024-02-21',
          photo: 'https://via.placeholder.com/50',
          enrollmentNo: 'EN001',
          name: 'John Doe',
          fathersName: 'Michael Doe',
          center: 'Center A',
          course: 'Course A',
          status: 'Active'
        },
        {
          id: 1,
          date: '2024-02-21',
          photo: 'https://via.placeholder.com/50',
          enrollmentNo: 'EN001',
          name: 'John Doe',
          fathersName: 'Michael Doe',
          center: 'Center A',
          course: 'Course A',
          status: 'Active'
        },
        {
          id: 1,
          date: '2024-02-21',
          photo: 'https://via.placeholder.com/50',
          enrollmentNo: 'EN001',
          name: 'Gyanoday Kumar Singh',
          fathersName: 'Michael Doe',
          center: 'Center A',
          course: 'Course A',
          status: 'Active'
        },
        {
          id: 1,
          date: '2024-02-21',
          photo: 'https://via.placeholder.com/50',
          enrollmentNo: 'EN001',
          name: 'John Doe',
          fathersName: 'Michael Doe',
          center: 'Center A',
          course: 'Course A',
          status: 'Active'
        },
        {
          id: 1,
          date: '2024-02-21',
          photo: 'https://via.placeholder.com/50',
          enrollmentNo: 'EN001',
          name: 'John Doe',
          fathersName: 'Michael Doe',
          center: 'Center A',
          course: 'Course A',
          status: 'Active'
        },
        {
          id: 1,
          date: '2024-02-21',
          photo: 'https://via.placeholder.com/50',
          enrollmentNo: 'EN001',
          name: 'John Doe',
          fathersName: 'Michael Doe',
          center: 'Center A',
          course: 'Course A',
          status: 'Active'
        },
        {
          id: 1,
          date: '2024-02-21',
          photo: 'https://via.placeholder.com/50',
          enrollmentNo: 'EN001',
          name: 'John Doe',
          fathersName: 'Michael Doe',
          center: 'Center A',
          course: 'Course A',
          status: 'Active'
        },
        {
          id: 1,
          date: '2024-02-21',
          photo: 'https://via.placeholder.com/50',
          enrollmentNo: 'EN001',
          name: 'John Doe',
          fathersName: 'Michael Doe',
          center: 'Center A',
          course: 'Course A',
          status: 'Active'
        },
        {
          id: 1,
          date: '2024-02-21',
          photo: 'https://via.placeholder.com/50',
          enrollmentNo: 'EN001',
          name: 'John Doe',
          fathersName: 'Michael Doe',
          center: 'Center A',
          course: 'Course A',
          status: 'Active'
        },
        {
          id: 1,
          date: '2024-02-21',
          photo: 'https://via.placeholder.com/50',
          enrollmentNo: 'EN001',
          name: 'John Doe',
          fathersName: 'Michael Doe',
          center: 'Center A',
          course: 'Course A',
          status: 'Inactive'
        },
        // Add more student objects here
      ];


      const handleStatusChange = (studentId, newStatus) => {
        // Implement your logic to update the status of the student with ID studentId to newStatus
      };
  return (
    <DashboardLayout title="Student List"  >
    <Flex  direction="column" alignItems="center" mx={2} >
      <Flex w="90%"  bg="gray.200" fontWeight="bold" py={2} mb={2} >
        <Box w="10%" pl={3}>Date</Box>
        <Box w="7%">Photo</Box>
        <Box w="12%">Enr No.</Box>
        <Box w="16%">Name</Box>
        <Box w="16%">Father's Name</Box>
        <Box w="12%">Center</Box>
        <Box w="12%">Course</Box>
        <Box w="5%">Status</Box>
        <Box w="5%">Details</Box>
        <Box w="5%">Delete</Box>
      </Flex>
      {students.map((student) => (
        <Flex key={student.id} w="90%" borderBottom="1px solid" borderColor="gray.200" py={2} mb={2} alignItems="center">
          <Box w="10%" pl={2}>{student.date}</Box>
          <Box w="7%"><Image src={student.photo} alt={student.name} w="50px" h="50px" /></Box>
          <Box w="12%">{student.enrollmentNo}</Box>
          <Box w="16%">{student.name}</Box>
          <Box w="16%">{student.fathersName}</Box>
          <Box w="12%">{student.center}</Box>
          <Box w="12%">{student.course}</Box>
          <Box w="6%"><Switch
            isChecked={student.status === 'Active'}
            onChange={(e) =>
              handleStatusChange(student.id, e.target.checked ? 'Active' : 'Inactive')
            }
            colorScheme={student.status === 'Active' ? 'green' : 'red'}
          /></Box>
          {/* <Box w="5%"><Button size="sm" colorScheme="blue">Details</Button></Box> */}
          <Box w="4%"><Icon as={FaRegEdit} size="sm" colorScheme="blue" /> </Box>
          <Box w="5%"><Button size="sm" colorScheme="red">Delete</Button></Box>
        </Flex>
      ))}
    </Flex>
  </DashboardLayout>
  )
}

export default AllStudent