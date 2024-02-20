import "./DownFooter.css";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import {
  Box,
  Divider,
  Flex,
  HStack,
  Heading,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import QueryForm from "./components/QueryForm";

const DownFooter = () => {
  const useFulLink = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "About Us",
      link: "/about-company",
    },
    {
      text: "Contact Us",
      link: "/contact-us",
    },
    {
      text: "Student Login",
      link: "/",
    },
    {
      text: "Student Verification",
      link: "/student-verification",
    },
    {
      text: "Certificate Verification",
      link: "/certificate-verification",
    },
  ];

  return (
    <Box as="footer"  bgColor='#B80505' w='100%' >
      <Flex    
        direction={{ base: "column", md: "row" }}
        className="footer-contantant" gap={4}
      >
        <Box flex="1" mr={{ base: 0, md: 4 }} mb={{ base: 4, md: 0 }}>
          <Heading as="h3" size="md" className="footer-title">
            CONTACT US
          </Heading>
          <Divider className="footer-hr-line" w={12} />
          <Text className="footer-about" color='#CCC9AC'>
            M-TECH COMPUTER ACADEMY PVT. LTD., 56/6/510A Unity City Chaurah,
            Bahadurpur Rd, Kalyanpur (West), Patna, Bihar 876543
          </Text>
          <VStack align="start" mt={2}>
            <Flex align="center">
              <IoCallOutline />
              <Text color='#CCC9AC' ml={2}>9876543210</Text>
            </Flex>
            <Flex align="center">
              <MdMailOutline />
              <Text color='#CCC9AC' ml={2}>Contact@domain.com</Text>
            </Flex>
          </VStack>
        </Box>
        <Box flex="1" mr={{ base: 0, md: 4 }} mb={{ base: 4, md: 0 }}>
          <Heading as="h3" size="md" className="footer-title">
            USEFUL LINKS
          </Heading>
          <Divider className="footer-hr-line" w={12} />
          <VStack align="start" mt={2}>
            {useFulLink.map((list) => (
              <Link  key={list.text} to={list.link}>
               <HStack color='#CCC9AC'> 
                <Icon as={IoIosArrowForward} />
                <Text>  {list.text}</Text>
              </HStack>
              </Link>
            ))}
          </VStack>
        </Box>
        <Box flex="1">
          <Heading as="h3" size="md" className="footer-title">
            QUERY US
          </Heading>
          <Divider className="footer-hr-line" w={12} />
          <QueryForm/>
        </Box>
      </Flex>
      <Text textAlign="center" className="copyright-contant">
        M-TECH COMPUTER ACADEMY PVT. LTD. © 2023 |{" "}
        <Link to='#'>Privacy Policy</Link>
      </Text>
    </Box>
  );
};

export default DownFooter;
