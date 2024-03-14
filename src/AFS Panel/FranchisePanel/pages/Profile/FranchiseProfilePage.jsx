// FranchiseProfilePage.js
import React from 'react';
import { Container, Heading, VStack, Text, Divider, StackDivider, Badge } from '@chakra-ui/react';
import FranchiseDashboardLayout from '../../components/FranchiseDashboardLayout';

const FranchiseProfilePage = () => {
  // Sample franchise data (you can replace this with actual data from your backend)
  const franchiseData = {
    name: 'Franchise Name',
    email: 'franchise@example.com',
    phone: '123-456-7890',
    address: '123 Franchise St, City',
    // Add more fields as needed
  };

  return (
    <FranchiseDashboardLayout title='Profile'>
        <Container maxW="lg" py={8}>
      {/* <Heading as="h1" size="lg" mb={4}>Franchise Profile</Heading> */}
      <VStack spacing={4} align="start" divider={<StackDivider borderColor="gray.200" />} borderColor="gray.200" borderWidth="1px" p={4} borderRadius="md">
        <Text fontSize="xl"><strong>Name:</strong> {franchiseData.name}</Text>
        <Text><strong>Email:</strong> {franchiseData.email}</Text>
        <Text><strong>Phone:</strong> {franchiseData.phone}</Text>
        <Text><strong>Address:</strong> {franchiseData.address}</Text>
        {/* Add more fields here */}
        <Divider />
        <Heading as="h3" size="md">Franchise Status</Heading>
        <Badge colorScheme="green">Active</Badge>
        {/* Add more status indicators or details */}
      </VStack>
    </Container>
    </FranchiseDashboardLayout>
  );
};

export default FranchiseProfilePage;
