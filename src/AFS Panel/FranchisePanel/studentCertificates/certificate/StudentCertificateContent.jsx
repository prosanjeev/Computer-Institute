import React, { useEffect, useState } from "react";
import {
  Box,
  Image,
  Flex,
  Text,
  Stack,
} from "@chakra-ui/react";
import QRCode from "qrcode.react";

const StudentCertificateContent = ({ studentData }) => {
  const [qdata, setQdata] = useState("");

  // const BaseUrl = "https://mohallaacademy.com/student-verification/"
  // const value =  BaseUrl+studentData.username

  useEffect(() => {
    setQRData();
  }, [studentData]);

  function setQRData() {
    // var url = Object.values(studentData && studentData.userName);

    setQdata(studentData && studentData.userName);
  }

  const pseudoElementStyles = {
    content: '""',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
    // backgroundImage: `url(${formData.logo})`,
    backgroundImage: `url("/stCertificate.png")`, // Replace "your-image.jpg" with your image file name
    backgroundSize: "100%",
    // opacity: 0.08,
  };

  return (
    <Flex justify="center">
      <Box
        style={{
          width: "1100px", // A4 landscape width in pixels
          height: "794px", // A4 landscape height in pixels
          position: "relative",
          padding: "25px",
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
          }}
        >
          <Box style={pseudoElementStyles}></Box>
          <Box style={{ position: "relative", zIndex: 1 }}>
            <Flex justify="center" position="absolute" top="2px" left="23px">
              <Image
                src={studentData && studentData.centerPhotoUrl}
                alt="Company Logo"
                height="100px"
                width="100px"
                mb={-4}
              />
            </Flex>

            <Box
              bg="gray.50"
              textAlign="end"
              position="absolute"
              right={0}
              top="200px"
              px={2}
            >
              <Text fontSize="20px" fontWeight="bold">
                {studentData && studentData.centerName}
              </Text>
            </Box>
            <Box
              textAlign="end"
              position="absolute"
              right={0}
              top="286px"
              px={2}
              left="35%"
              transform="translateX(-65%)"
            >
              <Text fontSize="14px" fontWeight="bold">
                {studentData && studentData.studentId}
              </Text>
            </Box>
            <Stack>
              <Box>
                <Image
                  src={studentData && studentData.photoUrl}
                  position="absolute"
                  left="23px"
                  top="290px"
                  height="100px"
                  width="100px"
                  loading="lazy"
                />
              </Box>

              <Flex position="absolute" left="15px" top="415px" gap={1}>
                <Text>DOB:</Text>{" "}
                <Text fontWeight="bold">
                  {new Date(
                    studentData && studentData.dateOfBirth
                  ).toLocaleDateString("en-GB")}{" "}
                </Text>
              </Flex>
              {/* Qr Code */}
              <Box
                as="div"
                left="22px"
                top="459px"
                position="absolute"
                h="100px"
                w="100px"
              >
                <QRCode value={qdata} size={100} position="absolute" />
              </Box>
            </Stack>

            <Stack
              position="absolute"
              top="330px"
              left="50%"
              transform="translateX(-50%)"
            >
              <Text fontSize="lg" textAlign="center">
                Certificate of Achievement Awarded to
              </Text>
              <Text fontSize="lg" textAlign="center">
                Ms/ Mr. {studentData && studentData.studentName}
              </Text>
              <Text fontSize="lg" textAlign="center">
                S/o D/o W/o {studentData && studentData.fatherName}
              </Text>

              <Text fontSize="lg" textAlign="center">
                has successfully completed the
              </Text>
              <Text fontSize="lg" textAlign="center">
                {studentData && studentData.courses.join("")}....
              </Text>
              <Text fontSize="lg" textAlign="center">
                at- {studentData && studentData.centerName}
              </Text>
            </Stack>

            {/* <Flex justify="center">
              <Badge colorScheme="red" p={2} mx={2}>
                GRADE A++
              </Badge>
              <Badge colorScheme="blue" p={2} mx={2}>
                GRADE A
              </Badge>
              <Badge colorScheme="yellow" p={2} mx={2}>
                GRADE B
              </Badge>
              <Badge colorScheme="green" p={2} mx={2}>
                GRADE C
              </Badge>
              <Badge colorScheme="red" p={2} mx={2}>
                GRADE D
              </Badge>
            </Flex> */}
          </Box>
          <Flex justify="center" position="absolute" right="90px" bottom="90px">
            <Image
              src="/signature.png"
              alt="Company Logo"
              height="60px"
              width="140px"
              mb={-4}
            />
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default StudentCertificateContent;
