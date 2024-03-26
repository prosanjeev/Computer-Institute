import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react";
import StudentSidenav from "./StudentSidenav";
import StudentSideDrawer from "./StudentSideDrawer";
import StudentTopNav from "./StudentTopNav";

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
       <StudentSidenav/>
      </Box>
      
      <StudentSideDrawer isOpen={isOpen} onClose={onClose} />
      <Box flexGrow={1}>
        <StudentTopNav title={title} onOpen={onOpen}/>
       
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
