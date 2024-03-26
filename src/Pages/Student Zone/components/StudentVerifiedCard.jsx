import { Box, Image, Text, Badge, Card, Center, Container } from "@chakra-ui/react";

const StudentVerifiedCard = ({ student }) => {
   
  return (
    <Container>
      <Center minH="60vh">
        <Card p={6} borderRadius="16px" w="456px" border="2px solid #d4cfcf">
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p="4"
      boxShadow="md"
    >
      <Image src={'/logo.png'} alt={student} borderRadius="md" />
      <Text mt="4" fontWeight="bold">{student}</Text>
      <Text mt="2">Father's Name: </Text>
      <Text>Date of Birth:</Text>
      <Text>Course: </Text>
      {/* {student.extra && <Badge variant="solid" colorScheme="green">{student.extra}</Badge>} */}
    </Box>
    </Card>
    </Center>
    </Container>

  );
};

export default StudentVerifiedCard;
