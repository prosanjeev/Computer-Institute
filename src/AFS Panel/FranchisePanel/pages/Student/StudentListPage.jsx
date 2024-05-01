// StudentListPage.js
import {
  Box,
  Button,
  Flex,
  Icon,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Switch,
  Table,
  Tag,
  Tbody,
  Td,
  Th,
  Thead,
  Tooltip,
  Tr,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchFranchiseData,
  selectbranchData,
  selectStudents,
} from "../../../redux/franchise/authSlice";
import FranchiseDashboardLayout from "../../components/FranchiseDashboardLayout";
import { FaAddressCard, FaRegEdit } from "react-icons/fa";
import { PiCertificateFill, PiChalkboardTeacher } from "react-icons/pi";
import { TbCertificate2 } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { fireDB, storage } from "../../../firebase/FirebaseConfig";
import { doc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const StudentListPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const students = useSelector(selectStudents);

  useEffect(() => {
    dispatch(fetchFranchiseData());
  }, [dispatch]);

  const handleStatusChange = (studentId, newStatus) => {
    // Implement your logic to update the status of the student with ID studentId to newStatus
  };
  const isDesktop = useBreakpointValue({ base: false, md: true });

  const CustomCard = React.forwardRef(({ children, ...rest }, ref) => (
    <Box p="1">
      <Tag ref={ref} {...rest} cursor="pointer">
        {children}
      </Tag>
    </Box>
  ));
  const handleEditClick = (studentId) => {
    navigate("/update-student", { state: { studentId } }); // Navigate to "/update-branch" with franchiseId
  };
  const handleCourseAdmission = (studentId, franchiseId) => {
    navigate("/course-selection", { state: { studentId, franchiseId } });
  };
  const handlePrintIdCard = (userName) => {
    navigate("/idcard", { state: { userName } });
  };
  const handlePrintCertificate = (userName) => {
    navigate("/student-certificate", { state: { userName } });
  };
  const handlePrintMarksheet = (userName) => {
    navigate("/student-marksheet", { state: { userName } });
  };

  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [newPhotoFile, setNewPhotoFile] = useState(null);

  // const openModal = () => setIsModalOpen(true);
  // const closeModal = () => setIsModalOpen(false);

  const handlePhotoSubmit = async (userName, studentId, newPhotoFile) => {
    try {
      // Upload new photo file to Firebase Storage
      const photoRef = ref(storage, `students/${userName}/photo`);
      await uploadBytes(photoRef, newPhotoFile);

      // Get download URL of the new photo
      const newPhotoUrl = await getDownloadURL(photoRef);

      // Update the photoUrl field in Firestore
      const studentRef = doc(fireDB, "students", studentId);
      await updateDoc(studentRef, { photoUrl: newPhotoUrl });
      dispatch(fetchFranchiseData());
      toast.success("Photo updated successfully");
    } catch (error) {
      console.error("Error updating photo: ", error);
      toast.error("Failed to update photo");
    }
  };

  const handlePhotoChange = async (userName, studentId, e) => {
    const newPhotoFile = e.target.files[0];

    // Check if the file size is less than 60kb
    if (newPhotoFile.size > 60 * 1024) {
      toast.error("Please select a photo less than 60kb in size.");
      return;
    }

    // Read the file as a data URL
    const reader = new FileReader();
    reader.onload = async (event) => {
      const dataUrl = event.target.result;

      // Create a new image element to get the dimensions
      const img = document.createElement("img");
      img.onload = async () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;

        // Resize the image if necessary
        if (newPhotoFile.size > 60 * 1024) {
          const scaleFactor = (60 * 1024) / newPhotoFile.size;
          canvas.width *= scaleFactor;
          canvas.height *= scaleFactor;
        }

        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        const resizedDataUrl = canvas.toDataURL("image/jpeg");

        // Convert the data URL back to a Blob
        const byteString = atob(resizedDataUrl.split(",")[1]);
        const mimeString = resizedDataUrl
          .split(",")[0]
          .split(":")[1]
          .split(";")[0];
        let ab = new ArrayBuffer(byteString.length);
        let ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
          ia[i] = byteString.charCodeAt(i);
        }
        const resizedFile = new Blob([ab], { type: mimeString });

        // Upload the resized file to Firebase Storage
        handlePhotoSubmit(userName, studentId, resizedFile);
      };
      img.src = dataUrl;
    };
    reader.readAsDataURL(newPhotoFile);
  };

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <FranchiseDashboardLayout title="Students List">
      <Flex direction="column" alignItems="center" mx={2} overflowX={{base:"auto"}} maxW="100%">
     
        <Table
          variant="simple"
          colorScheme="blue"
          size={isMobile ? "sm" : "md"}
        >
          <Thead>
            <Tr bg="orange.400">
              <Th fontSize="lg" fontWeight="bold">
                Sr.
              </Th>
              <Th fontSize="lg" fontWeight="bold">
                Date
              </Th>
              <Th fontSize="lg" fontWeight="bold">
                Photo
              </Th>
              <Th fontSize="lg" fontWeight="bold">
                Enr No.
              </Th>
              <Th fontSize="lg" fontWeight="bold">
                Name
              </Th>
              <Th fontSize="lg" fontWeight="bold">
                Father's Name
              </Th>
              <Th fontSize="lg" fontWeight="bold">
                Course
              </Th>
              <Th fontSize="lg" fontWeight="bold">
                Status
              </Th>
              <Th fontSize="lg" fontWeight="bold">
                Details
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {students.map((student, index) => (
              <Tr key={index}>
                <Td>{index + 1}</Td>
                <Td>
                  {new Date(student.createdAt).toLocaleDateString("en-GB")}
                </Td>
                <Td>
                  <Image
                    src={student.photoUrl}
                    alt={student.studentName}
                    w={isMobile ? "30px" : "40px"}
                    h={isMobile ? "30px" : "40px"}
                    border="2px solid"
                    borderRadius="10px"
                    cursor="pointer"
                    onClick={(e) => {
                      const fileInput = document.createElement("input");
                      fileInput.type = "file";
                      fileInput.accept = "image/*";
                      fileInput.addEventListener("change", (e) =>
                        handlePhotoChange(student.userName, student.id, e)
                      );
                      fileInput.click();
                    }}
                  />
                </Td>
                <Td>{student.studentId}</Td>
                <Td borderLeft="1px solid red">{student.studentName}</Td>
                <Td>{student.fatherName}</Td>
                <Td> {student.courseName ? student.courseName : "Unknown"}</Td>
                <Td>
                  <Switch
                    isChecked={student.status === "Active"}
                    onChange={(e) =>
                      handleStatusChange(
                        student.id,
                        e.target.checked ? "Active" : "Inactive"
                      )
                    }
                    colorScheme={student.status === "Active" ? "green" : "red"}
                  />
                </Td>
                <Td>
                  <Flex flexWrap="wrap">
                    <Tooltip label="Edit">
                      <Box
                        p="1"
                        cursor="pointer"
                        onClick={() => handleEditClick(student.id)}
                      >
                        <Icon as={FaRegEdit} size="sm" colorScheme="blue" />
                      </Box>
                    </Tooltip>
                    <Tooltip label="Course Admission">
                      <Box
                        p="1"
                        cursor="pointer"
                        onClick={() =>
                          handleCourseAdmission(student.id, student.franchiseId)
                        }
                      >
                        <Icon
                          as={PiChalkboardTeacher}
                          size="sm"
                          colorScheme="blue"
                        />
                      </Box>
                    </Tooltip>
                    <Tooltip label="Icard">
                      <Box p="1"  cursor="pointer"
                        onClick={() => handlePrintIdCard(student.userName)}>
                        <Icon as={FaAddressCard} size="sm" colorScheme="blue" />
                      </Box>
                    </Tooltip>
                    <Tooltip label="Download Certificate">
                      <Box
                        p="1"
                        cursor="pointer"
                        onClick={() => handlePrintCertificate(student.userName)}
                      >
                        <Icon
                          as={PiCertificateFill}
                          size="sm"
                          colorScheme="blue"
                        />
                      </Box>
                    </Tooltip>
                    <Tooltip label="Download Marksheet">
                      <Box
                        p="1"
                        cursor="pointer"
                        onClick={() => handlePrintMarksheet(student.userName)}
                      >
                        <Icon
                          as={TbCertificate2}
                          size="sm"
                          colorScheme="blue"
                        />
                      </Box>
                    </Tooltip>
                  </Flex>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      
      </Flex>
    </FranchiseDashboardLayout>
  );
};

export default StudentListPage;
