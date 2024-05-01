import {
  Box,
  Flex,
  FormControl,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  Textarea,
  Button,
  Grid,
  InputLeftAddon,
  FormErrorMessage,
  Divider,
} from "@chakra-ui/react";
import HeadingWithHr from "../../components/PagesComponents/HeadingWithHr/HeadingWithHr";
import PageTitle from "../../components/PagesComponents/PageTitleSection/PageTitle";
import { MdOutlineMail } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineSubtitles } from "react-icons/md";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { addDoc, collection } from "firebase/firestore";
import { fireDB } from "../../AFS Panel/firebase/FirebaseConfig";
import { lists } from "./components/data";

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(5, "Name must be at least 5 characters"),
  phone: Yup.number()
    .required("Primary Phone is Required")
    .test(
      "len",
      "Must be exactly 10 digits",
      (val) => val && val.toString().length === 10
    ),
  email: Yup.string().email("Invalid email").required("Email is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string()
    .required("Message is required")
    .max(250, "Message must be at most 250 characters"),
});

const ContactUs = () => {
  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      // Store the form data in Firestore
      const docRef = await addDoc(collection(fireDB, "contactUsQuery"), {
        name: values.name,
        phone: values.phone,
        email: values.email,
        subject: values.subject,
        message: values.message,
        createdAt: new Date().toISOString(),
      });
      console.log("Document written with ID: ", docRef.id);

      // Reset the form after successful submission
      resetForm();
    } catch (error) {
      console.error("Error adding document: ", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Box>
        <PageTitle pagetitle="CONTACT US" />
        <Box textAlign="center" mb="-14" mt={5}>
          <Text
            bgGradient="linear(to-l, #7928CA,#FF0080)"
            bgClip="text"
            fontSize="5xl"
            fontWeight="extrabold"
          >
            We are just a phone call away !
          </Text>
        </Box>
        <HeadingWithHr
          // heading="We are just a phone call away !"
          text="Feel free to write us about any of your concern."
        />
      </Box>

      {/* ----------------------- */}
      <Flex
        w={{ lg: "1200px", base: "100vw" }}
        mx="auto"
        justifyContent="space-around"
        mb="80px"
        flexDirection={{ base: "column", lg: "row" }}
      >
        <Stack
          fontWeight="700"
          w={{ lg: "500px", base: "100%" }}
          spacing={6}
          p={6}
        >
          {lists.map((list) => (
            <HStack key={list.title} align="start" spacing={6}>
              <Icon
                as={list.icon}
                boxSize={14}
                border="1px solid gray"
                borderRadius="5"
                padding={3}
              />
              <Stack spacing={1}>
                <Text fontSize="18px">{list.title}</Text>
                <Text
                  fontSize="16px"
                  fontWeight={400}
                  w={{ lg: "300px", base: "240px" }}
                >
                  {list.text}
                </Text>
              </Stack>
            </HStack>
          ))}
        </Stack>

        <Formik
          initialValues={{
            name: "",
            phone: "",
            email: "",
            subject: "",
            message: "",
          }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <Divider display={{ md: "none" }} />
              <Grid
                templateColumns={{ md: "repeat(2, 1fr)", base: "span 1" }}
                gap={5}
                width={{ lg: "600px", base: "80%" }}
                mx="auto"
                mt={{ lg: "0", base: "5" }}
              >
                <Field name="name">
                  {({ field, meta }) => (
                    <FormControl isInvalid={meta.error && meta.touched}>
                      <InputGroup>
                        <InputLeftElement pointerEvents="none">
                          <Icon as={FaRegUser} color="gray.300" />
                        </InputLeftElement>
                        <Input
                          {...field}
                          type="text"
                          placeholder="Enter Your Name"
                        />
                      </InputGroup>
                      <FormErrorMessage>{meta.error}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="phone">
                  {({ field, meta }) => (
                    <FormControl isInvalid={meta.error && meta.touched}>
                      <InputGroup>
                        <InputLeftAddon>+91</InputLeftAddon>
                        <Input
                          {...field}
                          type="tel"
                          placeholder="phone number"
                        />
                      </InputGroup>
                      <FormErrorMessage>{meta.error}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="email">
                  {({ field, meta }) => (
                    <FormControl
                      isInvalid={meta.error && meta.touched}
                      gridColumn={{ md: "span 2", base: "span 1" }}
                    >
                      <InputGroup>
                        <InputLeftElement pointerEvents="none">
                          <Icon as={MdOutlineMail} color="gray.300" />
                        </InputLeftElement>
                        <Input
                          {...field}
                          type="email"
                          placeholder="Enter your Mail"
                        />
                      </InputGroup>
                      <FormErrorMessage>{meta.error}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="subject">
                  {({ field, meta }) => (
                    <FormControl
                      isInvalid={meta.error && meta.touched}
                      gridColumn={{ md: "span 2", base: "span 1" }}
                    >
                      <InputGroup>
                        <InputLeftElement pointerEvents="none">
                          <Icon as={MdOutlineSubtitles} color="gray.300" />
                        </InputLeftElement>
                        <Input
                          {...field}
                          type="text"
                          placeholder="Enter your message Subject"
                        />
                      </InputGroup>
                      <FormErrorMessage>{meta.error}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="message">
                  {({ field, meta }) => (
                    <FormControl
                      isInvalid={meta.error && meta.touched}
                      gridColumn={{ md: "span 2", base: "span 1" }}
                    >
                      <InputGroup>
                        <Textarea
                          {...field}
                          placeholder="Enter your Message"
                          rows={8}
                          gridColumn="span 2"
                        />
                      </InputGroup>
                      <FormErrorMessage>{meta.error}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                {/* // Repeat the same for other fields (phone, email, subject, message) ... */}
                <Button
                  type="submit"
                  colorScheme="blue"
                  gridColumn={{ md: "span 2", base: "span 1" }}
                  isLoading={isSubmitting}
                >
                  Submit
                </Button>
              </Grid>
            </Form>
          )}
        </Formik>

        {/* ----------------------- */}
      </Flex>
      <Box borderTop="1px solid gray">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.842987671033!2d77.60476917484044!3d12.917811187392576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15aa6848217f%3A0xfe638c503aad819a!2sPatna%20Wale!5e0!3m2!1sen!2sin!4v1704164998356!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Box>
    </>
  );
};

export default ContactUs;
