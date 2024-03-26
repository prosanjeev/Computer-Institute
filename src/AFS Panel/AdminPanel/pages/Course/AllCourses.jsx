import React, { useEffect,  } from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import {  Button, Flex,  Icon, Image, Switch, Table, Tbody, Td, Th, Thead, Tr, useBreakpointValue } from '@chakra-ui/react'
import {  FaRegEdit } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { selectAllCourses } from '../../../redux/selectors/coursesSelectors';
import { fetchCourses } from '../../../redux/actions/coursesActions';


const AllCourses = () => {


  const dispatch = useDispatch();
  const courses = useSelector(selectAllCourses);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);
      const handleStatusChange = (studentId, newStatus) => {
        // Implement your logic to update the status of the student with ID studentId to newStatus
      };
      const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
         <DashboardLayout title="Course List">
         <Flex direction="column" alignItems="center" mx={2}>
           <Table
             variant="simple"
             colorScheme="blue"
             size={isDesktop ? "md" : "sm"}
           >
             <Thead>
               <Tr bg="blue.200" >
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
                  Code
                 </Th>
                 <Th fontSize="lg" fontWeight="bold">
                 Course  Name
                 </Th>
                 <Th fontSize="lg" fontWeight="bold">
                    Type
                 </Th>
                 <Th fontSize="lg" fontWeight="bold">
                 Duration
                 </Th>
                 <Th fontSize="lg" fontWeight="bold">
                 Fee
                 </Th>
                 <Th fontSize="lg" fontWeight="bold">
                   Status
                 </Th>
                 <Th fontSize="lg" fontWeight="bold">
                   Details
                 </Th>
                 <Th fontSize="lg" fontWeight="bold">
                   Delete
                 </Th>
               </Tr>
             </Thead>
             <Tbody>
               {courses.map((course, index) => (
                 <Tr key={index}>
                   <Td>{index + 1}</Td>
                   <Td>{new Date(course.createdAt).toLocaleDateString('en-GB')}</Td>
                   <Td>
                     <Image
                       src={course.courseUrl}
                       alt={course.courseName}
                       w="40px"
                       h="40px"
                     />
                   </Td>
                   <Td>{course.courseCode}</Td>
                   <Td borderLeft='1px solid red' >{course.courseName}</Td>
                   {/* <Td>{course.shortName}</Td> */}
                   <Td>{course.categoryName}</Td>
                   <Td>{course.duration}</Td>
                   <Td>{course.fee}</Td>
                   <Td>
                     <Switch
                       isChecked={course.status === "Active"}
                       onChange={(e) =>
                         handleStatusChange(
                          course.id,
                           e.target.checked ? "Active" : "Inactive"
                         )
                       }
                       colorScheme={course.status === "Active" ? "green" : "red"}
                     />
                   </Td>
                   <Td>
                     <Icon as={FaRegEdit} size="sm" colorScheme="blue" />
                   </Td>
                   <Td>
                     <Button size="sm" colorScheme="red">
                       Delete
                     </Button>
                   </Td>
                 </Tr>
               ))}
             </Tbody>
           </Table>
         </Flex>
       </DashboardLayout>
  )
}

export default AllCourses