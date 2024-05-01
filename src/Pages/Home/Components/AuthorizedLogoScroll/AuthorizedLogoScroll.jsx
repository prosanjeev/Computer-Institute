import React from "react";
import { Box, Flex, HStack, Image, keyframes } from "@chakra-ui/react";

// Define a keyframe for the animation
const scroll = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
`;

const AuthorizedLocationsScroll = () => {
  // Assuming authorizedLocations is an array of logo URLs
  const authorizedLocations = [
    "https://upload.wikimedia.org/wikipedia/en/3/3e/Skill_India.png",
    "https://5.imimg.com/data5/KS/RU/JK/SELLER-83054718/msme-certificate-500x500.jpg",
    "https://upload.wikimedia.org/wikipedia/en/4/46/Make_In_India.png",
    "https://upload.wikimedia.org/wikipedia/en/8/8c/Beti_Bachao_Beti_Padhao_logo.jpg",
    "https://www.arenasolutions.com/wp-content/uploads/what-is-iso-9001-compliance.png",
    "https://bl-i.thgim.com/public/incoming/1q3lle/article65854290.ece/alternates/FREE_1200/mca-logo.JPG",
    "https://seeklogo.com/images/N/niti-logo-0B7DECBE76-seeklogo.com.png",
  ];

  return (
    <Flex
      overflow="hidden"
      w="80%"
      h="150px"
      mx="auto"
      align="center"
      position="relative"
      my={10}
    >
      <HStack
        position="absolute"
        animation={`${scroll} 14s linear infinite`}
        // css={{
        //   "&:hover": {
        //     animationPlayState: "paused",
        //     cursor: "pointer",
        //   },
        // }}
        width="fit-content"
        gap={20}
        right={-100} // Start from the right
      >
        {authorizedLocations.map((logoUrl, index) => (
          <Box key={index} w='120px' p={2} border='1px solid gray' borderRadius='10px'>
            <Image
              src={logoUrl}
              alt={`Logo ${index + 1}`}
              h="100px" 
            />
          </Box>
        ))}
      </HStack>
    </Flex>
  );
};

export default AuthorizedLocationsScroll;
