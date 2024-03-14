// WalletRechargeRequestForm.js
import React, { useState } from 'react';
import { Box, Button, Container, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react';
import FranchiseDashboardLayout from '../../components/FranchiseDashboardLayout';

const WalletRechargeRequestForm = () => {
  const [amount, setAmount] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the form data to the server
    console.log('Amount:', amount, 'Reason:', reason);
    // You can send a request to the server to handle the wallet recharge request here
  };

  return (
   <FranchiseDashboardLayout title="Wallate">
     <Container>
      <form onSubmit={handleSubmit}>
        <FormControl id="amount" isRequired>
          <FormLabel>Amount</FormLabel>
          <Input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </FormControl>
        <FormControl id="reason" isRequired mt={4}>
          <FormLabel>Reason</FormLabel>
          <Textarea value={reason} onChange={(e) => setReason(e.target.value)} />
        </FormControl>
        <Button type="submit" colorScheme="blue" mt={4}>Submit Request</Button>
      </form>
    </Container>
   </FranchiseDashboardLayout>
  );
};

export default WalletRechargeRequestForm;
