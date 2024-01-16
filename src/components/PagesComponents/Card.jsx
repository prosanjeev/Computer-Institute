import React from "react";
import { Card as ChakraCard } from "@chakra-ui/react";
const Card = ({ children, showCard = false, ...props }) => {
  return (
    <ChakraCard
      bg={{
        base: showCard ? "white" : "transparent",
        md: "white",
      }}
      p={{
        base: showCard ? "4" : "0",
        md: "4",
      }}
      pl={{
        base: showCard ? "4" : "0",
        md: "0",
      }}
      borderRadius={{
        base: showCard ? "1rem" : "none",
        md: "1rem",
      }}
     
      boxShadow={{
        base: showCard ? "md" : "none",
        md: "lg",
      }}
      {...props}
    >
      {children}
    </ChakraCard>
  );
};

export default Card;
