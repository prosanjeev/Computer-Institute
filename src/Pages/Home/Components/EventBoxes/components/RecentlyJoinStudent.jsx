import { Box, Center, Img, ListItem, Text, UnorderedList } from "@chakra-ui/react";

const RecentlyJoinStudent = () => {

    const students = [
        {
          name: "SONI KUMARI",
          course: "Advance Diploma in Computer Application",
          branch: "Global Computer Training Institute",
          image: "/student/soni.jpeg",
        },
        {
          name: "HIMANSHU PATEL",
          course: "Advance Diploma in Computer Application",
          branch: "Global Computer Training Institute",
          image: "/student/akash.jpeg",
        },
        {
          name: "Priyanka PATEL",
          course: "Advance Diploma in Computer Application",
          branch: "Global Computer Training Institute",
          image: "/student/beauti.jpeg",
        },
      ];

  return (
    <Box><UnorderedList style={{ listStyle: "none", padding: 0 }}>
    {students.map((student, index) => (
      <Box key={index} textAlign='center' >
        <ListItem  >
          <Center display='flex' flexDirection='column' gap={2} borderBottom='1px dotted black' p={3} >
            <Img boxSize='110px' src={student.image} alt="" />

            <Text>Name: {student.name.toUpperCase()}</Text>
            <Text>Course: {student.course}</Text>
            <Text>Branch: {student.branch}</Text>

          </Center>
        </ListItem>
      </Box>
    ))}
  </UnorderedList>
  </Box>
  )
}

export default RecentlyJoinStudent