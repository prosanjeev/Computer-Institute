import {
  Box,
  Flex,
  FormControl,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  InputRightElement,
  Textarea,
  Button,
} from "@chakra-ui/react";
import HeadingWithHr from "../../components/PagesComponents/HeadingWithHr/HeadingWithHr";
import PageTitle from "../../components/PagesComponents/PageTitleSection/PageTitle";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";

const ContactUs = () => {

const lists=[
  {
    icon: IoIosPhonePortrait,
    title: "CALL US:",
    text: "9876543210",
  },
  {
    icon: MdOutlineMail,
    title: "MAIL US:",
    text: "help@mtech.in",
  },
  {
    icon: FaWhatsapp,
    title: "Whatsapp US:",
    text: "9876543210",
  },
  {
    icon: LuMapPin,
    title: "VISIT US:",
    text: "PATNA CITY, PATNA, BIHAR (BR), India (IN), Pin Code:- 812348",
  },
]

  return (
    <>
      <Box>
        <PageTitle pagetitle="CONTACT US" />
        <HeadingWithHr heading="We are just a phone call away !"  text="Feel free to write us about any of your concern."/>
      </Box>

      
{/* ----------------------- */}
      <Flex w="1200px" mx="auto"  flexDirection="row" justifyContent="space-around" mb="80px" >

      <Stack fontWeight="700" w="500px" spacing={6} p={6}>
          {lists.map((list)=>(
             <HStack key={list.title} align="start" spacing={6}>
             <Icon as={list.icon} boxSize={14} border="1px solid orange" padding={3}/>
             <Stack spacing={1}>
             <Text fontSize="18px">{list.title}</Text>
             <Text fontSize="16px" fontWeight={400} w="300px"> {list.text} </Text>
             </Stack>
           </HStack>
          ))}                
        </Stack>


        <Stack w="600px">
          <FormControl >
          <Stack  spacing={5}>
          <HStack >
           <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Icon as={FaRegUser} color='gray.300' />
              </InputLeftElement>
              <Input type="text" placeholder="Enter Your Name" />
            </InputGroup>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
              <Icon as={IoIosPhonePortrait} color='gray.300' />
              </InputLeftElement>
              <Input type="tel" placeholder="Phone number" />
            </InputGroup>
           </HStack>
           <InputGroup>
              <InputLeftElement pointerEvents="none">
              <Icon as={MdOutlineMail} color='gray.300' />
              </InputLeftElement>
              <Input type="tel" placeholder="Enter your Mail" />
            </InputGroup>
            <Textarea placeholder='Enter your Message'  rows={8}/>
            <Button colorScheme='blue'>Submit</Button>
          </Stack>
          </FormControl>
        </Stack>
 {/* ----------------------- */}
       
      </Flex>
      <div className="maps">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.842987671033!2d77.60476917484044!3d12.917811187392576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15aa6848217f%3A0xfe638c503aad819a!2sPatna%20Wale!5e0!3m2!1sen!2sin!4v1704164998356!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default ContactUs;
