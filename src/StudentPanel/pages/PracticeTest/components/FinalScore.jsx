import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const FinalScore = ({ score }) => {
  let message;

  if (score >= 8) {
    message = "Congratulations! You did great!";
  } else if (score >= 5) {
    message = "Good job! You passed.";
  } else {
    message = "Keep practicing! You can do better.";
  }
  
  return (
    <Box>
      <Text fontSize="xl">Your Final Score: {score}</Text>
      <Text mt={4}>{message}</Text>
    </Box>
  );
};

export default FinalScore;
