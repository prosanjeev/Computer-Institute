import { Box, Image, Text, Badge } from "@chakra-ui/react";

const VerifiedCard = ({ student }) => {
   
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p="4"
      boxShadow="md"
    >
      <Image src={'ret'} alt={student} borderRadius="md" />
      <Text mt="4" fontWeight="bold">{student}</Text>
      <Text mt="2">Father's Name: </Text>
      <Text>Date of Birth:</Text>
      <Text>Course: </Text>
      {/* {student.extra && <Badge variant="solid" colorScheme="green">{student.extra}</Badge>} */}
    </Box>
  );
};

export default VerifiedCard;
