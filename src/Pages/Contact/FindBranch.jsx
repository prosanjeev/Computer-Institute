import {
  Box,
  Card,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  Stack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Divider,
} from "@chakra-ui/react";
import PageTitle from "../../components/PagesComponents/PageTitleSection/PageTitle";
import { object, string } from "yup";
import { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import data from "../../components/state-wise-cities-data/data";
import { collection, query, where, getDocs } from "firebase/firestore";
import { fireDB } from "../../AFS Panel/firebase/FirebaseConfig";

const franchiseValidationSchema = object({
  state: string(),
  district: string(),
});

const FindBranch = () => {
  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [franchiseData, setFranchiseData] = useState([]);
  const [searchResult, setSearchResult] = useState("");

  useEffect(() => {
    setCities(data.cities[selectedState] || []);
  }, [selectedState]);

  async function handleSearch() {
    const franchiseDataRef = collection(fireDB, "franchiseData");
    const q = query(
      franchiseDataRef,
      where("state", "==", selectedState),
      where("district", "==", selectedCity)
    );
    const querySnapshot = await getDocs(q);
    const fetchedFranchises = [];
    querySnapshot.forEach((doc) => {
      fetchedFranchises.push({ id: doc.id, ...doc.data() });
    });
    setFranchiseData(fetchedFranchises);
  
    if (fetchedFranchises.length > 0) {
      setSearchResult("Data found");
    } else {
      setSearchResult("Data not found");
    }
  }
  

  function handleStateChange(event) {
    const newState = event.target.value;
    setSelectedState(newState);
    setSelectedCity("");
  }

  function handleCityChange(event) {
    const newCity = event.target.value;
    setSelectedCity(newCity);
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
  ];

  return (
    <>
      <PageTitle pagetitle="FIND YOUR NEAREST BRANCH" />

      <Box>
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
            <Formik
              initialValues={{
                state: "",
                district: "",
              }}
              validationSchema={franchiseValidationSchema}
            >
              {({ values, setFieldValue }) => (
                <Form>
                  <Stack mt={10} spacing={6}>
                    <SimpleGrid columns={2} px={7} columnGap={4} rowGap={4}>
                      {CenterInformation.map((list, index) => (
                        <Field name={list.name} key={index}>
                          {({ field, meta }) => (
                            <FormControl
                              isInvalid={meta.error && meta.touched}
                              
                            >
                              <FormLabel htmlFor={list.name}>
                                {list.label}
                              </FormLabel>
                              {list.type === "select" ? (
                                <Select fontSize='20px'
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
                                  readOnly={list.readOnly} // Add the readOnly attribute here
                                  {...field}
                                />
                              )}
                              <FormErrorMessage>
                                {meta.error}
                              </FormErrorMessage>
                            </FormControl>
                          )}
                        </Field>
                      ))}
                    </SimpleGrid>
                    <Center>
                      <Button colorScheme="blue" onClick={handleSearch}>
                        Search Center
                      </Button>
                    </Center>
                   <Divider/>
                    <Table variant="striped" colorScheme="gray.200">
                      <Thead bg='gray.200'>
                        <Tr>
                          <Th>Sr. No.</Th>
                          <Th>Centre Code</Th>
                          <Th>Centre Name</Th>
                          <Th>Centre Head</Th>
                          <Th>Address</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {franchiseData.map((franchise, index) => (
                          <Tr key={franchise.id}>
                            <Td>{index + 1}</Td>
                            <Td>{franchise.centerId}</Td>
                            <Td>{franchise.centerName}</Td>
                            <Td>{franchise.directorName}</Td>
                            <Td>{franchise.centerPlace}, {franchise.policestation}</Td>
                          </Tr>
                        ))}
                      </Tbody>
                    </Table>
                  </Stack>
                </Form>
              )}
            </Formik>
          </Card>
        </Center>
      </Box>
    </>
  );
};

export default FindBranch;
