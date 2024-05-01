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
import { Link, useNavigate } from "react-router-dom";
import { object, string } from "yup";
import { fireDB } from "../../../firebase/FirebaseConfig";
import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { collection, getDocs, query, where } from "firebase/firestore";
import { login } from "../../../redux/franchise/authSlice";
import { toast } from "react-toastify";

const loginValidationSchema = object({
  userName: string().required("Email is Required"),
  password: string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const FranchiseLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const ref = collection(fireDB, "franchiseData");

  const handleLogin = async (initialValues, { setSubmitting }) => {
    try {
      const q = query(
        ref,
        where("userName", "==", initialValues.userName),
        where("password", "==", initialValues.password)
      );
      const querySnapshot = await getDocs(q);
      if (querySnapshot.size === 1) {
        // console.log("Document Snapshot:", querySnapshot.docs[0].data());

        // console.log("show",querySnapshot)
        // const centerId = querySnapshot.docs[0].data().centerId;
        const userId = querySnapshot.docs[0].id; // Assuming the userId is the Firestore document ID
        // console.log("uid", userId)
        dispatch(login({ userId }));
        navigate("/franchise-dashboard");
        localStorage.setItem("isLoggedIn", "true");
        toast.success("Login successful!");
        // console.log("Login successful!");
      } else {
        toast.error("Login failed: User not found or incorrect password.");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
    setSubmitting(false);
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
          <Text textStyle="h1"> Center Login </Text>
          <Text mt={4} textStyle="p2" color="black.60">
            Enter your credentials to access the account.
          </Text>

          <Formik
            initialValues={{
              userName: "",
              password: "",
            }}
            onSubmit={handleLogin}
            validationSchema={loginValidationSchema}
          >
            {(formikProps) => (
              <Form>
                <Stack mt={8} spacing={6}>
                  <FormControl
                    isInvalid={
                      formikProps.errors.userName &&
                      formikProps.touched.userName
                    }
                  >
                    <FormLabel htmlFor="userName">UserName:</FormLabel>
                    <Input
                      id="userName"
                      type="text"
                      placeholder="Enter your username"
                      {...formikProps.getFieldProps("userName")}
                    />
                    <FormErrorMessage>
                      {formikProps.errors.userName}
                    </FormErrorMessage>
                  </FormControl>

                  <FormControl
                    isInvalid={
                      formikProps.errors.password &&
                      formikProps.touched.password
                    }
                  >
                    <FormLabel htmlFor="password">Password:</FormLabel>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      {...formikProps.getFieldProps("password")}
                    />
                    <FormErrorMessage>
                      {formikProps.errors.password}
                    </FormErrorMessage>
                  </FormControl>

                  <HStack justifyContent="space-between">
                    <Checkbox defaultChecked>Remember me</Checkbox>

                    <Link to="/forgot-password">
                      <Text color="purple.600">Forgot Password?</Text>
                    </Link>
                  </HStack>

                  <Box>
                    <Button
                      type="submit"
                      isLoading={formikProps.isSubmitting}
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

export default FranchiseLogin;
