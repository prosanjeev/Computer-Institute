import React from "react";
import { Link, useNavigate } from "react-router-dom";
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
import { Formik, Form, Field } from "formik";
import { object, string } from "yup";
import { FaArrowLeft } from "react-icons/fa";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../../firebase/FirebaseConfig";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting }) => {
    const { email } = values;
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Check your email for the password reset link.");
      navigate("/admin-login");
    } catch (error) {
      alert(error.message);
    } finally {
      setSubmitting(false);
    }
  };

  const forgotValidationSchema = object({
    email: string().email().required("Email is Required"),
  });

  return (
    <Container>
      <Center minH="100vh">
        <Card p={6} borderRadius="16px" w="456px">
          <Link to="/franchise-login">
            <Icon as={FaArrowLeft} boxSize={6} mb={4} color="p.purple" />
          </Link>
          <Text textStyle="h1">Forgot Password</Text>
          <Text mt={4} textStyle="p2" color="black.60">
            Enter your email address for which account you want to reset your
            password.
          </Text>

          <Formik
            initialValues={{
              email: "",
            }}
            onSubmit={handleSubmit}
            validationSchema={forgotValidationSchema}
          >
            {({ isSubmitting }) => (
              <Form>
                <Stack mt={10} spacing={6}>
                  <Field name="email">
                    {({ field, meta }) => (
                      <FormControl isInvalid={meta.error && meta.touched}>
                        <FormLabel htmlFor="email">Email:</FormLabel>
                        <Input name="email" type="email" {...field} />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Button
                    mt="3"
                    w="full"
                    variant="outline"
                    type="submit"
                    isLoading={isSubmitting}
                  >
                    Reset Password
                  </Button>
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
