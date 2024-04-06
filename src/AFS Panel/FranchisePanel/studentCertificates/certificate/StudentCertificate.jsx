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
  const regNumber = location.state ? location.state.userName : null;

  useEffect(() => {
    dispatch(fetchStudentData(regNumber))
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false));
  }, [dispatch]);

 

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

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
   <>
   </>
  );
};

export default StudentCertificate;
