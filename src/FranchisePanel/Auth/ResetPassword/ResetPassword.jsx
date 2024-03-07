import {
  Button,
  Card,
  Center,
  Checkbox,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import {  Link } from "react-router-dom";
import {  Field, Form, Formik } from "formik";
import { object, string, ref } from 'yup';

const signupValidationSchema = object({
  password: string().min(6, "must be 6 Charactor").required("Password is required"),
  reaptpassword: string().oneOf([ref("password"), null], "Password must match").required("Repeat Password is required"),
});


const ResetPassword = () => {
  return (
    <Container>
      <Center minH="100vh">
        <Card p={6} borderRadius="16px" w="456px">
          <Text textStyle="h2">Reset Password</Text>
          <Text mt={2} textStyle="p2" color="black.60">
          Enter your new password.
          </Text>

          <Formik
            initialValues={{
              password: "",
              reaptpassword: "",
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
            validationSchema={signupValidationSchema}
          >
           {()=>(
             <Form>
             <Stack mt={6} spacing={4}>
                          
               <Field name="password" >
                  {({ field, meta }) => (
                    <FormControl isInvalid={(meta.error && meta.touched)}>
                      <FormLabel htmlFor='password'>Password:</FormLabel>
                      <Input name="password" type="password" {...field} />
                      <FormErrorMessage>{meta.error}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
               <Field name="reaptpassword" >
                  {({ field, meta }) => (
                    <FormControl isInvalid={(meta.error && meta.touched)}>
                      <FormLabel htmlFor='reaptpassword'>Reapt Password:</FormLabel>
                      <Input name="reaptpassword" type="password" {...field} />
                      <FormErrorMessage>{meta.error}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
               
               <Button variant="outline" type="submit">Reset Password</Button>
              
             </Stack>
           </Form>
           )}
          </Formik>
        </Card>
      </Center>
    </Container>
  );
};

export default ResetPassword;
