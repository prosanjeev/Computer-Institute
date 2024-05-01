// FranchiseProfilePage.js
import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Text,
  Avatar,
  Badge,
  Divider,
  Flex,
  Heading,
  Stack, 
  Button,
} from "@chakra-ui/react";
import FranchiseDashboardLayout from "../../components/FranchiseDashboardLayout";
import { useDispatch, useSelector } from "react-redux";
import { fetchFranchiseDataOnly, selectbranchData } from "../../../redux/franchise/authSlice";
import { Link } from "react-router-dom";

const FranchiseProfilePage = () => {
  const dispatch = useDispatch();
  const branchData = useSelector(selectbranchData);

  useEffect(() => {
    dispatch(fetchFranchiseDataOnly());
  }, [dispatch]);

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;

  const {
    directorName = "",
    gender = "",
    primaryPhone = "",
    email = "",
    logoUrl = "",
    centerId = "",
    centerName = "",
    officePhone = "",
    policeStation = "",
    pinCode = "",
    centerPlace = "",
    wathsappPhone = "",
    state = "",
    district = "",
    userName = "",
    password = "",
    createdAt,
  } = branchData || {};
  

  return (
    <FranchiseDashboardLayout title="Profile">
  <Container maxW="xl" centerContent>
    <Box p="4" shadow="md" borderRadius="md" bg="white" w="100%">
      <Flex alignItems="center" mb="4">
        <Avatar src={logoUrl} name={directorName} size="xl" mr="4" />
        <Stack>
          <Heading size="lg">{directorName}</Heading>
          <Text color="gray.600">{email}</Text>
          <Badge colorScheme="green">{gender}</Badge>
        </Stack>
      </Flex>
      <Divider />
      <Stack mt="4" spacing="4">
        <Text>
          <Text as="span" fontWeight="bold">CenterId:</Text> {centerId}
        </Text>
        <Text>
          <Text as="span" fontWeight="bold">Reg1 Date:</Text> {new Date(createdAt).toLocaleDateString('en-GB')}
        </Text>
        <Text>
          <Text as="span" fontWeight="bold">Username:</Text> {centerName}
        </Text>
        <Text>
          <Text as="span" fontWeight="bold">Primary Phone:</Text> {primaryPhone}
        </Text>
        <Text>
          <Text as="span" fontWeight="bold">Email:</Text> {email}
        </Text>
        <Text>
          <Text as="span" fontWeight="bold">State:</Text> {state}
        </Text>
        <Text>
          <Text as="span" fontWeight="bold">District:</Text> {district}
        </Text>
        <Text>
          <Text as="span" fontWeight="bold">Pin code:</Text> {pinCode}
        </Text>
        <Button colorScheme="blue">Edit Profile</Button>
      </Stack>
      <Link to='/authorisation-certificate'>
        <Button colorScheme="red" mt={5}>Download Authorisation Certificate </Button>
      </Link>
    </Box>
  </Container>
</FranchiseDashboardLayout>

  );
};

export default FranchiseProfilePage;
