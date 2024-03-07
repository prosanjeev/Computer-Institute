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
  fname: string().required("First Name is Required"),
  lname: string().required("First Name is Required"),
  email: string().email().required("Email is Required"),
  password: string().min(6, "must be 6 Charactor").required("Password is required"),
  reaptpassword: string().oneOf([ref("password"), null], "Password must match").required("Repeat Password is required"),
});


const Signup = () => {
  return (
    <Container>
      <Center minH="100vh">
        <Card p={6} borderRadius="16px" w="456px">
          <Text textStyle="h1">Welcome to Crypto App</Text>
          <Text mt={4} textStyle="p2" color="black.60">
            Create a free account by filling data below.
          </Text>

          <Formik
            initialValues={{
              fname: "",
              lname: "",
              email: "",
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
             <Stack mt={10} spacing={6}>
               <Flex gap={4}>
               <Field name="fname" >
                  {({ field, meta }) => (
                    <FormControl isInvalid={(meta.error && meta.touched)}>
                      <FormLabel htmlFor='fname'>First Name:</FormLabel>
                      <Input name="fname" type="text" {...field} />

                      <FormErrorMessage>{meta.error}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
               <Field name="lname" >
                  {({ field, meta }) => (
                    <FormControl isInvalid={(meta.error && meta.touched)}>
                      <FormLabel htmlFor='lname'>Last Name:</FormLabel>
                      <Input name="lname" type="text" {...field} />
                      <FormErrorMessage>{meta.error}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
               </Flex>

               <Field name="email" >
                  {({ field, meta }) => (
                    <FormControl isInvalid={(meta.error && meta.touched)}>
                      <FormLabel htmlFor='email'>Email:</FormLabel>
                      <Input name="email" type="email" {...field} />
                      <FormErrorMessage>{meta.error}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

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
               
               <Checkbox defaultChecked>
                 I agree with{" "}
                 <Text as="span" color="p.purple">
                   Terms & Conditions.
                 </Text>
               </Checkbox>
               <Button type="submit">Create Account</Button>
               <Text>
                 Already have an account?{" "}
                 <Link to="/login">
                   <Text as="span" color="p.purple">
                     Log In
                   </Text>
                 </Link>{" "}
               </Text>
             </Stack>
           </Form>
           )}
          </Formik>
        </Card>
      </Center>
    </Container>
  );
};

export default Signup;
