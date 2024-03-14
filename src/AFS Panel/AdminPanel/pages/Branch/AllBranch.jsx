import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import { Box, Button, Flex, Grid, Icon, Image, Switch, useBreakpointValue } from '@chakra-ui/react'
import { FaRegEdit } from "react-icons/fa";


const AllBranch = () => {
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
    
      const isDesktop = useBreakpointValue({ base: false, md: true });

      return (
          <DashboardLayout title="Center List">
              <Flex direction="column" alignItems="center" mx={2}>
                  <Grid
                      w="90%"
                      templateColumns={isDesktop ? "3% 7% 6% 15% 16% 17% 15% 6% 4% 5%" : "1fr"}
                      gap={2}
                      bg="orange"
                      fontWeight="bold"
                      py={2}
                      pl='1%'
                      mb={2}
                  >
                      <Box>Sr.</Box>
                      <Box>Date</Box>
                      <Box>Photo</Box>
                      <Box>Branch Code</Box>
                      <Box>Name</Box>
                      <Box>Center Name</Box>  
                      <Box>Section</Box>
                      <Box>Status</Box>
                      <Box>Details</Box>
                      <Box>Delete</Box>
                  </Grid>
                  {students.map((student, index) => (
                      <Grid
                          key={student.id}
                          w="90%"
                          templateColumns={isDesktop ? "3% 7% 6% 15% 16% 17% 15% 6% 4% 5%" : "1fr"}
                          gap={2}
                          borderBottom="1px solid"
                          borderColor="gray.200"
                          py={2}
                          pl='1%'
                          mb={2}
                          alignItems="center"
                      >
                          <Box>{index + 1}</Box>
                          <Box>{student.date}</Box>
                          <Box><Image src={student.photo} alt={student.name} w="50px" h="50px" /></Box>
                          <Box>{student.enrollmentNo}</Box>
                          <Box>{student.name}</Box>

                          <Box>{student.center}</Box>
                          <Box>{student.course}</Box>
                          <Box><Switch
                              isChecked={student.status === 'Active'} 
                              onChange={(e) =>
                                  handleStatusChange(student.id, e.target.checked ? 'Active' : 'Inactive')
                              }
                              colorScheme={student.status === 'Active' ? 'green' : 'red'}
                          /></Box>
                          <Box><Icon as={FaRegEdit} size="sm" colorScheme="blue" /></Box>
                          <Box><Button size="sm" colorScheme="red">Delete</Button></Box>
                      </Grid>
                  ))}
              </Flex>
          </DashboardLayout>
  )
}

export default AllBranch