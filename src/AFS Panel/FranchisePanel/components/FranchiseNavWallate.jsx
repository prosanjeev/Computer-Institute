import { Card, Text } from '@chakra-ui/react'
import React from 'react'
// import { useSelector } from 'react-redux';

const FranchiseNavWallate = ({branchData} ) => {

  return (
    <Card px={5} py={0}><Text fontSize='28px' fontWeight='600'>
        
         {branchData && branchData.wallet ? branchData.wallet : 0}₹
     </Text> </Card>
  )
}

export default FranchiseNavWallate