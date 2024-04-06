import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  Center,
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
import {  doc, getDoc, updateDoc } from "firebase/firestore";
import { fireDB, storage } from "../../../firebase/FirebaseConfig";
import { toast } from "react-toastify";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import DashboardLayout from "../../components/DashboardLayout";
import TitleBox from "../../../components/components/TitleBox";
import { useLocation, useNavigate } from "react-router-dom";

const courseValidationSchema = object({
  courseCode: string().required("Course Code is Required"),
  courseName: string().required("Course Name is Required"),
  shortName: string().required("Short Name is Required"),
  categoryName: string().required("Short Name is Required"),
  duration: string().required("Short Name is Required"),
  fee: number().required("Short Name is Required"),
  syllabus: string().required("Short Name is Required"),
});

const UpdateCourse = () => {
  const [logoFile, setLogoFile] = useState(null);
  const [courseData, setCourseData] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const courseId = location.state ? location.state.courseId : null;
  useEffect(() => {
    const fetchCourseData = async () => {
      const docRef = doc(fireDB, "courses", courseId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setCourseData(docSnap.data());
      } else {
        console.log("No such document!");
      }
    };

    fetchCourseData();
  }, [courseId]);

  const CenterInformation = [
    {
      label: "Course code",
      name: "courseCode",
      placeholder: "DCA101",
      type: "text",
    },
    {
      label: "Course Name",
      name: "courseName",
      placeholder: "Diploma in Computer Application",
      type: "text",
    },
    {
      label: "Short Name",
      name: "shortName",
      placeholder: "DCA",
      type: "text",
    },
    {
      label: "Category Name",
      name: "categoryName",
      type: "select",
      options: ["Diploma", "Degree"],
    },
    {
      label: "Duration",
      name: "duration",
      type: "select",
      options: ["1 Year", "6 Month", "3 Month"],
    },
    {
      label: "Admission Charge",
      name: "fee",
      placeholder: "200",
      type: "text",
    },
    {
      label: "Syllabus",
      name: "syllabus",
      placeholder: ` Computer Hardware, Internet, MS Office, Hindi and English Typing, Windows 10, Windows 7, Account, Tally ERP9, GST, E- Learning, Computer Basic,
      Photoshop & Corel Draw`,
      type: "text",
    },
  ];

  const onSubmit = async (values) => {
    try {
      // Update logo file in Firebase Storage if a new logo is selected
      let courseUrl = courseData.coursePhotoUrl;
      if (logoFile) {
        const courseRef = ref(storage, `courses/${values.shortName}/Photo`);
        await uploadBytes(courseRef, logoFile);
        // Get download URL
        courseUrl = await getDownloadURL(courseRef);
      }

      await updateDoc(doc(fireDB, "courses", courseId), {
        courseCode: values.courseCode,
        courseName: values.courseName,
        categoryName: values.categoryName,
        shortName: values.shortName,
        duration: values.duration,
        fee: values.fee,
        syllabus: values.syllabus,
        coursePhotoUrl: courseUrl,
      });

      toast.success("Course Updated Successfully");
      navigate("/all-courses")
    } catch (e) {
      console.error("Error updating course: ", e);
    }
  };

  if (!courseData) {
    return <Text>Loading...</Text>;
  }

  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Philosopher:ital,wght@0,400;0,700;1,400;1,700&display=swap');
      </style>

      <DashboardLayout title="Update Course">
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
                Update Course Form
              </Text>
            </Box>

            <Formik
              initialValues={{
                courseCode: courseData.courseCode,
                courseName: courseData.courseName,
                shortName: courseData.shortName,
                categoryName: courseData.categoryName,
                duration: courseData.duration,
                fee: courseData.fee,
                syllabus: courseData.syllabus,
              }}
              onSubmit={onSubmit}
              validationSchema={courseValidationSchema}
              enableReinitialize={true} // Add this line
            >
              {({ values, setFieldValue }) => (
                <Form>
                  <Stack mt={10} spacing={6}>
                    <TitleBox title=" Course Information" />

                    <SimpleGrid columns={1} px={7} columnGap={4} rowGap={4}>
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
                                  {list.name === "coursePhoto" ? (
                                    <input
                                      type="file"
                                      accept="image/*" // Accept only image files
                                      onChange={(e) =>
                                        setLogoFile(e.target.files[0])
                                      } // Update logo file state
                                    />
                                  ) : (
                                    <Input
                                      bgColor="black.5"
                                      name={list.name}
                                      type={list.type}
                                      placeholder={list.placeholder}
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

                    <Button
                      leftIcon={<MdKeyboardDoubleArrowRight />}
                      m="10px 50px"
                      size="md"
                      type="submit"
                    >
                      Update Course
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

export default UpdateCourse;
