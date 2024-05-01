// WalletRechargeRequestForm.js
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardBody,
  Container,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import FranchiseDashboardLayout from "../../components/FranchiseDashboardLayout";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFranchiseData,
  selectUserId,
  selectbranchData,
} from "../../../redux/franchise/authSlice";
import { updateRequestAmount } from "../../../redux/actions/franchiseWalletActions";
import { fireDB } from "../../../firebase/FirebaseConfig";
import { collection, doc,  updateDoc } from "firebase/firestore";


const WalletRechargeRequestForm = () => {
  const [requestedAmount, setRequestedAmount] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

 const franchiseId = useSelector(selectUserId); // Assuming you have a selector to get the franchise ID from your auth state

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(updateRequestAmount({ franchiseId, amount: requestedAmount }));
  //   setRequestedAmount('');
  // };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
  
    try {
      // Assuming 'fireDB' is a valid reference to your Firestore instance
      await updateDoc(
        doc(collection(fireDB, "franchiseData"), franchiseId),
        {
          requestAmount: parseInt(requestedAmount),
        }
      );
  
      setRequestedAmount(''); // Clear the requested amount after successful update
    } catch (error) {
      console.error("Error requesting amount:", error);
      // Handle errors gracefully, e.g., display an error message to the user
    }
  };

  const branchData = useSelector(selectbranchData);

  useEffect(() => {
    dispatch(fetchFranchiseData())
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false));
  }, [dispatch]);

  return (
    <FranchiseDashboardLayout title="Wallate">
      <Container>
        <form onSubmit={handleSubmit}>
          <FormControl id="requestedAmount" isRequired>
            <FormLabel>Amount</FormLabel>
            <Input
              type="number"
              value={requestedAmount}
              onChange={(e) => setRequestedAmount(e.target.value)}
              placeholder="Enter requested amount"
            />
          </FormControl>
          {/* <FormControl id="reason" isRequired mt={4}>
            <FormLabel>Reason</FormLabel>
            <Textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />
          </FormControl> */}
          <Button type="submit" colorScheme="blue" mt={4}>
            Submit Request
          </Button>
        </form>
      </Container>
      <Flex w={{md:"30vw", base:'90vw'}} gap={10} mt={20} mx="auto" fontSize="20px" flexWrap='wrap' border='1px solid gray' p={10} justify='center' borderRadius='10px'>
        <Card h={40} w="auto" p={8}>
          <Stack align="center">
            <Text fontSize="24px"> Wallet:</Text>
            <Text fontSize="30px" fontWeight="600">
              {branchData && branchData.wallet}₹
            </Text>
          </Stack>
        </Card>
        <Card h={40} w="auto" p={10}>
          <Stack align="center">
            <Text fontSize="24px"> Request Amount:</Text>
            <Text fontSize="30px" fontWeight="600">
              {branchData && parseInt(branchData.requestAmount)}₹
            </Text>
          </Stack>
        </Card>
       
      </Flex>
    </FranchiseDashboardLayout>
  );
};

export default WalletRechargeRequestForm;
