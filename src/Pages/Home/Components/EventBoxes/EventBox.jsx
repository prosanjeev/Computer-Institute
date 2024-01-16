import Event from "./components/Event";
import { Box, Center, HStack } from "@chakra-ui/react";

function EventBox() {
  return (
    <Box as="div" bgColor="brown" p="20px 0" w="100vw">
      <Center>
      <HStack w="80%" margin="20px 0" flexWrap="wrap" gap={7}>
        <Event text="Recently Join Centres"  />
        <Event text="Recently Join Student" />
        <Event text="News & Events" />
      </HStack>  
      </Center>
    </Box>
  );
}

export default EventBox;
