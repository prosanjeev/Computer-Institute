import React, { useEffect, useState } from "react";
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
import { doc, updateDoc, getDoc } from "firebase/firestore";
import data from "../../../../components/state-wise-cities-data/data";
import { fireDB } from "../../../firebase/FirebaseConfig";
import { StPersonalInformation, studentCradesial } from "./data/stFormData";
import TitleBox from "../../../components/components/TitleBox";
import { toast } from "react-toastify";
// import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import FranchiseDashboardLayout from "../../components/FranchiseDashboardLayout";
import { useLocation, useNavigate } from "react-router-dom";
// import { studentValidationSchema } from "./schema/studentSchema";

const UpdateStudentPage = () => {
  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [studentData, setStudentData] = useState();

  const navigate = useNavigate();
  const location = useLocation();
  const studentId = location.state ? location.state.studentId : null;

  useEffect(() => {
    // Fetch branch data based on branchId
    const fetchstudentData = async () => {
      const branchDocRef = doc(fireDB, "students", studentId);
      const branchDocSnapshot = await getDoc(branchDocRef);
      if (branchDocSnapshot.exists()) {
        setStudentData(branchDocSnapshot.data());
      }
    };
    fetchstudentData();
  }, [studentId]);

  useEffect(() => {
    if (studentData && studentData.district) {
      setSelectedState([studentData.state]);
      setCities([studentData.district]);
    }
  }, [studentData]);

  useEffect(() => {
    setCities(data.cities[selectedState] || []);
    setSelectedCity("");
  }, [selectedState, selectedCity]);

  function handleStateChange(event) {
    const newState = event.target.value;
    setSelectedState(newState);
    setSelectedCity("");
    console.log("Selected State:", newState);
  }

  function handleCityChange(event) {
    const newCity = event.target.value;
    setSelectedCity(newCity);
    console.log("Selected City:", newCity);
  }

  const CenterInformation = [
    {
      label: "Select State",
      name: "state",
      type: "select",
      options: data.states,
      onChange: handleStateChange,
    },
    {
      label: "Select City",
      name: "district",
      type: "select",
      options: cities,
      onChange: handleCityChange,
    },
    {
      label: "Police Station",
      name: "policeStation",
      type: "text",
    },
    {
      label: "Pin Code",
      name: "pinCode",
      type: "text",
    },
    {
      label: "Post Office",
      name: "postOffice",
      type: "text",
    },
    {
      label: "Village",
      name: "village",
      type: "text",
    },
  ];

  const onSubmit = async (values) => {
    try {
      // Upload logo file to Firebase Storage
      //   let photoUrl = studentData.photoUrl;
      //   if (photoFile) {
      //     const photoRef = ref(storage, `students/${values.userName}/photo`);
      //     await uploadBytes(photoRef, photoFile);
      //     // Get download URL
      //     photoUrl = await getDownloadURL(photoRef);
      //   }

      const studentRef = doc(fireDB, "students", studentId);
      await updateDoc(studentRef, {
        studentName: values.studentName,
        gender: values.gender,
        fatherName: values.fatherName,
        motherName: values.motherName,
        primaryPhone: values.primaryPhone,
        email: values.email,
        aadharNumber: values.aadharNumber,
        dateOfBirth: values.dateOfBirth,
        state: values.state,
        district: values.district || "",
        policeStation: values.policeStation,
        postOffice: values.postOffice,
        pinCode: values.pinCode,
        village: values.village,
        userName: values.userName,
        password: values.password,
      });
      toast.success("Student Updated");
      navigate("/students-list"); // Redirect to students page after updating
    } catch (e) {
      console.error("Error updating student: ", e);
    }
  };

  return (
    <>
      <FranchiseDashboardLayout title="Update Student">
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
          >
            <Box
              bgColor="green"
              w="400px"
              p="12px 16px"
              borderRadius="0 50px 50px 0"
            >
              <Text color="white" textStyle="h1">
                Student Update Form
              </Text>
            </Box>

            <Formik
              initialValues={{
                studentName: studentData?.studentName || "",
                gender: studentData?.gender || "",
                fatherName: studentData?.fatherName || "",
                motherName: studentData?.motherName || "",
                primaryPhone: studentData?.primaryPhone || "",
                email: studentData?.email || "",
                aadharNumber: studentData?.aadharNumber || "",
                dateOfBirth: studentData?.dateOfBirth || "",
                state: studentData?.state || "",
                district: studentData?.district || "",
                policeStation: studentData?.policeStation || "",
                pinCode: studentData?.pinCode || "",
                postOffice: studentData?.postOffice || "",
                village: studentData?.village || "",
                userName: studentData?.userName || "",
                password: studentData?.password || "",
              }}
              onSubmit={onSubmit}
              // validationSchema={franchiseValidationSchema}
              enableReinitialize={true} // Add this line
            >
              {({ values, setFieldValue }) => (
                <Form>
                  <Stack mt={10} spacing={6}>
                    <TitleBox title=" Personal Information" />

                    <SimpleGrid columns={2} px={7} columnGap={4} rowGap={4}>
                      {StPersonalInformation.map((list, index) => (
                        <Field name={list.name} key={index}>
                          {({ field, meta }) => (
                            <FormControl isInvalid={meta.error && meta.touched}>
                              <FormLabel htmlFor={list.name}>
                                {list.label}
                              </FormLabel>
                              {list.type === "select" ? (
                                <Select
                                  bgColor="black.5"
                                  name={list.name}
                                  {...field}
                                  placeholder={` ${list.label}`}
                                >
                                  {list.options.map((option) => (
                                    <option key={option} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                </Select>
                              ) : (
                                <Input
                                  bgColor="black.5"
                                  name="centername"
                                  type={list.type}
                                  {...field}
                                />
                              )}
                              <FormErrorMessage>{meta.error}</FormErrorMessage>
                            </FormControl>
                          )}
                        </Field>
                      ))}
                    </SimpleGrid>

                    <TitleBox title=" Address" />
                    <SimpleGrid columns={2} px={7} columnGap={4} rowGap={4}>
                      {CenterInformation.map((list, index) => (
                        <Field name={list.name} key={index}>
                          {({ field, meta }) => (
                            <FormControl isInvalid={meta.error && meta.touched}>
                              <FormLabel htmlFor={list.name}>
                                {list.label}
                              </FormLabel>
                              {list.type === "select" ? (
                                <Select
                                  bgColor="black.5"
                                  name={list.name}
                                  {...field} // Set the value prop to the field's value
                                  onChange={(e) => {
                                    field.onChange(e); // Update the form field value
                                    if (list.onChange) {
                                      list.onChange(e); // Call the custom onChange handler if provided
                                    }
                                  }}
                                  placeholder={` ${list.label}`}
                                >
                                  {list.options.map((option) => (
                                    <option key={option} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                </Select>
                              ) : (
                                <Input
                                  bgColor="black.5"
                                  name={list.name}
                                  type={list.type}
                                  readOnly={list.readOnly}
                                  {...field}
                                />
                              )}
                              <FormErrorMessage>{meta.error}</FormErrorMessage>
                            </FormControl>
                          )}
                        </Field>
                      ))}
                    </SimpleGrid>

                    <TitleBox title="Login Information" />

                    <SimpleGrid columns={2} px={7} columnGap={4} rowGap={4}>
                      {studentCradesial.map((list, index) => (
                        <Field name={list.name} key={index}>
                          {({ field, meta }) => (
                            <FormControl isInvalid={meta.error && meta.touched}>
                              <FormLabel htmlFor={list.name}>
                                {list.label}
                              </FormLabel>
                              <Input
                                bgColor="black.5"
                                name={list.name}
                                type={list.type}
                                readOnly={list.readOnly}
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
                      Update Student
                    </Button>
                  </Stack>
                </Form>
              )}
            </Formik>
          </Card>
        </Center>
      </FranchiseDashboardLayout>
    </>
  );
};

export default UpdateStudentPage;
