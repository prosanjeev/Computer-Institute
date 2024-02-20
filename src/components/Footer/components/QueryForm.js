import { Box, Button, FormControl,  Input, Stack } from "@chakra-ui/react"

const QueryForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
    };
    return (
        <Box as="form" onSubmit={handleSubmit} w='100%' alignItems="start" >
            <Stack w={{base:'90%', md:'80%'}} >
            <FormControl id="email" isRequired>
                <Input type="text" placeholder="Your Name" mb={{ base: 2, md: 0 }} bgColor='white' />
            </FormControl>
            <FormControl id="email" isRequired>
            <Input type="text" placeholder="Your Mobile No." mb={{ base: 2, md: 0 }} bgColor='white' />
            </FormControl>
            <FormControl id="email" isRequired>
            <Input type="text" placeholder="Enter your email address" mb={{ base: 2, md: 0 }} bgColor='white' />
            </FormControl>
            </Stack>
            <Button  mt={{ base: 0, md: 2 }} type="submit"  colorScheme='orange'>SUBSCRIBE</Button>

        </Box>
    )
}

export default QueryForm