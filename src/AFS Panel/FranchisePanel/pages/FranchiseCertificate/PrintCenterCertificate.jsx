import { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { Button, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { fetchFranchiseData, selectbranchData } from "../../../redux/franchise/authSlice";
import { useDispatch, useSelector } from "react-redux";
import ChakraCertificate from "./ChakraCertificate";

function PrintCenterCertificate({ onClick, visitorData }) {
  const componentRef = useRef();
  const navigate = useNavigate();

  const [isGenerating, setIsGenerating] = useState(false);
  const [pdfDocument, setPdfDocument] = useState(null);
  const dispatch = useDispatch();
  const branchData = useSelector(selectbranchData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchFranchiseData())
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
    navigate("/franchise-dashboard");
  };

  return (
    <>
      <div className="printcontainer">
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
          style={{ marginLeft: "20px", marginRight: "20px", marginTop: "0px" }}
        >
          <div>
            <ChakraCertificate branchData={branchData} />
          </div>
        </div>
        <Flex justify="end">
          <div onClick={printRecord}></div>
        </Flex>
      </div>
    </>
  );
}

export default PrintCenterCertificate;

