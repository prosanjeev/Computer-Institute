import {
    Button,
    Card,
    Center,
    Container,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Icon,
    Input,
    Stack,
    Text,
  } from "@chakra-ui/react";
  import React from "react";
  import {  Link } from "react-router-dom";
  import {  Field, Form, Formik } from "formik";
  import { object, string} from 'yup';
  import { FaArrowLeft } from "react-icons/fa";
  
  const forgotValidationSchema = object({
       email: string().email().required("Email is Required"),
  });
  
  
  const ForgotPassword = () => {
    return (
      <Container>
        <Center minH="100vh">
          <Card p={6} borderRadius="16px" w="456px">
          <Link to="/login">  <Icon  as={FaArrowLeft} boxSize={6} mb={4} color="p.purple"/>  </Link>
            <Text textStyle="h1">Forgot Password</Text>
            <Text mt={4} textStyle="p2" color="black.60">
            Enter your email address for which account you want to reset your password.
            </Text>
  
            <Formik
              initialValues={{
                email: "",
                password: "",
               
              }}
              onSubmit={(values) => {
                console.log(values);
              }}
              validationSchema={forgotValidationSchema}
            >
             {()=>(
               <Form>
               <Stack mt={10} spacing={6}>
                
                
                 <Field name="email" >
                    {({ field, meta }) => (
                      <FormControl isInvalid={(meta.error && meta.touched)}>
                        <FormLabel htmlFor='email'>Email:</FormLabel>
                        <Input name="email" type="email" {...field} />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
  
               
               
                           
                <Link to="/signup"> <Button mt="3" w="full" variant="outline" type="submit">Reset Password</Button></Link>
                 
               </Stack>
             </Form>
             )}
            </Formik>
          </Card>
        </Center>
      </Container>
    );
  };
  
  export default ForgotPassword;
  