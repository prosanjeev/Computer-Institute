import { Box, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import PageTitle from "../../components/PagesComponents/PageTitleSection/PageTitle";
import { wrap } from "framer-motion";

const OurTeam = () => {
   const teamList = [
    {
      url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyABtacOfSl8WS6TxLnDKIPRKqd7Pr2JUg5AGEg2LbYtX_KhmvxztFYeQjTTHdxKajkcs&usqp=CAU",
      name: "A Kumar",
      position: "(Managing Director)",
    },
    {
      url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyABtacOfSl8WS6TxLnDKIPRKqd7Pr2JUg5AGEg2LbYtX_KhmvxztFYeQjTTHdxKajkcs&usqp=CAU",
      name: "S Kumar",
      position: "(Associate Director)",
    },
    {
      url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyABtacOfSl8WS6TxLnDKIPRKqd7Pr2JUg5AGEg2LbYtX_KhmvxztFYeQjTTHdxKajkcs&usqp=CAU",
      name: "Sophia",
      position: "(Admin)",
    },
    {
      url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyABtacOfSl8WS6TxLnDKIPRKqd7Pr2JUg5AGEg2LbYtX_KhmvxztFYeQjTTHdxKajkcs&usqp=CAU",
      name: "Sophia",
      position: "(Admin)",
    },
    {
      url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyABtacOfSl8WS6TxLnDKIPRKqd7Pr2JUg5AGEg2LbYtX_KhmvxztFYeQjTTHdxKajkcs&usqp=CAU",
      name: "Sophia",
      position: "(Admin)",
    },
    {
      url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyABtacOfSl8WS6TxLnDKIPRKqd7Pr2JUg5AGEg2LbYtX_KhmvxztFYeQjTTHdxKajkcs&usqp=CAU",
      name: "Sophia",
      position: "(Admin)",
    },
    {
      url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyABtacOfSl8WS6TxLnDKIPRKqd7Pr2JUg5AGEg2LbYtX_KhmvxztFYeQjTTHdxKajkcs&usqp=CAU",
      name: "Sophia",
      position: "(Managing Director)",
    },
    {
      url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyABtacOfSl8WS6TxLnDKIPRKqd7Pr2JUg5AGEg2LbYtX_KhmvxztFYeQjTTHdxKajkcs&usqp=CAU",
      name: "Sophia",
      position: "(Managing Director)",
    },
    {
      url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyABtacOfSl8WS6TxLnDKIPRKqd7Pr2JUg5AGEg2LbYtX_KhmvxztFYeQjTTHdxKajkcs&usqp=CAU",
      name: "Sophia",
      position: "(Admin)",
    },
    {
      url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyABtacOfSl8WS6TxLnDKIPRKqd7Pr2JUg5AGEg2LbYtX_KhmvxztFYeQjTTHdxKajkcs&usqp=CAU",
      name: "Sophia",
      position: "(Admin)",
    },
    {
      url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyABtacOfSl8WS6TxLnDKIPRKqd7Pr2JUg5AGEg2LbYtX_KhmvxztFYeQjTTHdxKajkcs&usqp=CAU",
      name: "Solpha",
      position: "(Managing Director)",
    },
    {
      url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyABtacOfSl8WS6TxLnDKIPRKqd7Pr2JUg5AGEg2LbYtX_KhmvxztFYeQjTTHdxKajkcs&usqp=CAU",
      name: "Sophia",
      position: "(Admin)",
    },
  
 
   ]

  return (
    <>
    <PageTitle pagetitle="OUR TEAM" /> 
    
    <Box w="100vw">
    <Flex  w="80%"  mx="auto" my={10} p={5}>

     <HStack spacing={8} flexWrap="wrap" justifyContent="center">
     {teamList.map((team)=>(
        <Flex key="team.name" align="center" w="150px" flexDirection="column" >
        <Box border="1px solid gray" borderRadius="md" p="2"  height="150px">
        <img src={team.url} alt="" height="150px"  width="150px"/>
        </Box>
        
        <Box align="center">
        <Text fontSize="14px" fontWeight={500}> {team.name} </Text>
        <Text> {team.position} </Text>
        </Box>
      </Flex>
      ))} 
     </HStack>
      
    </Flex>
    </Box>
    </>
  )
}

export default OurTeam