import { Box, Flex, HStack, Text } from "@chakra-ui/react";

const PageTitle = (props) => {
  return (
    <Box position="relative">
      <Box
        as="div"
        w="100vw"
        h={{base:"220px", md:"280px"}}
        bgImage="url(https://source.unsplash.com/1540x300/?computer)"
        bgSize="cover"
        filter="brightness(40%) contrast(70%)"
      ></Box>
      <Flex position="absolute" top="0" w="100vw" align="center" h="270px" >
        <HStack w="80%" mx="auto" justify="space-between" flexWrap="wrap" align='center'>
          <Text fontSize={{base: '26px', md:'30px'}} fontWeight="700" color="white">
            {props.pagetitle}
          </Text>
          <Flex gap={2} fontWeight='700' align='center'>
            <Text color='white' fontSize='14px'> HOME  </Text> 
            <Text color='white' fontSize='19px'> / </Text> 
            <Text color="#F15E00" fontSize='14px'> {props.pagetitle} </Text> 
           
          </Flex>
        </HStack>
      </Flex>
    </Box>
  );
};

export default PageTitle;
