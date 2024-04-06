import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react";
import FranchiseSidenav from "./FranchiseSidenav";
import FranchiseTopNav from "./FranchiseTopNav";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFranchiseData, selectbranchData } from "../../redux/franchise/authSlice";
import FranchiseSideDrawer from "./FranchiseSideDrawer";

const FranchiseDashboardLayout = ({ title, children }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const dispatch = useDispatch();
  const branchData = useSelector(selectbranchData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchFranchiseData())
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false));
  }, [dispatch]);
  // console.log("branchData:", branchData);
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
      <FranchiseSideDrawer isOpen={isOpen} onClose={onClose} />
      <Box flexGrow={1}>
        <FranchiseTopNav title={title} onOpen={onOpen} branchData={branchData} />
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
