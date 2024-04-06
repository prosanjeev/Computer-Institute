// CourseSelectionPage.jsx
import React, { useEffect, useState } from "react";
import {  useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { fireDB } from './firebase'; // Firebase instance
import { selectAllCourses } from "../../../redux/course/coursesSelectors";
import { fireDB } from "../../../firebase/FirebaseConfig";
import { fetchCourses } from "../../../redux/course/coursesActions";
import FranchiseDashboardLayout from "../../components/FranchiseDashboardLayout";
import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import {
  Button,
  Card,
  Center,
  FormControl,
  FormLabel,
  Select,
  Spinner,
} from "@chakra-ui/react";
import { toast } from "react-toastify";

const CourseSelectionPage = () => {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const courses = useSelector(selectAllCourses);
  const navigate = useNavigate();
  const location = useLocation();
  const franchiseId = location.state ? location.state.franchiseId : null;
  const studentId = location.state ? location.state.studentId : null;

console.log("koiw", studentId)

  useEffect(() => {
    if (studentId) {
      dispatch(fetchCourses());
    }
  }, [dispatch, studentId]);

//   const handleCourseSelect = async () => {
//     if (selectedCourse) {
//       setIsLoading(true);
//       // Create a record for the selected course in a new collection
//       await addDoc(collection(fireDB, "studentCourses"), {
//         studentId,
//         courseId: selectedCourse,
//         createdAt: new Date(),
//       });
//       // Redirect to another page
//       //   history.push('/confirmation');
//       setIsLoading(false);
//       toast.success("Successfully added course");
//     }
//   };

const handleCourseSelect = async () => {
    if (selectedCourse) {
      setIsLoading(true);
  
      // Get the selected course's fee
      const courseFee = parseInt(selectedCourse.fee);
  
      // Check if the franchise has enough balance
      const franchiseRef = doc(fireDB, "franchiseData", franchiseId);
      const franchiseSnap = await getDoc(franchiseRef);
      const franchiseData = franchiseSnap.data();
      const franchiseWallet = parseInt(franchiseData.wallet);
  
      if ( franchiseWallet < courseFee) {
        setIsLoading(false);
        toast.error("Insufficient balance in your wallet");
        navigate("/wallet-recharge")
        return;
      }
  
      // Deduct the course fee from the franchise's wallet
      const updatedWallet = parseInt(franchiseWallet) - parseInt(courseFee);
      await updateDoc(franchiseRef, { wallet: updatedWallet });
  
      // Create a record for the selected course in a new collection
      await addDoc(collection(fireDB, "studentCourses"), {
        studentId,
        courseId: selectedCourse.id,
        createdAt: new Date(),
      });
      setIsLoading(false);
      toast.success("Successfully added course");
      navigate("/students-list")

    }
  };
  
  const handleDurationChange = (e) => {
    const duration = e.target.value;
    setSelectedDuration(duration);
    setSelectedCourse(""); // Reset selected course when duration changes
  };

  return (
    <FranchiseDashboardLayout title="Select Course">
      {/* <Heading>Enroll </Heading> */}
      <Center>
        <Card
          my={10}
          p={6}
          border="1px solid gray"
          borderRadius="16px"
          minW={{
            base: "90vw",
            md: "100vw",
            lg: "600px",
          }}
        >
          <FormControl my={3}>
            <FormLabel fontSize='20px'>Course Group</FormLabel>
            <Select fontSize='20px'
              bgColor="black.50"
              border="1px solid gray"
              value={selectedDuration}
              onChange={handleDurationChange}
            >
              <option value="">Select Course Group</option>
              {Array.from(
                new Set(courses.map((course) => course.duration))
              ).map((duration) => (
                <option key={duration} value={duration}>
                  {duration}
                </option>
              ))}
            </Select>
          </FormControl>
          {selectedDuration && (
            <FormControl mt={4} fontSize='20px' my={3}>
              <FormLabel fontSize='20px'>Select a course</FormLabel>
              <Select fontSize='20px'
                bgColor="black.50"
                border="1px solid gray"
                value={selectedCourse ? selectedCourse.id : ""}
                onChange={(e) =>
                  setSelectedCourse(
                    courses.find((course) => course.id === e.target.value)
                  )
                }
              >
                <option value="">Select a course</option>
                {courses
                  .filter((course) => course.duration === selectedDuration)
                  .map((course) => (
                    <option key={course.id} value={course.id}>
                      {course.courseName}
                    </option>
                  ))}
              </Select>
            </FormControl>
          )}
          <Button mt={5} onClick={handleCourseSelect}>
            {isLoading ? <Spinner size="sm" /> : "Select Course"}
          </Button>
        </Card>
      </Center>
    </FranchiseDashboardLayout>
  );
};

export default CourseSelectionPage;
