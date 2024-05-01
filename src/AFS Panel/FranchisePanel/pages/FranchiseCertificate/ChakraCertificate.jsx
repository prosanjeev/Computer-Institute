import React, { useState, useEffect } from "react";
import {
  Box,
  Image,
  Flex,
  Text,
  Badge,
  Grid,
  GridItem,
  Stack,
} from "@chakra-ui/react";
import QRCode from "qrcode.react";

const ChakraCertificate = ({ branchData }) => {
  const [formData, setFormData] = useState({
    phone: "0987654321",
    email: "info@example.com",
    website: "www.example.com",
    pan: "ABCDE1234F",
    uan: "123456789",
    gst: "GST123",
  });

  const [qdata, setQdata] = useState("");

  useEffect(() => {
    setQRData();
  }, [branchData]);

  const {
    directorName = "",
    gender = "",
    primaryPhone = "",
    email = "",
    logoUrl = "",
    centerId = "",
    centerName = "",
    postOffice = "",
    policeStation = "",
    pinCode = "",
    centerPlace = "",
    state = "",
    district = "",
    createdAt,
  } = branchData || {};

  function setQRData() {
    // var url = Object.values(formData).join("\n");
    setQdata(branchData && branchData.centerId);
  }

  const pseudoElementStyles = {
    content: '""',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
    // backgroundImage: `url(${formData.logo})`,
    backgroundImage: `url("/frCertificate.png")`, // Replace "your-image.jpg" with your image file name
    backgroundSize: "100%",
    // opacity: 0.08,
  };

  return (
    <Flex justify="center">
      <Box
        style={{
          width: "794px",
          height: "1123px",
          position: "relative",
          // padding: "30px",
          // border: "1px solid gray",
        }}
      >
        <Box
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            border: "1px solid gray",
            padding: "50px",
            // marginTop:'15px'
          }}
        >
          <Box style={pseudoElementStyles}></Box>

          <Flex
            justify="center"
            position="absolute"
            top="110px"
            left="50%"
            transform="translateX(-50%)"
          >
            <Image
              src={branchData && branchData.logoUrl}
              alt="Company Logo"
              height="100px"
              width="100px"
              mb={-4}
            />
          </Flex>

          <Flex
            position="absolute"
            top="220px"
            justify="center"
            left="50%"
            transform="translateX(-50%)"
          >
            <Text textAlign="center" mb={8}>
              E-mail: {formData.email}, Website: {formData.website}
            </Text>
          </Flex>

          <Flex
            position="absolute"
            justify="between"
            top="330px"
            left="50%"
            transform="translateX(-50%)"
          >
            <Box>
              <Text>PAN NO. {formData.pan}</Text>
              <Text>UAN: {formData.uan}</Text>
              <Text>GSTIN: {formData.gst}</Text>
            </Box>
            <Box>
              <Text>Ref. No.: {formData.ref_no}</Text>
              <Text>Date: {formData.date_of_issue}</Text>
            </Box>
          </Flex>
        </Box>
        {/* <Flex justify="center" position="absolute" right="210px" bottom="120px">
          <Image
            src="/signature.png"
            alt="Company Logo"
            height="60px"
            width="140px"
            mb={-4}
          />
        </Flex> */}
        <Flex justify="center" position="absolute" left="135px" bottom="95px">
          <Text fontWeight="bold" fontSize="18px">
            {branchData &&
              new Date(createdAt).toLocaleDateString("en-GB")}
          </Text>
        </Flex>

        <Stack
          position="absolute"  h='260px'
          bottom="290px" justify='center'
          left="50%"
          transform="translateX(-50%)"
        >
          <Text fontSize="lg" textAlign="center">
            This is to certify that
          </Text>
          <Text fontSize="lg" textAlign="center" fontWeight="bold">
            Ms/ Mr. {branchData && branchData.directorName}
          </Text>
          <Text fontSize="lg" textAlign="center">
            has been authorised to run All Courses{" "}
          </Text>
          <Text fontSize="lg" textAlign="center">
            `Under Your COMPUTER EDUCATION In `
          </Text>
          <Text fontSize="lg" textAlign="center">
            his/her Centre Name - {branchData && branchData.centerName}
          </Text>

          <Text fontSize="lg" textAlign="center" maxW='350px'>
            At- {centerPlace}, {policeStation}, {district}, {state}, {pinCode},
            IN
          </Text>
         
         
        </Stack>

        {/* Qr Code */}
        <Box
          as="div"
          right="120px"
          bottom="174px"
          position="absolute"
          h="100px"
          w="100px"
        >
          <QRCode value={qdata} size={100} position="absolute" />
          <Text fontSize="14px" fontWeight="bold">
            {branchData && branchData.centerId}
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default ChakraCertificate;
