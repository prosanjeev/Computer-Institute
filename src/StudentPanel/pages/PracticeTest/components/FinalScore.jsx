import React from 'react';
import { Box, Text} from '@chakra-ui/react';

const FinalScore = ({ score, questions, answeredQuestions }) => {
  let message;

  if (score >= 8) {
    message = "Congratulations! You did great!";
  } else if (score >= 5) {
    message = "Good job! You passed.";
  }else if( score >= 1 ){
    message = "Keep practicing! You can do better.";
  } else {
    message = "First Learn then do Exam.";
  }


  return (
    <Box>
      <Text fontSize="xxx-large" color='InfoText'>Your Final Score: {score}</Text>
      <Text mt={4} fontSize='xx-large'>{message}</Text>
      <Box mt={8}>
        {questions.map((question, index) => {
          const answered = answeredQuestions.includes(index);
          const selectedOptionId = answered ? question.options.find(option => option.isSelected)?.id : null;
          const isCorrect = answered && question.options.find(option => option.id === selectedOptionId)?.isCorrect;
          const borderColor = isCorrect ? "green.400" : "red.400";

          return (
            <Box key={question.id} borderWidth="1px" borderRadius="md" p={4} mt={4} borderColor={borderColor}>
              <Text fontSize="lg">{question.text}</Text>
              {answered && (
                <Box mt={2}>
                  <Text>
                    Selected Option: <Text as="span" color={isCorrect ? "green.400" : "red.400"}>{question.options.find(option => option.id === selectedOptionId)?.text}</Text>
                  </Text>
                  {!isCorrect && (
                    <Text>
                      Correct Option: <Text as="span" color="green.400">{question.options.find(option => option.isCorrect)?.text}</Text>
                    </Text>
                  )}
                </Box>
              )}
              <Text mt={2} color={isCorrect ? "green.400" : "red.400"}>
                {isCorrect ? "Correct" : "Wrong"}
              </Text>
            </Box>
          );
        })}
      </Box>
      
    </Box>
  );
};

export default FinalScore;
