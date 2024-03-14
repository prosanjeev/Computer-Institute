import { Box, Spinner, VisuallyHidden } from '@chakra-ui/react';

function Loader() {
  return (
    <Box
      position="absolute"
      top="0"
      right="20"
      bottom="0"
      left="20"
      margin="auto"
      width={['3em', null, null, 'auto']}
      height={['10', null, null, '32']}
      zIndex="50"
    >
      <Spinner size="lg" color="red" />
      <VisuallyHidden>Loading...</VisuallyHidden>
    </Box>
  );
}

export default Loader;
