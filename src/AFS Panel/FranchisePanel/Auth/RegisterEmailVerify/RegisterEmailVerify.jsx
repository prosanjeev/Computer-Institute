import React from 'react'
import Card from '../../../components/Card'
import { MdEmail } from "react-icons/md";
import { Box, Button, Center, Icon, Text, VStack } from '@chakra-ui/react';


const RegisterEmailVerify = () => {
  return (
   <Center minH="100vh">
     <Card>
        <VStack spacing={6}>
            <Icon as={MdEmail} boxSize={12} color="p.purple"/>
            <Text textStyle="h4" color="p.black">Email Verification</Text>
            <Text textAlign="center" textStyle="p2" color="black.60">We have sent you an email verification to  <Box as='b' color="black">jenny.wilson@gmail.com</Box>. If you didn’t receive it, click the button below.</Text>
            <Button variant="outline" w="full">Re-Send Email</Button>
        </VStack>
    </Card>
   </Center>
  )
}

export default RegisterEmailVerify