import { Stack, Text } from "@chakra-ui/react"

const Card = ({branchData}) => {
  return (
    <Card h={40} w="auto" p={10} >
          
    <Stack align='center'>
      <Text fontSize='24px'> Wallet:</Text>
      <Text   fontSize='30px' fontWeight='600'> {branchData && branchData.wallet}₹</Text>
    </Stack>
   
  </Card>
  )
}

export default Card