import React from 'react'
import Card from '../../../components/Card'
import { FaCheckCircle } from "react-icons/fa";
import { Box, Button, Center, Icon, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';


const PasswordResetDone = () => {
  return (
   <Center minH="100vh">
     <Card>
        <VStack spacing={4}>
            <Icon as={FaCheckCircle} boxSize={12} color="green"/>
            <Text textStyle="h4" color="p.black">Password Reset Done</Text>
            <Text textAlign="center" textStyle="p2" color="black.60">Now you can access you account. </Text>
        <Box w="full">
        <Link to="/login"> <Button w="full">Sign In</Button></Link>
        </Box>
        </VStack>
    </Card>
   </Center>
  )
}

export default PasswordResetDone