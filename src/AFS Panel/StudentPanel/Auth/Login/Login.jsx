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
  import {  Field, Form, Formik } from "formik";
  import { object, string, ref } from 'yup';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { collection, getDocs, query, where } from "firebase/firestore";
import { fireDB } from "../../../firebase/FirebaseConfig";
import { toast } from "react-toastify";
import { login } from "../../../redux/student/slice/studentSlice";
  
  const loginValidationSchema = object({
    username: string().min(6, "must be 6 Charactor").required("user is required"),
    password: string().min(6, "must be 6 Charactor").required("Password is required"),
  });
  
  
  const StudentLogin = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
  
    const ref = collection(fireDB, 'students');
  
    const handleLogin = async (initialValues, { setSubmitting }) => {
      try {
        const q = query(ref, where("username", "==", initialValues.username), where("password", "==", initialValues.password));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.size === 1) {
         // console.log("Document Snapshot:", querySnapshot.docs[0].data());
  
          console.log("show",querySnapshot)
          // const centerId = querySnapshot.docs[0].data().centerId;
          const userId = querySnapshot.docs[0].id; // Assuming the userId is the Firestore document ID
          // console.log("uid", userId)
          dispatch(login({ userId }));
          navigate('/student-dashboard')
          localStorage.setItem("isLoggedIn_student", "true");
          toast.success("Login successful!")
          // console.log("Login successful!");
        } else {
          console.log("Login failed: User not found or incorrect password.");
        }
      } catch (error) {
        console.error("Error logging in:", error);
      }
      setSubmitting(false);
    };
    

    return (
      <Container>  
        <Center minH="70vh">
          <Card p={6} borderRadius="16px" w="456px" border='2px solid #d4cfcf'>
            <Text textStyle="h1">Student Login </Text>
            <Text mt={4} textStyle="p2" color="black.60">
            Enter your credentials to access the account.
            </Text>
  
            <Formik
              initialValues={{
                username: "",
                password: "",
               
              }}
              onSubmit={handleLogin}
              validationSchema={loginValidationSchema}
            >
             {()=>(
               <Form>
               <Stack mt={8} spacing={6}>
  
                 <Field name="username" >
                    {({ field, meta }) => (
                      <FormControl isInvalid={(meta.error && meta.touched)}>
                        <FormLabel htmlFor='username'>User Name:</FormLabel>
                        <Input name="username" type="text" {...field} border='1px solid #d4cfcf' />
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
                
                    {/* <Link to="/forgot-password"> <Text color="p.purple">Forgot Password?</Text></Link> */}

                 </HStack>
                 
                <Box >
                <Button w="full" type="submit">Log In</Button>
                {/* <Link to="/signup"> <Button mt="3" w="full" variant="outline" type="submit">Create New Account</Button></Link> */}
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
  
  export default StudentLogin;
  