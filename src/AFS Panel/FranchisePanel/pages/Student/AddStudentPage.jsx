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
import { collection, addDoc, where, query, getDocs } from "firebase/firestore";
import data from "../../../../components/state-wise-cities-data/data";
import { fireDB, storage } from "../../../firebase/FirebaseConfig";
import { StPersonalInformation, studentCradesial } from "./data/stFormData";
import TitleBox from "../../../components/components/TitleBox";
import { toast } from "react-toastify";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import FranchiseDashboardLayout from "../../components/FranchiseDashboardLayout";
import { useSelector } from "react-redux";
import { selectUserId } from "../../../redux/franchise/authSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { studentValidationSchema } from "./schema/studentSchema";

const AddStudentPage = () => {
  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [photoFile, setPhotoFile] = useState(null); // State to hold logo file
  const [signFile, setSignFile] = useState(null); // State to hold signature file
  // const [centerId, setCenterId] = useState(""); // State to hold the centerId
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setCities(data.cities[selectedState] || []);
    setSelectedCity("");
  }, [selectedState, selectedCity]);

  const centerId = useSelector(selectUserId);
  console.log(centerId);

  function handleStateChange(event) {
    const newState = event.target.value;
    setSelectedState(newState);
    setSelectedCity(""); //
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

    {
      label: "Student Photo",
      name: "studentPhoto",
      type: "file",
    },
    {
      label: "Student Signature",
      name: "studentSignature",
      type: "file",
    },
  ];

  const onSubmit = async (values) => {
    try {
      // Check if the username is available
      const usernameQuery = query(
        collection(fireDB, "students"),
        where("userName", "==", values.userName)
      );
      const usernameQuerySnapshot = await getDocs(usernameQuery);
      if (!usernameQuerySnapshot.empty) {
        toast.error("Username already exists");
        return; // Stop execution if username is not available
      }

      const studentDataRef = collection(fireDB, "students");
      console.log(studentDataRef);
      // Retrieve all documents from the `franchiseData` collection
      const studentDataSnapshot = await getDocs(studentDataRef);

      // Calculate the next center ID based on the total number of franchises
      const baseValue = 100;
      const totalStudents = studentDataSnapshot.size;
      const nextStudentId = `MTECHSTU${baseValue + totalStudents}`;
      // Use `nextCenterId` for your further logic

      // Upload logo file to Firebase Storage
      let photoUrl = "";
      if (photoFile) {
        const photoRef = ref(storage, `students/${values.userName}/photo`);
        await uploadBytes(photoRef, photoFile);
        // Get download URL
        photoUrl = await getDownloadURL(photoRef);
      }

      // Upload signature file to Firebase Storage
      let signUrl = "";
      if (signFile) {
        const signatureRef = ref(
          storage,
          `students/${values.userName}/signature`
        );
        await uploadBytes(signatureRef, signFile);
        signUrl = await getDownloadURL(signatureRef);
      }

      const studentRef = await addDoc(collection(fireDB, "students"), {
        studentId: nextStudentId, // Use the new centerId
        createdAt: new Date().toISOString(),
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
        photoUrl: photoUrl, // Add Photo URL to Firestore
        signUrl: signUrl, // Add signature URL to Firestore
        franchiseId: centerId,
      });
      toast.success("New Student Added ", studentRef.id);
      navigate("/course-selection", {
        state: { franchiseId: centerId, studentId: studentRef.id },
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Philosopher:ital,wght@0,400;0,700;1,400;1,700&display=swap');
      </style>

      <FranchiseDashboardLayout title="Add New Student">
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
                Student Registration Form
              </Text>
            </Box>

            <Formik
              initialValues={{
                studentName: "",
                gender: "",
                fatherName: "",
                motherName: "",
                primaryPhone: "",
                email: "",
                aadharNumber: "",
                dateOfBirth: "",
                state: "",
                district: "",
                policeStation: "",
                pinCode: "",
                postOffice: "",
                village: "",
                studentPhoto: null,
                studentSignature: null,
                userName: "",
                password: "",
              }}
              onSubmit={onSubmit}
              validationSchema={studentValidationSchema}
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
                                <>
                                  {list.name === "studentPhoto" ? (
                                    <input
                                      type="file"
                                      accept="image/*" // Accept only image files
                                      onChange={(e) => {
                                        setFieldValue(
                                          "studentPhoto",
                                          e.currentTarget.files[0]
                                        );
                                        setPhotoFile(e.target.files[0]);
                                      }} // Update logo file state
                                    />
                                  ) : list.name === "studentSignature" ? (
                                    <input
                                      type="file"
                                      accept="image/*" // Accept only image files
                                      onChange={(e) => {
                                        setFieldValue(
                                          "studentSignature",
                                          e.currentTarget.files[0]
                                        );
                                        setSignFile(e.target.files[0]);
                                      }} // Update signature file state
                                    />
                                  ) : (
                                    <Input
                                      bgColor="black.5"
                                      name={list.name}
                                      type={list.type}
                                      readOnly={list.readOnly} // Add the readOnly attribute here
                                      {...field}
                                    />
                                  )}
                                </>
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
                      Add New Center
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

export default AddStudentPage;
