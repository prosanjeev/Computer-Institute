import React from 'react'
import Card from '../../../components/Card'
import { FaCheckCircle } from "react-icons/fa";
import { Box, Button, Center, Icon, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';


const RegisterSuccess = () => {
  return (
   <Center minH="100vh">
     <Card>
        <VStack spacing={6}>
            <Icon as={FaCheckCircle} boxSize={12} color="green"/>
            <Text textStyle="h4" color="p.black">Successfully Registration</Text>
            <Text textAlign="center" textStyle="p2" color="black.60">Hurray! You have successfully created your account. Enter the app to explore all it’s features.</Text>
          <Box w="full">
          <Link to="/login" > <Button minW="100%" >Enter the App</Button></Link>
          </Box>
        </VStack>
    </Card>
   </Center>
  )
}

export default RegisterSuccess