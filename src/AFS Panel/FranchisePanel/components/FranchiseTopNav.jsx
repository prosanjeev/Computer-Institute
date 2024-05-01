import {
    Box,
    Flex,
    HStack,
    Heading,
    Icon,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
  } from "@chakra-ui/react";
  import { FaBars, FaUserTie } from "react-icons/fa";
import FranchiseNavWallate from "./FranchiseNavWallate";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

  const FranchiseTopNav = ({ title, onOpen, branchData }) => {
    const navigate = useNavigate();
    const handleLogout = () => {
      localStorage.clear('user');
      toast.success("Logout Successful!")
      navigate('/franchise-login');
  }
    return (
      <Box px={{md:"4", base:'2'}} bg="#2A3542" >
        <HStack maxW={{md:"80rem", base:'100vw'}} h="16" justify="space-between" mx="auto">
          <Icon
            as={FaBars}
            onClick={onOpen} color='white' boxSize='25px'
            display={{
              base: "block",
              lg: "none",
            }}
          />
          <Heading fontWeight="medium" fontSize={{md:"28px", base:'20px'}} color='white'>
            {title}
          </Heading>
  
         <HStack gap={{md:"6", base:'2'}} align='center'>
           <Flex gap={3} align='center'> <Text color='white' fontSize='20px' display={{base:'none', md:'block'}} >Wallate</Text> 
           <FranchiseNavWallate branchData={branchData}  /></Flex>
         <Menu>
            <MenuButton >
              <Icon as={FaUserTie} fontSize="32px" color='white'/>
            </MenuButton>
            <MenuList border='1px solid #d4cfcf'>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
              <MenuItem>Support</MenuItem>
            </MenuList>
          </Menu>
         </HStack>
        </HStack>
      </Box>
    );
  };
  
  export default FranchiseTopNav;
  