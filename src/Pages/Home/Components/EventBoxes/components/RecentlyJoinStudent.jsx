import { Box, Center, Img, ListItem, Text, UnorderedList } from "@chakra-ui/react";

const RecentlyJoinStudent = ({studentData}) => {

  return (
    <Box><UnorderedList style={{ listStyle: "none", padding: 0 }}>
    {studentData.map((student, index) => (
      <Box key={index} textAlign='center' >
        <ListItem  >
          <Center display='flex' flexDirection='column' gap={2} borderBottom='1px dotted black' p={3} >
            <Img boxSize='110px' src={student.photoUrl} alt="" />

            <Text>Name: {student.studentName.toUpperCase()}</Text>
            <Text>Course: {student.courseName.toUpperCase()}</Text>
            <Text>Branch: {student.centername.toUpperCase()}</Text>

          </Center>
        </ListItem>
      </Box>
    ))}
  </UnorderedList>
  </Box>
  )
}

export default RecentlyJoinStudent