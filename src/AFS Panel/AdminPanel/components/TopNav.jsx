import {
  Box,
  HStack,
  Heading,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { FaBars, FaUserTie } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const TopNav = ({ title, onOpen }) => {
  const navigate = useNavigate();
  // const user = JSON.parse(localStorage.getItem('user'))
  const handleLogout = () => {
    localStorage.clear('user');
    navigate('/admin-login');
}
  return (
    <Box px="4" bg="#2A3542" >
      <HStack maxW="80rem" h="16" justify="space-between" mx="auto">
        <Icon
          as={FaBars}
          color='white'
          boxSize={8}
          onClick={onOpen}
          display={{
            base: "block",
            lg: "none",
          }}
        />
        <Heading fontWeight="medium" fontSize="28px" color='white'>
          {title}
        </Heading>

        <Menu>
          <MenuButton >
            <Icon as={FaUserTie} fontSize="24px" color='white'/>
          </MenuButton>
          <MenuList border='1px solid #d4cfcf'>
            
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
            <MenuItem>Support</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default TopNav;
