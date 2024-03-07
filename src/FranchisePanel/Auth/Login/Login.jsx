import {
    Box,
    Button,
    Card,
    Center,
    Checkbox,
    Container,
    FormControl,
    FormErrorMessage,
    FormLabel,
    HStack,
    Input,
    Stack,
    Text,
  } from "@chakra-ui/react";
  import React from "react";
  import {  Link } from "react-router-dom";
  import {  Field, Form, Formik } from "formik";
  import { object, string, ref } from 'yup';
  
  const loginValidationSchema = object({
    fname: string().required("First Name is Required"),
    lname: string().required("First Name is Required"),
    email: string().email().required("Email is Required"),
    password: string().min(6, "must be 6 Charactor").required("Password is required"),
    reaptpassword: string().oneOf([ref("password"), null], "Password must match").required("Repeat Password is required"),
  });
  
  
  const FranchiseLogin = () => {
    return (
      <Container>
        <Center minH="100vh">
          <Card p={6} borderRadius="16px" w="456px" border='2px solid #d4cfcf'>
            <Text textStyle="h1">Center Login </Text>
            <Text mt={4} textStyle="p2" color="black.60">
            Enter your credentials to access the account.
            </Text>
  
            <Formik
              initialValues={{
                email: "",
                password: "",
               
              }}
              onSubmit={(values) => {
                console.log(values);
              }}
              validationSchema={loginValidationSchema}
            >
             {()=>(
               <Form>
               <Stack mt={8} spacing={6}>
  
                 <Field name="email" >
                    {({ field, meta }) => (
                      <FormControl isInvalid={(meta.error && meta.touched)}>
                        <FormLabel htmlFor='email'>Email:</FormLabel>
                        <Input name="email" type="email" {...field} border='1px solid #d4cfcf' />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
  
                 <Field name="password" >
                    {({ field, meta }) => (
                      <FormControl isInvalid={(meta.error && meta.touched)}>
                        <FormLabel htmlFor='password'>Password:</FormLabel>
                        <Input name="password" type="password" {...field} border='1px solid #d4cfcf'/>
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
               
                 <HStack justifyContent="space-between">
                    <Checkbox defaultChecked>
                      Remember me
                 </Checkbox >
                
                    <Link to="/forgot-password"> <Text color="p.purple">Forgot Password?</Text></Link>

                 </HStack>
                 
                <Box >
                <Button w="full" type="submit">Log In</Button>
                <Link to="/signup"> <Button mt="3" w="full" variant="outline" type="submit">Create New Account</Button></Link>
                </Box>
                 
               </Stack>
             </Form>
             )}
            </Formik>
          </Card>
        </Center>
      </Container>
    );
  };
  
  export default FranchiseLogin;
  