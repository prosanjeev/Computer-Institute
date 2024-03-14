import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import DashboardLayout from '../../components/DashboardLayout';

const CourseCategoryPage = () => {
  const [courseCategories, setCourseCategories] = useState([
    {
      id: 1,
      title: 'Computer Software Courses',
      eligibility: '10 & 12',
      duration: '1 or 2 Year',
    },
    {
      id: 2,
      title: 'Hardware Courses',
      eligibility: '12',
      duration: '6 Months',
    },
    {
      id: 3,
      title: 'Vocational Course',
      eligibility: '10 & 12',
      duration: '1 or 2 Year',
    },
    {
      id: 4,
      title: 'Skill Course',
      eligibility: '10 & 12',
      duration: '1 Year',
    },
    {
      id: 5,
      title: 'PG Course',
      eligibility: 'Graducation',
      duration: '1 Year',
    },
    {
      id: 6,
      title: 'DM',
      eligibility: '+3',
      duration: '3 month',
    },
  ]);

  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);

  const addCourseCategory = () => {
    // Add your logic here to add a new course category
    setIsOpen(false);
  };

  return (
   <DashboardLayout title='Course Category'>
     <Box p="6">
      {/* <Heading mb="6">Course Categories</Heading> */}
      <Button colorScheme="teal" mb="4" onClick={() => setIsOpen(true)}>
        Add Course Category
      </Button>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>#</Th>
            <Th>Title</Th>
            <Th>Eligibility</Th>
            <Th>Duration</Th>
            <Th>Edit</Th>
            <Th>Delete</Th>
          </Tr>
        </Thead>
        <Tbody>
          {courseCategories.map((category, index) => (
            <Tr key={category.id}>
              <Td>{index + 1}</Td>
              <Td>{category.title}</Td>
              <Td>{category.eligibility}</Td>
              <Td>{category.duration}</Td>
              <Td>
                <Button colorScheme="blue" size="sm">
                  Edit
                </Button>
              </Td>
              <Td>
                <Button colorScheme="red" size="sm">
                  Delete
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Course Category</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input placeholder="Enter title" />
            </FormControl>
            <FormControl mt="4">
              <FormLabel>Eligibility</FormLabel>
              <Input placeholder="Enter eligibility" />
            </FormControl>
            <FormControl mt="4">
              <FormLabel>Duration</FormLabel>
              <Input placeholder="Enter duration" />
            </FormControl>
            <Button colorScheme="teal" mt="4" onClick={addCourseCategory}>
              Add
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
   </DashboardLayout>
  );
};

export default CourseCategoryPage
