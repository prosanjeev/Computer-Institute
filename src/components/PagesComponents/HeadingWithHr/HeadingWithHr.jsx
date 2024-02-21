import { Box, Stack, Text } from "@chakra-ui/react";
import "./HeadingWithHr.css";

const HeadingWithHr = (props) => {
  return (
    <Box w="100vw">
      <Stack w="80%" m='30px auto' p='30px' align='center'>
        <Text
          fontSize="30px"
          fontWeight="700"
          color="#444444"
          lineHeight="48px"
        >
         {props.heading}
        </Text>
        <div className="heading-hr-line" />
        {/* <Box as="div" w="6%" h='4px' color="#FF6C00" /> */}
        <Text textAlign='center' fontSize='18px' fontWeight="500" color='#777777'>{props.text}</Text>
      </Stack>
    </Box>
  );
};

export default HeadingWithHr;
