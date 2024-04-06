import { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { Button, Flex } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudentData, selectStudentData } from "../../../redux/student/slice/studentSlice";
import StudentCertificateContent from "./StudentCertificateContent";

function PrintStudentCertificate({ onClick, visitorData }) {
  const componentRef = useRef();
  const navigate = useNavigate();


  const dispatch = useDispatch();
  const location = useLocation();
  const studentData = useSelector(selectStudentData);
  const [isLoading, setIsLoading] = useState(true);
  const regNumber = location.state ? location.state.userName : null;

  useEffect(() => {
    dispatch(fetchStudentData(regNumber))
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false));
  }, [dispatch]);
 

  const printRecord = () => {
    console.log("Print record..");
    handlePrint();
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const goBack = () => {
    navigate("/students-list");
  };

  return (
    <>
      <div >
        <Flex>
          <div style={{ maxWidth: "70px" }}>
            <Button
              mt={4}
              ml={3}
              onClick={goBack}
              colorScheme="green"
              variant="outline"
            >
              Back
            </Button>
          </div>
          <div style={{ maxWidth: "70px" }}>
            <Button
              mt={4}
              ml={3}
              onClick={printRecord}
              colorScheme="green"
              variant="outline"
            >
              Print
            </Button>
          </div>
        </Flex>

        <div
          ref={componentRef}
          // style={{ marginLeft: "20px", marginRight: "20px", marginTop: "0px" }}
          // style={{ margin: "20px" }}
        >
         
            <StudentCertificateContent  studentData={studentData} />
          
        </div>
        <Flex justify="end">
          <div onClick={printRecord}></div>
        </Flex>
      </div>
    </>
  );
}

export default PrintStudentCertificate;

