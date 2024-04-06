import {
  Box,
  Image,
  Text,
  Badge,
  Card,
  Center,
  Container,
  Flex,
} from "@chakra-ui/react";
import { toast } from "react-toastify";

const StudentVerifiedCard = ({ studentData }) => {
  console.log("Abc", studentData);

  if (!studentData) {
    toast.error("Student Not Registered");
    return null;
  }

  return (
    <Container>
      <Center minH={{ md: "60vh", base: "300px" }}>
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
            {studentData ? (
              <Box>
                <Flex
                  align="start"
                  position={{ md: "relative", base: "relative" }}
                  flexWrap="wrap"
                >
                  <Box flex="1" w={{ base: "90vw" }}>
                    <Text
                      fontWeight="bold"
                      fontSize={{ base: "16px", md: "20px" }}
                    >
                      {studentData.studentName}
                    </Text>
                    <Text>Gender: {studentData.gender}</Text>
                    <Text>Father's Name: {studentData.fatherName}</Text>
                    <Text>
                      Date of Birth:{" "}
                      {new Date(studentData.dateOfBirth).toLocaleDateString(
                        "en-GB"
                      )}
                    </Text>
                    <Text>
                      Reg. DATE:{" "}
                      {new Date(studentData.createdAt).toLocaleDateString(
                        "en-GB"
                      )}
                    </Text>
                    <Text>COURSE: {studentData.courses.join(", ")}</Text>
                  </Box>

                  <Image
                    ml="4"
                    h={{ md: "90px", base: "55px" }}
                    position={{ md: "absolute", base: "absolute" }}
                    right={{ md: "0", base: "0" }}
                    src={studentData.photoUrl}
                    alt={studentData.studentName}
                    borderRadius="md"
                  />
                </Flex>
                <Badge
                  colorScheme="green"
                  fontWeight="bold"
                  fontSize={{ md: "20px", base: "12px" }}
                  mt={5}
                >
                  STUDENT VERIFIED SUCCESSFULLY
                </Badge>
              </Box>
            ) : (
              <Text>Not Found</Text>
            )}
          </Box>
        </Card>
      </Center>
    </Container>
  );
};

export default StudentVerifiedCard;
