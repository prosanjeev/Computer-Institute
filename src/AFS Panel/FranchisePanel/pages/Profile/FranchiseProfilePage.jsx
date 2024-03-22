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
import { fetchFranchiseData, selectbranchData } from "../../../redux/slice/franchise/authSlice";
import { Link } from "react-router-dom";

const FranchiseProfilePage = () => {
  const dispatch = useDispatch();
  const branchData = useSelector(selectbranchData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchFranchiseData())
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false));
  }, [dispatch]);
  // console.log("branchData:", branchData);

  const {
    directorname = "",
    gender = "",
    primaryphone = "",
    email = "",
    selectId = "",
    documentId = "",
    centerId = "",
    centername = "",
    officephone = "",
    policestation = "",
    pincode = "",
    centerplace = "",
    wathsappphone = "",
    state = "",
    district = "",
    username = "",
    password = "",
    createdAt,
  } = branchData || {};
  

 

  return (
    <FranchiseDashboardLayout title="Profile">
    <Container maxW="xl" centerContent>
      <Box p="4" shadow="md" borderRadius="md" bg="white" w="100%">
        <Flex alignItems="center" mb="4">
          <Avatar name={directorname} size="xl" mr="4" />
          <Stack>
            <Heading size="lg">{directorname}</Heading>
            <Text color="gray.600">{email}</Text>
            <Badge colorScheme="green">{gender}</Badge>
          </Stack>
        </Flex>
        <Divider />
        <Stack mt="4" spacing="4">
          <Text>
            <strong>CenterId:</strong> {centerId}
          </Text>
          <Text>
            <strong>Reg Date:</strong>  {new Date(createdAt).toLocaleDateString('en-GB')}
          </Text>
          <Text>
            <strong>Username:</strong> {username}
          </Text>
          <Text>
            <strong>Primary Phone:</strong> {primaryphone}
          </Text>
          <Text>
            <strong>Email:</strong> {email}
          </Text>
          <Text>
            <strong>State:</strong> {state}
          </Text>
          <Text>
            <strong>District:</strong> {district}
          </Text>
          <Text>
            <strong>Pin code:</strong> {pincode}
          </Text>
          <Button colorScheme="blue">Edit Profile</Button>
        </Stack>
        <Link to='/authorisation-certificate'>  <Button colorScheme="red" mt={5}>Download Authorisation Certificate </Button></Link>
      </Box>
    </Container>
    </FranchiseDashboardLayout>
  );
};

export default FranchiseProfilePage;
