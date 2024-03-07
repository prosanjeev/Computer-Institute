import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react";
import SideDrawer from "../../AdminPanel/components/SideDrawer";
import FranchiseSidenav from "./FranchiseSidenav";
import FranchiseTopNav from "./FranchiseTopNav";

const FranchiseDashboardLayout = ({ title, children }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Flex>
      <Box
        display={{
          base: "none",
          lg: "flex",
        }}  
      >
       <FranchiseSidenav/>
      </Box>
      <SideDrawer isOpen={isOpen} onClose={onClose} />
      <Box flexGrow={1}>
        <FranchiseTopNav title={title} onOpen={onOpen} />
        <Container
          overflowX="hidden"
          overflowY="auto"
          h="calc(100vh - 88px)"
          mt="6"
          maxW="100rem"
        >
          {children}
        </Container>
      </Box>
    </Flex>
  );
};

export default FranchiseDashboardLayout;
