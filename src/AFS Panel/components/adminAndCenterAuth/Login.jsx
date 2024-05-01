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
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { object, string } from "yup";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/FirebaseConfig";
import { Formik, Form, Field } from "formik";

const loginValidationSchema = object({
  email: string().email().required("Email is Required"),
  password: string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Login = ({ title }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signin = async (values) => {
    setLoading(true);
    try {
      const result = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      localStorage.setItem("user", JSON.stringify(result));
      toast.success("Signin Successfully", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      const admin = JSON.parse(localStorage.getItem("user"));
      if (admin && admin.user.email === "sanjeevcse2k23@gmail.com") {
        navigate("/dashboard");
      } else {
        navigate("/franchise-dashboard");
      }
      setLoading(false);
    } catch (error) {
      let errorMessage = "Invalid email or password";
      if (
        error.code === "auth/user-not-found" ||
        error.code === "auth/wrong-password"
      ) {
        errorMessage = "Invalid email or password";
      }
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setLoading(false);
    }
  };

  return (
    <Container>
      <Center minH="100vh">
        <Card
          p={6}
          borderRadius="16px"
          w="456px"
          border="2px solid #d4cfcf"
          position="relative"
        >
          {/* {loading && <Loader />} */}
          <Text textStyle="h1"> {title} </Text>
          <Text mt={4} textStyle="p2" color="black.60">
            Enter your credentials to access the account.
          </Text>

          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={signin}
            validationSchema={loginValidationSchema}
          >
            {() => (
              <Form>
                <Stack mt={8} spacing={6}>
                  <Field name="email">
                    {({ field, meta }) => (
                      <FormControl isInvalid={meta.error && meta.touched}>
                        <FormLabel htmlFor="email">Email:</FormLabel>
                        <Input
                          {...field}
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                        />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field name="password">
                    {({ field, meta }) => (
                      <FormControl isInvalid={meta.error && meta.touched}>
                        <FormLabel htmlFor="password">Password:</FormLabel>
                        <Input
                          {...field}
                          id="password"
                          type="password"
                          placeholder="Enter your password"
                        />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <HStack justifyContent="space-between">
                    <Checkbox defaultChecked>Remember me</Checkbox>

                    <Link to="/forgot-password">
                      <Text color="purple.600">Forgot Password?</Text>
                    </Link>
                  </HStack>

                  <Box>
                    <Button
                      type="submit"
                      isLoading={loading}
                      loadingText="Logging in..."
                      colorScheme="blue"
                      w="full"
                    >
                      Log In
                    </Button>
                    <Link to="/">
                      <Button
                        mt="3"
                        w="full"
                        colorScheme="red"
                        variant="outline"
                        type="submit"
                      >
                        Cancel
                      </Button>
                    </Link>
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

export default Login;
