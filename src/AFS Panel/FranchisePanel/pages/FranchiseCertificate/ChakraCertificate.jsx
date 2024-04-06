import React, { useState, useEffect } from "react";
import {
  Box,
  Image,
  Flex,
  Text,
  Badge, 
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import QRCode from "qrcode.react";
import { useNavigate } from "react-router-dom";

const ChakraCertificate = ({branchData}) => {
  const [formData, setFormData] = useState({
    name: "John Doe",
    reg_no: "123456",
    fathers_name: "Michael Doe",
    to: "01/01/2024",
    ref_no: "REF123",
    from: "01/01/2023",
    centre_head: "Jane Smith",
    contact_no: "1234567890",
    date_of_issue: "01/01/2024",
    grade: "A",
    image: "https://via.placeholder.com/150",
    company_name: "Chakra UI Academy",
    logo: "https://via.placeholder.com/60",
    services: "Certificate of Completion",
    address: "123 Main St, Cityville",
    phone: "0987654321",
    email: "info@example.com",
    website: "www.example.com",
    pan: "ABCDE1234F",
    uan: "123456789",
    gst: "GST123",
    topics: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  });

  const [qdata, setQdata] = useState("");

  useEffect(() => {
    setQRData();
  }, [formData]);

  function setQRData() {
    var url = Object.values(formData).join("\n");
    setQdata(url);
  }

  const pseudoElementStyles = {
    content: '""',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
    // backgroundImage: `url(${formData.logo})`,
    // backgroundImage: `url("/certificate.png")`, // Replace "your-image.jpg" with your image file name
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
          padding: "30px",
        }}
      >
        <Box
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            border: "1px solid #000",
            padding: "50px",
          }}
        >
          <Box style={pseudoElementStyles}></Box>
          <Box style={{ position: "relative", zIndex: 1 }}>
            <Flex justify="center" mb={8}>
              <Text fontSize="2xl" fontWeight="bold">
                {branchData && branchData.centerName}
              </Text>
            </Flex>
            <Flex justify="center" mb={8}>
              <Image
                src={branchData && branchData.logoUrl}
                alt="Company Logo"
                height="40px"
                width="40px"
                mb={-4}
              />
            </Flex>
            <Text textAlign="center" mb={8}>
              {formData.services}
              <br />
              {formData.address}
              <br />
              Ph. : {formData.phone}
              <br />
              E-mail: {formData.email}, Website: {formData.website}
            </Text>
            <Flex justify="between" mb={8}>
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
            <Flex mb={8} justify="center">
              <Box>
                <Image
                  src={formData.image}
                  height="100px"
                  width="90px"
                  style={{
                    borderRadius: "15px",
                  }}
                  loading="lazy"
                />
              </Box>
            </Flex>
            {/* <Text fontSize="xl" mb={4} textAlign="center">
              Certificate of Achievement Awarded to
            </Text>
            <Text fontSize="lg" mb={4} textAlign="center">
              Ms/ Mr. {formData.name}
            </Text>
            <Text fontSize="lg" mb={4} textAlign="center">
              S/o D/o W/o {formData.fathers_name}
            </Text>
            <Text fontSize="lg" mb={4} textAlign="center">
              Registration No. {formData.reg_no}
            </Text> */}
            <Text fontSize="lg" mb={4} textAlign="center">
              has successfully completed the
            </Text>
            <Text fontSize="lg" mb={4} textAlign="center">
              Internship Training in CNC, with Grade {formData.grade}
            </Text>
            <Text fontSize="lg" mb={4} textAlign="center">
              Held From {formData.from} to {formData.to}
            </Text>
            <Text fontSize="lg" mb={4} textAlign="center">
              Topic Covered During Internship:
            </Text>
            <Text fontSize="md" mb={8} textAlign="center">
              {formData.topics}
            </Text>
            <Text fontSize="lg" mb={4} textAlign="center">
              For, {formData.company_name}
            </Text>
            <Grid templateColumns="repeat(3, 1fr)" gap={4} mb={8}>
              <GridItem>
                <Text>Authorized Signatory</Text>
              </GridItem>
              <GridItem>
                <Text>Seal</Text>
              </GridItem>
              <GridItem>
                <Box>
                  <QRCode value={qdata} className="qrcode" />
                </Box>
                <Text>Course Co-ordinator</Text>
              </GridItem>
            </Grid>
           
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default ChakraCertificate;
