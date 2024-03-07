import React from 'react'
import Card from '../../../components/Card'
import { FaCheckCircle } from "react-icons/fa";
import { Box, Button, Center, Icon, Text, VStack } from '@chakra-ui/react';


const ForgotPasswordSent = () => {
  return (
   <Center minH="100vh">
     <Card>
        <VStack spacing={6}>
            <Icon as={FaCheckCircle} boxSize={12} color="green"/>
            <Text textStyle="h4" color="p.black">Successfully Sent</Text>
            <Text textAlign="center" p={1} textStyle="p2" color="black.60">We have sent you an email verification to  <Box as='b' color="black">jenny.wilson@gmail.com</Box>. Please follow the instructions from the email.</Text>
          
        </VStack>
    </Card>
   </Center>
  )
}

export default ForgotPasswordSent