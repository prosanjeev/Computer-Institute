import Event from "./components/Event";
import { Box, Center, HStack } from "@chakra-ui/react";

function EventBox() {
  return (
    <Box as="div" bgColor="brown" p="60px 0" w="100vw">
      <Center>
      <HStack w={{base:"80%", md:'100%'}}  flexWrap="wrap" gap={12}  justify='center'>
        <Event text="Recently Join Centres"  />
        <Event text="Recently Join Student" />
        <Event text="News & Events" />
      </HStack>  
      </Center>
    </Box>
  );
}

export default EventBox;
