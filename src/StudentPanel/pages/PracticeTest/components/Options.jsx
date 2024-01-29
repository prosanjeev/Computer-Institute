// src/Options.js
import React from 'react';
import { Radio, RadioGroup, Stack } from '@chakra-ui/react';

const Options = ({ options, selectedOption, onChange, disabled }) => {
  return (
    <RadioGroup value={selectedOption} onChange={onChange}>
      <Stack direction="column">
        {options.map((option) => (
          <Radio key={option.id} value={option.id} isDisabled={disabled}>
            {option.text}
          </Radio>
        ))}
      </Stack>
    </RadioGroup>
  );
};

export default Options;
