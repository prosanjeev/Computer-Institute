import {
  Box,
  Button,
  Card,
  Center,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import { object, string } from "yup";

const InputValidationSchema = object({
  user: string()
    .min(6, "must be 6 Charactor")
    .max(24, "max 24 Charactor")
    .required("it is required"),
});

const VerifivaticationForm = ({ title, label, onSubmitCallback }) => {
  return (
    <Container>
      <Center minH={{ md: "60vh", base: "450px" }}>
        <Card p={6} borderRadius="16px" w="456px" border="2px solid #d4cfcf">
          <Text textStyle="h1">{title} </Text>
          <Text mt={4} textStyle="p2" color="black.60">
            Enter your details to verify the docoment.
          </Text>

          <Formik
            initialValues={{
              user: "",
            }}
            onSubmit={(values) => {
              onSubmitCallback(values); // Pass form values to the parent component
            }}
            validationSchema={InputValidationSchema}
          >
            {() => (
              <Form>
                <Stack mt={8} spacing={6}>
                  <Field name="user">
                    {({ field, meta }) => (
                      <FormControl isInvalid={meta.error && meta.touched}>
                        <FormLabel htmlFor="user">{label}:</FormLabel>
                        <Input
                          name="user"
                          type="text"
                          {...field}
                          border="1px solid #d4cfcf"
                          placeholder="CIN02397G"
                        />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Box>
                    <Button w="full" type="submit" colorScheme="green">
                      Verify
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

export default VerifivaticationForm;
