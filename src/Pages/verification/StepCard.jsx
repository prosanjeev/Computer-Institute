import React, { useState } from "react";
import { Box, Button, Card, Flex, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const StepCard = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [confirmed, setConfirmed] = useState(false);

  const steps = [
    {
      title: "Step 1 :",
      info: 'Please check the URL in the addressbar begins with "Computer.in" :',
      content: "If that is correct, hit next.",
    },
    {
      title: "Step 2 :",
      content: "Dynamic content for Step 2",
      subData: {
        key1: "value1",
        key2: "value2",
      },
    },
    {
      title: "Step 3 :",
      content: "Dynamic content for Step 3",
      subData: {
        key1: "value1",
        key2: "value2",
      },
    },
    {
      title: "Step 4 :",
      content: "Dynamic content for Step 4",
      subData: {
        key1: "value1",
        key2: "value2",
      },
    },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prevStep) => prevStep + 1);
    } else {
      setConfirmed(true);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((prevStep) => prevStep - 1);
      setConfirmed(false);
    }
  };

  const handleConfirmation = () => {
    if (currentStep === steps.length - 1) {
      setConfirmed(true);
      // Show alert and navigate
      alert("Thank you!");
      navigate("/");
    }
  };

  return (
    <Card p={10} border='10px solid gray'>
      <VStack spacing={4} alignItems="start">
        <Text fontSize="xl">{steps[currentStep].title}</Text>
        <Text>{steps[currentStep].content}</Text>
        <Text> {steps[currentStep]?.subData?.key1}</Text>
        <Text> {steps[currentStep]?.subData?.key2}</Text>
        <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between" w='100%'>
          <Flex>
            {steps.map((step, index) => (
              <Box
                key={index}
                w="15px"
                h="15px"
                borderRadius="50%"
                bg={index === currentStep ? 'blue.500' : 'gray.200'}
                mx="2"
                cursor="pointer"
                onClick={() => setCurrentStep(index)}
              />
            ))}
          </Flex>
          <Box mt={{ base: 4, md: 0 }}>
            {currentStep !== 0 && currentStep !== steps.length - 1 && (
              <Button onClick={handlePrevious} disabled={currentStep === 0}>
                Previous
              </Button>
            )}
            <Button onClick={currentStep === steps.length - 1 ? handleConfirmation : handleNext} ml={2}>
              {currentStep === steps.length - 1 ? (confirmed ? 'Confirm' : 'All details are matching') : 'Next'}
            </Button>
          </Box>
        </Flex>
      </VStack>
    </Card>
  );
};

export default StepCard;
