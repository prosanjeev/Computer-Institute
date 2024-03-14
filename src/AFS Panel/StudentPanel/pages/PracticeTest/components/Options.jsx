// src/Options.js
import React from 'react';
import { Box, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react';

const Options = ({ options, selectedOption, onChange, disabled }) => {
  return (
    <RadioGroup value={selectedOption} onChange={onChange}>
      <Stack direction="column">
        {options.map((option) => (
          <Box border='1px solid gray' w='500px' p={2} borderRadius='25'>
            <Radio key={option.id} value={option.id} isDisabled={disabled} >
           <Text fontSize='larger'> {option.text}</Text>
          </Radio>
          </Box>
        ))}
      </Stack>
    </RadioGroup>
  );
};

export default Options;
