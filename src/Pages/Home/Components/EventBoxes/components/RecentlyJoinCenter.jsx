import {
  Box,
  Center,
  Img,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

const RecentlyJoinCenter = ({ branchData }) => {
  if (!Array.isArray(branchData)) {
    return null; // or display a message indicating that the data is invalid
  }

  return (
    <Box>
      <UnorderedList style={{ listStyle: "none", padding: 0 }}>
        {branchData.map((center, index) => (
          <Box key={index} textAlign="center">
            <ListItem>
              <Center
                display="flex"
                flexDirection="column"
                gap={2}
                borderBottom="1px dotted black"
                p={3}
              >
                <Text>
                  {center.centerName
                    ? center.centerName.toUpperCase()
                    : "Unknown"}
                </Text>
                <Img boxSize="110px" src={center.logoUrl} alt="" />
                <Text>
                  {center.directorName
                    ? center.directorName.toUpperCase()
                    : "Unknown"}
                </Text>
                <Text>{center.centerId}</Text>
              </Center>
            </ListItem>
          </Box>
        ))}
      </UnorderedList>
    </Box>
  );
};

export default RecentlyJoinCenter;
