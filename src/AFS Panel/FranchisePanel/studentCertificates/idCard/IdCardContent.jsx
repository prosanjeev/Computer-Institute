import { Box, Text, Image } from "@chakra-ui/react";

const IDCard = ({ studentData, backgroundImageUrl }) => {
  const { studentName, centerName, courses, dateOfBirth, photoUrl } =
    studentData || "null";
  return (
    <Box
      border="1px solid gray "
      h="440px"
      overflow="hidden"
      backgroundImage={`url(${backgroundImageUrl})`}
      backgroundSize="cover"
      position="relative"
    >
      <Box position="absolute" left="420px" top="218px" fontSize="20px">
        <Text>
          {centerName && centerName.length > 30
            ? centerName.substring(0, 30) + "..."
            : centerName}
        </Text>
        <Text> {studentName}</Text>

        <Text>
          {courses && courses.length > 30
            ? courses.substring(0, 20) + "..."
            : courses}
        </Text>

        <Text> {new Date(dateOfBirth).toLocaleDateString("en-GB")} </Text>
      </Box>
      <Image
        position="absolute"
        left="62px"
        top="161px"
        src={photoUrl}
        alt={studentName}
        borderRadius="full"
        boxSize="155px"
      />
    </Box>
  );
};

export default IDCard;
