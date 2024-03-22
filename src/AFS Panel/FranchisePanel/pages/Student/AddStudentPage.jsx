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
import { object, string, number } from "yup";
import {
  collection,
  addDoc,
  updateDoc,
  getDoc,
  doc,
  setDoc,
  where,
  query,
  getDocs,
} from "firebase/firestore";
import data from "../../../../components/state-wise-cities-data/data";
import { fireDB, storage } from "../../../firebase/FirebaseConfig";
import { StPersonalInformation, studentCradesial } from "./data/stFormData";
import TitleBox from "../../../components/components/TitleBox";
import { toast } from "react-toastify";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import FranchiseDashboardLayout from "../../components/FranchiseDashboardLayout";
import { useSelector } from "react-redux";
import { selectUserId } from "../../../redux/slice/franchise/authSlice";

const franchiseValidationSchema = object({
  studentName: string()
    .required("Center Name is Required")
    .max(30, "Student Name must be at most 30 characters"),
  fatherName: string()
    .required("Father's Name is Required")
    .max(30, "Student Name must be at most 30 characters"),
  motherName: string()
    .required("Mother's Name is Required")
    .max(30, "Student Name must be at most 30 characters"),
  gender: string().required("Gender Name is Required"),
  primaryPhone: number()
    .required("Primary Phone is Required")
    .test(
      "len",
      "Must be exactly 10 digits",
      (val) => val && val.toString().length === 10
    ),
    secondaryPhone: number()
    .required("Primary Phone is Required")
    .test(
      "len",
      "Must be exactly 10 digits",
      (val) => val && val.toString().length === 10
    ),
  aadharNumber: number()
    .required("Aadhar Number is Required")
    .test(
      "len",
      "Must be exactly 12 digits",
      (val) => val && val.toString().length === 12
    ),
  email: string().email().required("Email is Required"),
  state: string(),
  district: string(),
});

const AddStudentPage = () => {
  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [logoFile, setLogoFile] = useState(null); // State to hold logo file
  const [signFile, setSignFile] = useState(null); // State to hold signature file
  // const [centerId, setCenterId] = useState(""); // State to hold the centerId

  useEffect(() => {
    setCities(data.cities[selectedState] || []);
    setSelectedCity("");
  }, [selectedState, selectedCity]);

  const centerId = useSelector(selectUserId);
  console.log(centerId) 

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
      name: "policestation",
      type: "text",
    },
    {
      label: "Post Office",
      name: "postOffice",
      type: "text",
    },
    {
      label: "Pin Code",
      name: "pincode",
      type: "text",
    },
    {
      label: "Village",
      name: "centerplace",
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
        where("username", "==", values.username)
      );
      const usernameQuerySnapshot = await getDocs(usernameQuery);
      if (!usernameQuerySnapshot.empty) {
        toast.error("Username already exists");
        return; // Stop execution if username is not available
      }

      // Proceed with adding the new center
      const docRef = doc(fireDB, "students", "studentId");
      const docSnap = await getDoc(docRef);
      let currentStudentId = 0;
      if (docSnap.exists()) {
        currentStudentId = docSnap.data().value;
      } else {
        // If the centerId document doesn't exist, create it with an initial value of 0
        await setDoc(docRef, { value: 0 });
      }

      // Increment the centerId
      const nextStudentId = `MTECH${currentStudentId + 1}`;

      // Update the centerId in Firestore
      await updateDoc(docRef, { value: currentStudentId + 1 });

      // Upload logo file to Firebase Storage
      let logoUrl = "";
      if (logoFile) {
        const logoRef = ref(
          storage,
          `students/${values.centername}-${logoFile.name}/photo`
        );
        await uploadBytes(logoRef, logoFile);
        // Get download URL
        logoUrl = await getDownloadURL(logoRef);
      }

      // Upload signature file to Firebase Storage
      let signUrl = "";
      if (signFile) {
        const signatureRef = ref(
          storage,
          `students/${values.centername}-${signFile.name}/signature`
        );
        // await signRef.put(signFile);
        // signUrl = await signRef.getDownloadURL();
        await uploadBytes(signatureRef, signFile);
        signUrl = await getDownloadURL(signatureRef);
      }
      const franchiseDocRef = await addDoc(
        collection(fireDB, "students"),
        {
          studentId: nextStudentId, // Use the new centerId
          createdAt: new Date().toISOString(),
          studentName: values.studentName,
          fatherName: values.fatherName,
          motherName: values.motherName,
          gender: values.gender,
          primaryphone: values.primaryphone,
          wathsappphone: values.wathsappphone,
          email: values.email,
          state: values.state,
          district: values.district || "",
          policestation: values.policestation,
          pincode: values.pincode,
          village: values.centerplace,
          username: values.username,
          password: values.password,
          studentPhotoUrl: logoUrl, // Add logo URL to Firestore
          signUrl: signUrl, // Add signature URL to Firestore
          franchiseId:centerId,
        }
      );
      toast.success("New Center Added ", franchiseDocRef.id);
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
                directorname: "",
                gender: "",
                primaryphone: "",
                email: "",
                selectId: "",
                documentId: "",
                centername: "",
                officephone: "",
                policestation: "",
                pincode: "",
                centerplace: "",
                wathsappphone: "",
                state: "", // Add this line
                city: "", // Add this line
                username: "",
                password: "",
              }}
              onSubmit={onSubmit}
              validationSchema={franchiseValidationSchema}
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
                                  {list.name === "logo" ? (
                                    <input
                                      type="file"
                                      accept="image/*" // Accept only image files
                                      onChange={(e) =>
                                        setLogoFile(e.target.files[0])
                                      } // Update logo file state
                                    />
                                  ) : list.name === "signature" ? (
                                    <input
                                      type="file"
                                      accept="image/*" // Accept only image files
                                      onChange={(e) =>
                                        setSignFile(e.target.files[0])
                                      } // Update signature file state
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
