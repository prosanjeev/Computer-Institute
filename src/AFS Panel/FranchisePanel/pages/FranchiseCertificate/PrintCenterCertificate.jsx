import { useEffect, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Button, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import {
  fetchFranchiseDataOnly,
  selectbranchData,
} from "../../../redux/franchise/authSlice";
import { useDispatch, useSelector } from "react-redux";
import ChakraCertificate from "./ChakraCertificate";

function PrintCenterCertificate() {
  const componentRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const branchData = useSelector(selectbranchData);

  useEffect(() => {
    dispatch(fetchFranchiseDataOnly());
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
        >
          <div>
            <ChakraCertificate branchData={branchData} />
          </div>
        </div>
        <Flex justify="end">
          <div onClick={printRecord}></div>
        </Flex>
    </>
  );
}

export default PrintCenterCertificate;
