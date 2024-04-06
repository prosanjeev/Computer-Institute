import React, { useEffect, useState } from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import { Box, Button, Flex, Grid, Icon, Image, Switch, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from '@chakra-ui/react'
import { FaEdit, FaRegEdit } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { selectStudents, selectStudentsError, selectStudentsLoading } from '../../../redux/selectors/franchiseStudentsSelectors';
import { fetchStudents } from '../../../redux/actions/franchiseStudentsActions';


const AllStudent = () => {


  const dispatch = useDispatch();
  const students = useSelector(selectStudents);
  const loading = useSelector(selectStudentsLoading);
  const error = useSelector(selectStudentsError);
 
  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

      const handleStatusChange = (studentId, newStatus) => {
        // Implement your logic to update the status of the student with ID studentId to newStatus
      };
      const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
         <DashboardLayout title="Student List">
         <Flex direction="column" alignItems="center" mx={2}>
           <Table
             variant="simple"
             colorScheme="blue"
             size={isDesktop ? "md" : "sm"}
           >
             <Thead>
               <Tr bg="orange.400" >
                 <Th fontSize="lg" fontWeight="bold">
                   Sr.
                 </Th>
                 <Th fontSize="lg" fontWeight="bold">
                   Date
                 </Th>
                 <Th fontSize="lg" fontWeight="bold">
                   Photo
                 </Th>
                 <Th fontSize="lg" fontWeight="bold">
                 Enr No.
                 </Th>
                 <Th fontSize="lg" fontWeight="bold">
                   Name
                 </Th>
                 <Th fontSize="lg" fontWeight="bold">
                    Father's Name
                 </Th>
                 <Th fontSize="lg" fontWeight="bold">
                 Center
                 </Th>
                 <Th fontSize="lg" fontWeight="bold">
                 Course
                 </Th>
                 <Th fontSize="lg" fontWeight="bold">
                   Status
                 </Th>
                 <Th fontSize="lg" fontWeight="bold">
                   Details
                 </Th>
                 {/* <Th fontSize="lg" fontWeight="bold">
                   Delete
                 </Th> */}
               </Tr>
             </Thead>
             <Tbody>
               {students.map((student, index) => (
                 <Tr key={index}>
                   <Td>{index + 1}</Td>
                   <Td>{new Date(student.createdAt).toLocaleDateString('en-GB')}</Td>
                   <Td>
                     <Image
                       src={student.photoUrl}
                       alt={student.studentName}
                       w="40px"
                       h="40px"
                     />
                   </Td>
                   <Td>{student.studentId}</Td>
                   <Td borderLeft='1px solid red' >{student.studentName}</Td>
                   <Td>{student.fatherName}</Td>
                   <Td>{student.centerName}</Td>
                   <Td>{student.state}</Td>
                   <Td>
                     <Switch
                       isChecked={student.status === "Active"}
                       onChange={(e) =>
                         handleStatusChange(
                          student.id,
                           e.target.checked ? "Active" : "Inactive"
                         )
                       }
                       colorScheme={student.status === "Active" ? "green" : "red"}
                     />
                   </Td>
                   <Td>
                     <Icon as={FaRegEdit} size="sm" colorScheme="blue" />
                   </Td>
                   {/* <Td>
                     <Button size="sm" colorScheme="red">
                       Delete
                     </Button>
                   </Td> */}
                 </Tr>
               ))}
             </Tbody>
           </Table>
         </Flex>
       </DashboardLayout>
  )
}

export default AllStudent