import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react";
import FranchiseSidenav from "./FranchiseSidenav";
import FranchiseTopNav from "./FranchiseTopNav";
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {  fetchFranchiseDataOnly, selectbranchData } from "../../redux/franchise/authSlice";
import FranchiseSideDrawer from "./FranchiseSideDrawer";

const FranchiseDashboardLayout = ({ title, children }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const dispatch = useDispatch();
  const branchData = useSelector(selectbranchData);

  useEffect(() => {
    dispatch(fetchFranchiseDataOnly());
  }, [dispatch]);

  return (
    <Flex>
      <Box
        display={{
          base: "none",
          lg: "flex",
        }}  
      >
    
       <FranchiseSidenav branchData={branchData}/>
      </Box>
      <FranchiseSideDrawer isOpen={isOpen} onClose={onClose} branchData={branchData} />
      <Box flexGrow={1}>
        <FranchiseTopNav title={title} onOpen={onOpen} branchData={branchData} />
        <Container
          overflowX="hidden"
          overflowY="auto"
          h="calc(100vh - 88px)"
          mt="6"
          maxW={{md:"100rem", base:'100vw'}} mx='auto'
        >
          {children}
        </Container>
      </Box>
    </Flex>
  );
};

export default FranchiseDashboardLayout;
