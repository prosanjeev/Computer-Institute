import { Card, Text } from '@chakra-ui/react'
import React from 'react'
// import { useSelector } from 'react-redux';

const FranchiseNavWallate = () => {
//   const { totalPrice } = useSelector((state) => state.cart);
//   console.log(totalPrice)

  return (
    <Card px={5} py={0}><Text fontSize='28px' fontWeight='600'>
         {/* ₹{totalPrice} */}
         ₹1800
     </Text> </Card>
  )
}

export default FranchiseNavWallate