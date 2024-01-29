import { Box, HStack, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { FaRegUser } from "react-icons/fa";
import { CiWallet } from "react-icons/ci";
import { PiStudent } from "react-icons/pi";
import { SiCoursera } from "react-icons/si";
import { TbReportSearch } from "react-icons/tb";
import { GrCloudComputer } from "react-icons/gr";
import { CgWebsite } from "react-icons/cg";
import { BiSupport } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";

const StudentSidenav = () => {
  const location = useLocation();

  const isActiveLink = (link) => {
    return location.pathname === link;
  };

  const navLinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/student-dashboard",
    },
    {
      icon: FaRegUser,
      text: "Profile",
      link: "/transactions",
    },
    
    {
      icon: CiWallet,
      text: "E Books",
      link: "/transactions",
    },
    {
      icon: PiStudent,
      text: "Practice Test",
      link: "/practice-test",
    },
    {
      icon: SiCoursera,
      text: "Main Test",
      link: "/transactions",
    },
    {
      icon: TbReportSearch,
      text: "Report",
      link: "/transactions",
    },
    {
      icon: GrCloudComputer,
      text: "Online Exam",
      link: "/transactions",
    },
    {
      icon: GrCloudComputer,
      text: "Icard",
      link: "/transactions",
    },
    {
      icon: CgWebsite,
      text: "Notice",
      link: "/transactions",
    },
   
  ];

  return (
    <Stack
      bg="white"
      justify="space-between"
      boxShadow={{
        base: "none",
        lg: "lg",
      }}
      w={{
        base: "full",
        lg: "16rem",
      }}
      h="100vh"
    >
      <Box>
        <Heading textAlign="center" fontSize="20px" as="h1" pt="3.5rem">
          @M-Tech Computer
        </Heading>
        <Box mt="6" mx="3">
          {navLinks.map((nav) => (
            <Link to={nav.link} key={nav.text}>
              <HStack
                bg={isActiveLink(nav.link) ? "#F3F3F7" : "transparent"}
                color={isActiveLink(nav.link) ? "#1A202C" : "#797E82"}
                borderRadius="10px"
                py="3"
                px="4"
                _hover={{
                  bg: "#F3F3F7",
                  color: "#171717",
                }}
                // color="#797E82"
              >
                <Icon boxSize={4} as={nav.icon} />
                <Text fontSize="16px" fontWeight="500">
                  {nav.text}
                </Text>
              </HStack>
            </Link>
          ))}
        </Box>
      </Box>

      <Box mt="6" mx="3" mb="6">
        <Link to="/support">
          <HStack
            borderRadius="10px"
            py="3"
            px="4"
            bg={isActiveLink("/support") ? "#F3F3F7" : "transparent"}
            color={isActiveLink("/support") ? "#171717" : "#797E82"}
            _hover={{
              bg: "#F3F3F7",
              color: "#171717",
            }}
          >
            <Icon as={BiSupport} />
            <Text fontSize="14px" fontWeight="medium">
              Support
            </Text>
          </HStack>
        </Link>
      </Box>
    </Stack>
  );
};

export default StudentSidenav;
