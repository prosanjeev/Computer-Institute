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
import DashboardLayout from "../../../components/DashboardLayout";
import { collection, addDoc, where, query, getDocs } from "firebase/firestore";
import data from "../../../../../components/state-wise-cities-data/data";
import { fireDB, storage } from "../../../../firebase/FirebaseConfig";
import { PersonalInformation, UserCradesial } from "./data/data";
import TitleBox from "../../../../components/components/TitleBox";
import { toast } from "react-toastify";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { franchiseValidationSchema } from "../components/schema";

const AddBranch = () => {
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
      label: "Center Name",
      name: "centerName",
      type: "text",
    },
    {
      label: "Office Phone",
      name: "officePhone",
      type: "text",
    },
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
      label: "Center Place",
      name: "centerPlace",
      type: "text",
    },
    {
      label: "Wathsapp No.",
      name: "wathsappPhone",
      type: "text",
    },
    {
      label: "Center Logo",
      name: "logo",
      type: "file",
    },
    {
      label: "Center Director Signature",
      name: "signature",
      type: "file",
    },
  ];

  const onSubmit = async (values) => {
    try {
      // Check if the username is available
      const usernameQuery = query(
        collection(fireDB, "franchiseData"),
        where("userName", "==", values.userName)
      );
      const usernameQuerySnapshot = await getDocs(usernameQuery);
      if (!usernameQuerySnapshot.empty) {
        toast.error("Username already exists");
        return; // Stop execution if username is not available
      }

      // // Proceed with adding the new center
      //   const docRef = doc(fireDB, "franchiseData", "centerId");
      //   const docSnap = await getDoc(docRef);
      //   let currentCenterId = 0;
      //   if (docSnap.exists()) {
      //     currentCenterId = docSnap.data().value;
      //   } else {
      //     // If the centerId document doesn't exist, create it with an initial value of 0
      //     await setDoc(docRef, { value: 0 });
      //   }

      //   // Increment the centerId
      //   const nextCenterId = `MTECH${currentCenterId + 1}`;

      // // Update the centerId in Firestore
      // await updateDoc(docRef, { value: currentCenterId + 1 });

      // Get a reference to the `franchiseData` collection
      const franchiseDataRef = collection(fireDB, "franchiseData");

      // Retrieve all documents from the `franchiseData` collection
      const franchiseDataSnapshot = await getDocs(franchiseDataRef);

      // Calculate the next center ID based on the total number of franchises
      const baseValue = 100;
      const totalFranchises = franchiseDataSnapshot.size;
      const nextCenterId = `MTECH${baseValue + totalFranchises}`;
      // Use `nextCenterId` for your further logic

      // Upload logo file to Firebase Storage
      let logoUrl = "";
      if (logoFile) {
        const logoRef = ref(storage, `franchise/${values.centerName}/logo`);
        await uploadBytes(logoRef, logoFile);
        // Get download URL
        logoUrl = await getDownloadURL(logoRef);
      }

      // Upload signature file to Firebase Storage
      let signUrl = "";
      if (signFile) {
        const signatureRef = ref(
          storage,
          `franchise/${values.centerName}/signature`
        );
        // await signRef.put(signFile);
        // signUrl = await signRef.getDownloadURL();
        await uploadBytes(signatureRef, signFile);
        signUrl = await getDownloadURL(signatureRef);
      }
      const franchiseDocRef = await addDoc(
        collection(fireDB, "franchiseData"),
        {
          centerId: nextCenterId, // Use the new centerId
          createdAt: new Date().toISOString(),
          directorName: values.directorName,
          gender: values.gender,
          primaryPhone: values.primaryPhone,
          email: values.email,
          documentType: values.documentType,
          documentNumber: values.documentNumber,
          centerName: values.centerName,
          officePhone: values.officePhone,
          state: values.state,
          district: values.district || "",
          policeStation: values.policeStation,
          pinCode: values.pinCode,
          centerPlace: values.centerPlace,
          wathsappPhone: values.wathsappPhone,
          userName: values.userName,
          password: values.password,
          logoUrl: logoUrl, // Add logo URL to Firestore
          signUrl: signUrl, // Add signature URL to Firestore
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
                directorName: "",
                gender: "",
                primaryPhone: "",
                email: "",
                documentType: "",
                documentNumber: "",
                centerName: "",
                officePhone: "",
                policeStation: "",
                pinCode: "",
                centerPlace: "",
                wathsappPhone: "",
                state: "", // Add this line
                district: "", // Add this line
                userName: "",
                password: "",
                logo: null,
                signature: null,
              }}
              onSubmit={onSubmit}
              validationSchema={franchiseValidationSchema}
            >
              {({ values, setFieldValue }) => (
                <Form>
                  <Stack mt={10} spacing={6}>
                    <TitleBox title=" Centre Head Information" />

                    <SimpleGrid columns={2} px={7} columnGap={4} rowGap={4}>
                      {PersonalInformation.map((list, index) => (
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

                    <TitleBox title=" Center Information" />

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
                                      onChange={(e) => {
                                        setFieldValue(
                                          "logo",
                                          e.currentTarget.files[0]
                                        );
                                        setLogoFile(e.target.files[0]);
                                      }} // Update logo file state
                                    />
                                  ) : list.name === "signature" ? (
                                    <input
                                      type="file"
                                      accept="image/*" // Accept only image files
                                      onChange={(e) => {
                                        setFieldValue(
                                          "signature",
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
                      {UserCradesial.map((list, index) => (
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
      </DashboardLayout>
    </>
  );
};

export default AddBranch;
