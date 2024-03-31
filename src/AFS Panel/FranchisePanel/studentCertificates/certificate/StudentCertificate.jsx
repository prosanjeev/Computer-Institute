import { useEffect, useState, useRef } from "react";
import { Button, Center, Container, Img, Stack, Text } from "@chakra-ui/react";
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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const studentData = useSelector(selectStudentData);
  const [isLoading, setIsLoading] = useState(true);
  const componentRef = useRef();
  const regNumber = location.state ? location.state.regNumber : null;

  // useEffect(() => {
  //   dispatch(fetchStudentData());
  // }, [dispatch]);
  useEffect(() => {
    dispatch(fetchStudentData(regNumber))
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false));
  }, [dispatch]);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

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
        border="2px solid gray" borderRadius='20' p={4}
      >
        {/* Overlay dynamic details */}
        <Img src={studentData && studentData.photoUrl} h="150px" w="150px" mx='auto' />
        {/* <QRCode value={studentData && studentData.studentName} /> */}
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
          <StudentCertificateContent studentData={studentData}  />
        </PDFViewer>
      )}
    </FranchiseDashboardLayout>
  );
};

export default StudentCertificate;
