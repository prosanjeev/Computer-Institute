import React from 'react'
import {CustomCard} from '../../../../components/chakra/CustomCard'
import { FaCheckCircle } from "react-icons/fa";
import { Box, Button, Card, Center, Icon, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';


const RegisterSuccess = () => {
  return (
   <Center h='95vh'>
     <CustomCard>
        <VStack spacing={6} w={{base:'90vw', md:'400px'}}>
            <Icon as={FaCheckCircle} boxSize={12} color="green"/>
            <Text textStyle="h4" color="p.black">Successfully Registration</Text>
            <Text textAlign="center" textStyle="p2" color="black.60">Hurray! You have successfully created your account. Enter the app to explore all it’s features.</Text>
          <Box w="full">
          <Link to="/login" > <Button minW="100%" >Enter the App</Button></Link>
          </Box>
        </VStack>
    </CustomCard>
   </Center>
  )
}

export default RegisterSuccess