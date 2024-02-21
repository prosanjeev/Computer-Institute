import React from "react";
import { Box, Img, Text } from "@chakra-ui/react";

function ImageBox(props) {
  return (
    <Box w="370px" h="250px" m="50px auto" textAlign="center" border="1px solid #ecd4d4"  
    boxShadow='0 4px 6px rgba(250, 123, 29, 0.3)'
    >  
        <Img   src={props.url} alt=""  h="100%" w="100%" borderBottom="3px solid #FA7B1D" />
      <Text fontSize="15px" lineHeight={6} fontWeight="700" color="#4a4a4a" py={2}>
        {props.name}
      </Text>
    </Box>
  );
}

export default ImageBox;
