import React from "react";
// import "./TopHeader.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  HStack,
  Icon,
  Image,
  Stack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { c_phone } from "../../info/Info";

function TopHeader() {
  const buttonLists = [
    { name: "Enquiry Here", link: "/contact-us" },
    { name: "Student Registration", link: "/add-student" },
    { name: "Student Login", link: "/student-login" },
    { name: "Franchise Details", link: "/" },
    { name: "Apply Franchise", link: "/franchise-enquiry" },
    { name: "Franchise Login", link: "/franchise-login" },
  ];
  const iconLists = [
    { name: FaFacebookF, link: "/" },
    { name: FaTwitter, link: "/" },
    { name: FaYoutube, link: "/" },
    { name: FaLinkedin, link: "/" },
  ];

  return (
    <Stack>
      <Box as="flex" bgColor="#b80505" w="100vw" >
        <Flex w="80%" justify="space-around" mx="auto" flexWrap='wrap' >
          <HStack py={2} flexWrap='wrap' justify={{base:'center', md:'none'}}> 
            {buttonLists.map((btn) => (
              <Link to={btn.link} key={btn.name}>
              <Button fontSize="14px" 
              bgColor="yellow" 
              size='sm'
              _hover={{ bgColor: 'orange', color: 'white' }}
              color='black' px={2}  >
                {btn.name}
              </Button>
              </Link>
            ))}
          </HStack>
          <HStack gap={4} color='white' flexWrap='wrap' my={{base:'8px', md:'none'}}>
            <Flex align="center" gap={1}>
              <IoIosCall />
              {c_phone}
            </Flex>
            {iconLists.map((icon)=>(
               <Center height="15px" key='icon.name'>
               <Divider orientation="vertical" />
               <Icon as={icon.name} ml={3} />
             </Center>
            ))}
          </HStack>
        </Flex>
      </Box>

        <Image src="/topimg.png" my='10px' />      
    </Stack>
  );
}
export default TopHeader;
