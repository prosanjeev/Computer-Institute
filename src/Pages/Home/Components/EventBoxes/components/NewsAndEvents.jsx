import { Box, Center, Img, ListItem, Text, UnorderedList } from "@chakra-ui/react";

const NewsAndEvents = () => {

    const notifications = [
        {
          id: 1,
          title: "Programming Workshop",
          date: "March 10, 2024",
          time: "10:00 AM - 12:00 PM",
          topic: "Introduction to Python Programming",
          description: "Join us for a hands-on workshop on Python programming. Learn the basics of Python syntax and programming concepts. No prior experience required. Limited seats available, so register now!"
        },
        {
          id: 2,
          title: "Job Placement Drive",
          date: "March 15, 2024",
          time: "9:00 AM - 5:00 PM",
          description: "Don't miss the opportunity to participate in our job placement drive. Companies from various industries will be recruiting for software development, IT support, and more. Prepare your resume and come dressed in professional attire. Open to all current students and alumni."
        }
      ];

  return (
    <Box><UnorderedList style={{ listStyle: "none", padding: 0 }}>
    {notifications.map((notification) => (
      <Box key={notification.id} textAlign='center' >
        <ListItem  >
          <Center display='flex' flexDirection='column' gap={2} borderBottom='1px dotted black' p={3} >

            {/* <Img boxSize='110px' src={center.image} alt="" />            */}
            <Text fontWeight='600' fontSize='24px'> {notification.title}</Text>
            <Text> Date: {notification.date}</Text>
            {notification.time && <p>Time: {notification.time}</p>}
          {notification.topic && <p>Topic: {notification.topic}</p>}
          <p>{notification.description}</p>

          </Center>
        </ListItem>
      </Box>
    ))}
  </UnorderedList>
  </Box>
  )
}

export default NewsAndEvents