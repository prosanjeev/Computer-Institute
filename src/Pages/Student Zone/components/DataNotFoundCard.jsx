import { Box, Text, Card, Center, Container } from "@chakra-ui/react";

const DataNotFoundCard = () => {
  return (
    <Container mb={{ base: "20", md: "0" }}>
      <Center minH={{ md: "60vh" }}>
        <Card
          p={{ base: "1", md: "5" }}
          borderRadius="16px"
          w="456px"
          border="2px solid #d4cfcf"
        >
          <Box
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p="4"
            boxShadow="md"
          >
            <Text>Student Not Found with this Reg. No.....</Text>
          </Box>
        </Card>
      </Center>
    </Container>
  );
};

export default DataNotFoundCard;
