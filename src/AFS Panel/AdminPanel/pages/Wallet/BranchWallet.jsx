import React, { useState, useEffect } from "react";
import { fireDB } from "../../../firebase/FirebaseConfig";
import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import Dashboard from "../Dashboard/Dashboard";
import DashboardLayout from "../../components/DashboardLayout";
import {
  Box,
  Button,
  Heading,
  List,
  ListItem,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

const BranchWallet = () => {
  const [requests, setRequests] = useState([]);
  console.log(requests);

  useEffect(() => {
    const q = query(
      collection(fireDB, "franchiseData"),
      where("requestAmount", ">", 0)
    );

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const requestsData = [];
        snapshot.forEach((doc) => {
          // Log each document for debugging
          console.log("Document ID:", doc.id);
          console.log("Document Data:", doc.data());

          requestsData.push({ id: doc.id, ...doc.data() });
        });

        // Log the constructed requestsData for debugging
        console.log("Requests Data:", requestsData);

        setRequests(requestsData);
      },
      (error) => {
        console.error("Error getting documents:", error);
      }
    );

    return () => unsubscribe();
  }, []);

  const handleApprove = async (id, newAmount) => {
    try {
      // Get a reference to the document
      const docRef = doc(fireDB, "franchiseData", id);

      // Get the current document data
      const docSnapshot = await getDoc(docRef);
      if (docSnapshot.exists()) {
        const currentData = docSnapshot.data();

        // Calculate the new wallet amount
        const currentWallet = currentData.wallet || 0; // Default to 0 if wallet is not set
        const updatedWallet = currentWallet + newAmount;

        // Update the document with the new wallet amount and set requestAmount to 0
        await updateDoc(docRef, {
          wallet: updatedWallet,
          requestAmount: 0,
        });
      }
    } catch (error) {
      console.error("Error approving amount:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
        const docRef = doc(fireDB, "franchiseData", id);
        await updateDoc(docRef, {
            requestAmount: 0,
          });
    } catch (error) {
      console.error("Error deleting request:", error);
    }
  };

  return (
    <DashboardLayout title="Franchise Requests">
      <Box>
       
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>S.N</Th>
              <Th>Center Name</Th>
              <Th>Director Name</Th>
              <Th>Request Amount</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {requests.map((request, index) => (
              <Tr key={request.id}>
                <Td>{index + 1}</Td>
                <Td>{request.centerName}</Td>
                <Td>{request.directorName}</Td>
                <Td>₹{request.requestAmount}</Td>
                <Td>
                  <Button
                    onClick={() =>
                      handleApprove(request.id, request.requestAmount)
                    }
                    mr={2}
                  >
                    Approve
                  </Button>
                  <Button
                    onClick={() => handleDelete(request.id)}
                    colorScheme="red"
                  >
                    Delete
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </DashboardLayout>
  );
};

export default BranchWallet;
