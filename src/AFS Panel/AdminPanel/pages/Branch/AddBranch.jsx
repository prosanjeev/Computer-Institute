import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  Center,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Field, Form, Formik } from "formik";
import { object, string, date, number } from "yup";
import DashboardLayout from "../../components/DashboardLayout";

const franchiseValidationSchema = object({
  centername: string().required("Center Name is Required"),
  directorname: string().required("Director Name is Required"),
  fathername: string().required("Father's Name is Required"),
  dob: date().required("Date of Birth is Required"),
  primaryphone: number()
    .required("Primary Phone is Required")
    .test(
      "len",
      "Must be exactly 10 digits",
      (val) => val && val.toString().length === 10
    ),
  wathsappphone: number()
    .required("Primary Phone is Required")
    .test(
      "len",
      "Must be exactly 10 digits",
      (val) => val && val.toString().length === 10
    ),
  email: string().email().required("Email is Required"),
  state: string(),
  district: string(),
});

const AddBranch = () => {
  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(""); // To store the selected city

  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
  ];
  useEffect(() => {
    setCities(getCitiesForState(selectedState));
    setSelectedCity(""); // Reset selected city when the state changes
  }, [selectedState]);
  function handleStateChange(event) {
    const newState = event.target.value;
    setSelectedState(newState);
  }
  function handleCityChange(event) {
    const newCity = event.target.value;
    setSelectedCity(newCity);
  }
  function getCitiesForState(state) {
    const cityData = {
      Bihar: [
        "Arrah",
        "Araria",
        "Aurangabad",
        "Bakhtiyarpur",
        "Begusarai",
        "Danapur",
        "Darbhanga",
        "Raxaul",
        "Saharsa",
        "Samastipur",
        "Sasaram",
        "Sheikhpura",
        "Sitamarhi",
        "Siwan",
        "Supaul",
      ],
      // ... (other states)
    };
    return cityData[state] || [];
  }
  const PersonalInformation = [
    {
      label: "Center Name",
      name: "centername",
      type: "text",
    },
    {
      label: "Director Name",
      name: "directorname",
      type: "text",
    },
    {
      label: "Father's Nmae",
      name: "fathername",
      type: "text",
    },
    {
      label: "Date of Birth",
      name: "dob",
      type: "date",
    },
    {
      label: "Primary Phone",
      name: "primaryphone",
      type: "text",
    },
    {
      label: "Email ID",
      name: "email",
      type: "email",
    },
  ];
  const CenterInformation = [
    {
      label: "Police Station",
      name: "policestation",
      type: "text",
    },
    {
      label: "Post Office",
      name: "postoffice",
      type: "text",
    },
    {
      label: "Center Place",
      name: "centerplace",
      type: "text",
    },
    {
      label: "Block",
      name: "block",
      type: "text",
    },
    {
      label: "Pin Code",
      name: "pincode",
      type: "text",
    },
    {
      label: "Wathsapp No.",
      name: "wathsappphone",
      type: "text",
    },
  ];
  const ListOfRequirements = [
    {
      label: "Center Logo",
      name: "lastqualification",
      type: "file",
    },
    {
      label: "Center Director Photo",
      name: "directorphoto",
      type: "file",
    },
    {
      label: "Center Director Signature",
      name: "directorsignature",
      type: "file",
    },
    {
      label: "Center Director Adhar Card",
      name: "aadharcard",
      type: "file",
    },
  ];

  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Philosopher:ital,wght@0,400;0,700;1,400;1,700&display=swap');
      </style>

      <DashboardLayout title="Add Center">
        <Center>
          <Card
            my={6}
            py={6}
            borderRadius="16px"
            minW={{
              base: "90vw",
              md: "100vw",
              lg: "1000px",
            }}
            fontFamily="Philosopher"
          >
            <Box
              bgColor="green"
              w="400px"
              p="12px 16px"
              borderRadius="0 50px 50px 0"
            >
              <Text color="white" textStyle="h1">
                Center Joining Form
              </Text>
            </Box>

            <Formik
              initialValues={{
                centername: "",
                directorname: "",
                fathername: "",
                dob: "",
                primaryphone: "",
                email: "",
                state: "",
                district: "",
              }}
              onSubmit={(values) => {
                console.log(values);
              }}
              validationSchema={franchiseValidationSchema}
            >
              {() => (
                <Form>
                  <Stack mt={10} spacing={6}>
                    <Box
                      as="div"
                      py={3}
                      px={4}
                      textStyle="h4"
                      color="white"
                      bgColor="#62035F"
                    >
                      Personal Information
                    </Box>
                    <SimpleGrid columns={2} px={7} columnGap={4} rowGap={4}>
                      {PersonalInformation.map((list) => (
                        <Field name={list.name}>
                          {({ field, meta }) => (
                            <FormControl isInvalid={meta.error && meta.touched}>
                              <FormLabel htmlFor={list.name}>
                                {list.label}
                              </FormLabel>
                              <Input
                                bgColor="black.5"
                                name="centername"
                                type={list.type}
                                {...field}
                              />
                              <FormErrorMessage>{meta.error}</FormErrorMessage>
                            </FormControl>
                          )}
                        </Field>
                      ))}
                    </SimpleGrid>
                    <Box
                      as="div"
                      py={3}
                      px={4}
                      textStyle="h4"
                      color="white"
                      bgColor="#62035F"
                    >
                      Center Information
                    </Box>
                    <SimpleGrid columns={2} px={7} columnGap={4} rowGap={4}>
                      <Field name="state">
                        {({ field, meta }) => (
                          <FormControl isInvalid={meta.error && meta.touched}>
                            <FormLabel htmlFor="state">State:</FormLabel>
                            <Select
                              bgColor="black.5"
                              placeholder="Select option"
                              {...field}
                              value={selectedState}
                              onChange={handleStateChange}
                            >
                              {states.map((state) => (
                                <option key={state} value={state}>
                                  {state}
                                </option>
                              ))}
                            </Select>
                            <FormErrorMessage>{meta.error}</FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>

                      <Field name="district">
                        {({ field, meta }) => (
                          <FormControl isInvalid={meta.error && meta.touched}>
                            <FormLabel htmlFor="district">District:</FormLabel>
                            <Select
                              bgColor="black.5"
                              placeholder="Select option"
                              {...field}
                              value={selectedCity} // Use selectedCity instead of cities[0]
                              disabled={cities.length === 0}
                              onChange={handleCityChange}
                            >
                              <option value="">Select City</option>
                              {cities.map((city) => (
                                <option key={city} value={city}>
                                  {city}
                                </option>
                              ))}
                            </Select>
                            <FormErrorMessage>{meta.error}</FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                    </SimpleGrid>
                    <SimpleGrid columns={2} px={7} columnGap={4} rowGap={4}>
                      {CenterInformation.map((list) => (
                        <Field name={list.name}>
                          {({ field, meta }) => (
                            <FormControl isInvalid={meta.error && meta.touched}>
                              <FormLabel htmlFor={list.name}>
                                {list.label}
                              </FormLabel>
                              <Input
                                bgColor="black.5"
                                name={list.name}
                                type={list.type}
                                {...field}
                              />
                              <FormErrorMessage>{meta.error}</FormErrorMessage>
                            </FormControl>
                          )}
                        </Field>
                      ))}
                    </SimpleGrid>

                    <Box
                      as="div"
                      py={3}
                      px={4}
                      textStyle="h4"
                      color="white"
                      bgColor="#62035F"
                    >
                      List of Requirements
                    </Box>
                    <SimpleGrid columns={2} px={7} columnGap={4} rowGap={4}>
                      {ListOfRequirements.map((list) => (
                        <Field name={list.name} key="list.name">
                          {({ field, meta }) => (
                            <FormControl isInvalid={meta.error && meta.touched}>
                              <FormLabel htmlFor={list.name}>
                                {list.label}
                              </FormLabel>
                              <Input
                                pt="5px"
                                bgColor="black.5"
                                name={list.name}
                                type={list.type}
                                {...field}
                              />
                              <FormErrorMessage>{meta.error}</FormErrorMessage>
                            </FormControl>
                          )}
                        </Field>
                      ))}
                    </SimpleGrid>

                    <Checkbox defaultChecked px={6}>
                      I agree with{" "}
                      <Text as="span" color="p.purple">
                        Terms & Conditions.
                      </Text>
                    </Checkbox>
                    <Button
                      leftIcon={<MdKeyboardDoubleArrowRight />}
                      m="10px 50px"
                      size="md"
                      type="submit"
                    >
                      Register Me
                    </Button>
                  </Stack>
                </Form>
              )}
            </Formik>
          </Card>
        </Center>
      </DashboardLayout>
    </>
  );
};

export default AddBranch;
