import { useState, useEffect } from 'react';
import {  collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { fireDB } from '../../../firebase/FirebaseConfig';
import DashboardLayout from '../../components/DashboardLayout';
import { Box, Button, Heading, Text, VStack } from '@chakra-ui/react';
import { toast } from 'react-toastify';

const ContactUsQuery = () => {
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    const fetchQueries = async () => {
      const querySnapshot = await getDocs(collection(fireDB, 'contactUsQuery'));
      const queriesData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setQueries(queriesData);
    };

    fetchQueries();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(fireDB, 'contactUsQuery', id));
    setQueries(queries.filter(query => query.id !== id));
    toast.success("Query Deleted Succussefully")
  };

  return (
    <DashboardLayout title='ContactUsQuery'>
      <VStack spacing={4} align="stretch">
      {queries.map(query => (
        <Box
          key={query.id}
          borderWidth="1px"
          borderRadius="lg"
          p={4}
          boxShadow="lg"
        >
          <Text>
            <strong>Date:</strong> {new Date(query.createdAt).toLocaleDateString('en-GB')}
          </Text>
          <Text>
            <strong>Name:</strong> {query.name}
          </Text>
          <Text>
            <strong>Phone:</strong> {query.phone}
          </Text>
          <Text>
            <strong>Email:</strong> {query.email}
          </Text>
          <Text>
            <strong>Subject:</strong> {query.subject}
          </Text>
          <Text>
            <strong>Message:</strong> {query.message}
          </Text>
          <Button colorScheme="red" mt={2} onClick={() => handleDelete(query.id)}>
            Delete
          </Button>
        </Box>
      ))}
    </VStack>
    </DashboardLayout>
  );
};

export default ContactUsQuery;
