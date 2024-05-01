import {
  Box,
  Center,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import DOMPurify from "dompurify";

const NewsAndEvents = ({ notifications }) => {
 
  return (
    <Box>
      <UnorderedList style={{ listStyle: "none", padding: 0 }}>
        {notifications.map((notification) => (
          <Box key={notification.title} textAlign="center" position="relative" mt={4}>
            <ListItem>
              <Center
                display="flex"
                flexDirection="column"
                gap={2}
                borderBottom="1px dotted black"
                p={3}
              >
                {/* <Img boxSize='110px' src={center.image} alt="" />            */}
                <Text fontWeight="600" fontSize="24px">
                  {notification.title}
                </Text>
                <Text position="absolute" top="1px" right="0" fontSize="12px">
                  {" "}
                  {new Date(notification.createdAt).toLocaleDateString("en-GB")}
                </Text>

                <Text
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(notification.content),
                  }}
                />
              </Center>
            </ListItem>
          </Box>
        ))}
      </UnorderedList>
    </Box>
  );
};

export default NewsAndEvents;
