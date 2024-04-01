import { useEffect, useState, useRef } from "react";
import { Button, Center, Img, Stack, Text } from "@chakra-ui/react";
import { PDFViewer, StyleSheet } from "@react-pdf/renderer";
import { useReactToPrint } from "react-to-print";
import { useDispatch, useSelector } from "react-redux";
import FranchiseDashboardLayout from "../../components/FranchiseDashboardLayout";
import StudentCertificateContent from "./StudentCertificateContent";
import {
  fetchStudentData,
  selectStudentData,
} from "../../../redux/student/slice/studentSlice";
import { useLocation, useNavigate } from "react-router-dom";
import QRCode from "react-qr-code";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const StudentCertificate = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [pdfDocument, setPdfDocument] = useState(null);
  const [studentPhotoBase64, setStudentPhotoBase64] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const studentData = useSelector(selectStudentData);
  const [isLoading, setIsLoading] = useState(true);
  const componentRef = useRef();
  const regNumber = location.state ? location.state.regNumber : null;

  useEffect(() => {
    dispatch(fetchStudentData(regNumber))
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false));
  }, [dispatch]);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  // Function to convert URL to base64
  const toDataURL = (url, callback) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      const reader = new FileReader();
      reader.onloadend = function () {
        callback(reader.result);
      };
      reader.readAsDataURL(xhr.response);
    };
    xhr.open("GET", url);
    xhr.responseType = "blob";
    xhr.send();
  };

  // Convert photoUrl to base64
  useEffect(() => {
    if (studentData && studentData.photoUrl) {
      toDataURL(studentData.photoUrl, (dataUrl) => {
        setStudentPhotoBase64(dataUrl);
      });
    }
  }, [studentData]);

  const generateCertificate = () => {
    setIsGenerating(true);
    setPdfDocument(true);
    setTimeout(() => {
      handlePrint();
      setIsGenerating(false);
    }, 1000); // Wait for the PDFViewer to render the content
  };

  return (
    <FranchiseDashboardLayout title="Student Certificate">
      <Stack
        mx="auto"
        w="400px"
        h="400px"
        textAlign="center"
        border="2px solid gray"
        borderRadius="20"
        p={4}
      >
        {/* Overlay dynamic details */}
        {studentPhotoBase64 && (
          <Img src={studentPhotoBase64} h="150px" w="150px" mx="auto" />
        )}
        <Text fontSize="18px">
          Name:- {studentData && studentData.studentName}
        </Text>
        <Text fontSize="18px">
          Father's Name:- {studentData && studentData.fatherName}
        </Text>
        <Text fontSize="18px">
          Date of Birth:-{" "}
          {studentData &&
            new Date(studentData.dateOfBirth).toLocaleDateString("en-GB")}
        </Text>
        <Text fontSize="18px">
          Reg. Date:-{" "}
          {studentData &&
            new Date(studentData.createdAt).toLocaleDateString("en-GB")}
        </Text>
        <Text fontSize="18px">
          Center Name:- {studentData && studentData.courses.join(", ")}
        </Text>
      </Stack>
      <Center>
        <Button onClick={generateCertificate} isLoading={isGenerating} my={5}>
          Generate and Print Certificate
        </Button>
      </Center>
      {/* PDF Viewer to display the generated certificate */}
      {pdfDocument && (
        <PDFViewer width="100%" height="600px" ref={componentRef}>
          {studentData && (
            <StudentCertificateContent
              studentData={studentData}
              photoBase64={studentPhotoBase64}
            />
          )}
        </PDFViewer>
      )}
    </FranchiseDashboardLayout>
  );
};

export default StudentCertificate;
