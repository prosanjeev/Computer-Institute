import { Box, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import { CustomCard } from "../../../chakra/CustomCard";
import { BiSolidInstitution } from "react-icons/bi";
import { Link } from "react-router-dom";

const InfoCard = ({ imgUrl, name, info, inverted }) => {
  return (
    <CustomCard
      // bgColor={inverted ? "p.purple" : "white"}
    
      bgColor="#white" 
      border="1px solid black"
      borderRadius="20px 0 15px 0"
      bgImage={imgUrl}
      bgSize="cover"
      bgRepeat="no-repeat"
      boxShadow="2px 2px 4px  black"
      
    >
      <HStack justify="space-between" >
      <Icon pt={1} color="#D6405C" boxSize="80px" as={BiSolidInstitution } />
      <Stack px= "4" >
      <Text
        mt="1"
        fontWeight="800"
        textStyle="h1"
        textAlign="right"
        // color={ "white"}
      >
        {info}
      </Text>
      <Text
        fontWeight="medium"
        textStyle="h6"
        
        // color={ "white"}
      >
        {name}
      </Text>
      </Stack>
     
      </HStack>
      
     
      
    </CustomCard>
  );
};

export default InfoCard;
