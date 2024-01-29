import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react";
import SideDrawer from "../../AdminPanel/components/SideDrawer";
import TopNav from "../../AdminPanel/components/TopNav";
import FranchiseSidenav from "./StudentSidenav";

const StudentDashboardLayout = ({ title, children }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Flex>
      <Box
        display={{
          base: "none",
          lg: "flex",
        }}
      >
       {/* dfdsf */}
       <FranchiseSidenav/>
      </Box>
      <SideDrawer isOpen={isOpen} onClose={onClose} />
      <Box flexGrow={1}>
        <TopNav title={title} onOpen={onOpen} />
        <Container
          overflowX="hidden"
          overflowY="auto"
          h="calc(100vh - 88px)"
          mt="6"
          maxW="70rem"
        >
          {children}
        </Container>
      </Box>
    </Flex>
  );
};

export default StudentDashboardLayout;
