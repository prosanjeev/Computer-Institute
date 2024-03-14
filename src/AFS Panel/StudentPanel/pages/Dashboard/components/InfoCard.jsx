import { HStack, Icon, Stack,Text } from "@chakra-ui/react";
import { BiSolidInstitution } from "react-icons/bi";
import { CustomCard } from "../../../../components/chakra/CustomCard";

const InfoCard = ({ imgUrl, text, tagText, inverted }) => {
  return (
    <CustomCard
      // bgColor={inverted ? "p.purple" : "white"}
    
      bgColor={ "#FC4B6C" }
      border="1px solid #D6405C"
      bgImage={imgUrl}
      bgSize="cover"
      bgRepeat="no-repeat"
      
    >
      <HStack justify="space-between" >
      <Icon pt={1} color="#D6405C" boxSize="80px" as={BiSolidInstitution } />
      <Stack px= "4" >
      <Text
        mt="1"
        fontWeight="800"
        textStyle="h1"
        color={ "white"}
      >
        736
      </Text>
      <Text
        fontWeight="medium"
        textStyle="h6"
        color={ "white"}
      >
        Branch
      </Text>
      </Stack>
     
      </HStack>
      
     
      
    </CustomCard>
  );
};

export default InfoCard;
