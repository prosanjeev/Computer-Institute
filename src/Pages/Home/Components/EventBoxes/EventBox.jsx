import BoxLayout from "./components/BoxLayout";
import { Box, Center, HStack } from "@chakra-ui/react";
import RecentlyJoinStudent from "./components/RecentlyJoinStudent";
import RecentlyJoinCenter from "./components/RecentlyJoinCenter";
import NewsAndEvents from "./components/NewsAndEvents";

function EventBox({ branchData, studentData, notifications }) { 

  return (
    <Box as="div" bgColor="brown" p="60px 0" w="100vw">
      <Center >
      <HStack w={{base:"80%", md:'80%'}}  flexWrap="wrap"   >
        <BoxLayout title='Recently Join Centres'  component={ <RecentlyJoinCenter branchData={ branchData } />}/> 
        <BoxLayout title='Recently Join Student' component={ <RecentlyJoinStudent studentData={studentData} />} />
        <BoxLayout title='News & Events' component={ <NewsAndEvents  notifications={notifications} />} />
      </HStack>  
      </Center>
    </Box>
  );
}

export default EventBox;
