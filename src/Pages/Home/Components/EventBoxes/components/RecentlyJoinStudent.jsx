import {
  Box,
  Center,
  Img,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

const RecentlyJoinStudent = ({ studentData }) => {
  return (
    <Box>
      <UnorderedList style={{ listStyle: "none", padding: 0 }}>
        {studentData.map((student, index) => (
          <Box key={index} textAlign="center">
            <ListItem>
              <Center
                display="flex"
                flexDirection="column"
                gap={2}
                borderBottom="1px dotted black"
                p={3}
              >
                <Img boxSize="110px" src={student.photoUrl} alt="" />

                <Text>
                  Name:{" "}
                  {student.studentName
                    ? student.studentName.toUpperCase()
                    : "Unknown"}
                </Text>
                <Text>
                  Course:{" "}
                  {student.courseName
                    ? student.courseName.toUpperCase()
                    : "Unknown"}
                </Text>
                <Text>
                  Branch:{" "}
                  {student.centerName
                    ? student.centerName.toUpperCase()
                    : "Unknown"}
                </Text>
              </Center>
            </ListItem>
          </Box>
        ))}
      </UnorderedList>
    </Box>
  );
};

export default RecentlyJoinStudent;
