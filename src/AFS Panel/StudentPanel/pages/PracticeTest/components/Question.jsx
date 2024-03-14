import { Text } from '@chakra-ui/react';
import React from 'react';

const Question = ({ question, serialNumber }) => {
  return (
    <>
      <Text fontSize='20px' mb={2}>Question {serialNumber}: {question.text}</Text>
    </>
  );
};

export default Question;
