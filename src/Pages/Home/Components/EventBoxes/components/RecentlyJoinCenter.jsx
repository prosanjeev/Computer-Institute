import { Box, Center, Img, ListItem, Text, UnorderedList } from "@chakra-ui/react";

const RecentlyJoinCenter = () => {

    const Centers = [
        {
          name: "SONI KUMARI",
          branch: "MS Computer Training Institute",
          code: "CO102",
          image: "/student/soni.jpeg",
        },
        {
          name: "HIMANSHU PATEL",         
          branch: "Computer World",
          code: "CO142",
          image: "/student/akash.jpeg",
        },
        {
          name: "Priyanka PATEL",         
          branch: "SK Computer Classes",
          code: "CO112",
          image: "/student/beauti.jpeg",
        },
      ];

  return (
    <Box><UnorderedList style={{ listStyle: "none", padding: 0 }}>
    {Centers.map((center, index) => (
      <Box key={index} textAlign='center' >
        <ListItem  >
          <Center display='flex' flexDirection='column' gap={2} borderBottom='1px dotted black' p={3} >

            <Text> {center.name.toUpperCase()}</Text>
            <Img boxSize='110px' src={center.image} alt="" />           
            <Text> {center.branch}</Text>
            <Text> {center.code}</Text>

          </Center>
        </ListItem>
      </Box>
    ))}
  </UnorderedList>
  </Box>
  )
}

export default RecentlyJoinCenter