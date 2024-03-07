import React, { useState } from 'react';
import { Box, Heading, Text, Grid, GridItem, Button, Select } from '@chakra-ui/react';

const FindCenter = () => {
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');

  // Dummy data for states and districts
  const states = ['State 1', 'State 2', 'State 3'];
  const districts = {
    'State 1': ['District 1A', 'District 1B', 'District 1C'],
    'State 2': ['District 2A', 'District 2B', 'District 2C'],
    'State 3': ['District 3A', 'District 3B', 'District 3C'],
  };

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    setSelectedDistrict('');
  };

  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
  };

  const handleSearch = () => {
    // Perform search based on selectedState and selectedDistrict
    console.log(`Searching for centers in ${selectedDistrict}, ${selectedState}`);
  };

  return (
    <Box p={4}>
      <Heading as="h2" size="lg" mb={4}>Find a Center</Heading>
      <Text mb={4}>Select a state and district to find centers:</Text>
      <Grid templateColumns="repeat(3, 1fr)" gap={4} mb={4}>
        <GridItem colSpan={1}>
          <Select placeholder="Select State" value={selectedState} onChange={handleStateChange}>
            {states.map((state) => (
              <option key={state} value={state}>{state}</option>
            ))}
          </Select>
        </GridItem>
        <GridItem colSpan={1}>
          <Select placeholder="Select District" value={selectedDistrict} onChange={handleDistrictChange}>
            {selectedState && districts[selectedState].map((district) => (
              <option key={district} value={district}>{district}</option>
            ))}
          </Select>
        </GridItem>
        <GridItem colSpan={1}>
          <Button colorScheme="blue" onClick={handleSearch}>Search</Button>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default FindCenter;
