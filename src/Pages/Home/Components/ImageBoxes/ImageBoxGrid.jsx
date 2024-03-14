import React from "react";
import ImageBox from "./components/ImageBox";
import { Flex } from "@chakra-ui/react";

function ImageBoxGrid() {
  let ImageBoxes = [
    {
      id: 1,
      name: "BASIC COMPUTER COURSES",
      url: "https://source.unsplash.com/300x300/?computer",
    },
    {
      id: 2,
      name: "CERTIFICATE COURSE",
      url: "https://source.unsplash.com/300x300/?class",
    },
    {
      id: 3,
      name: "DIPLOMA COURSE",
      url: "https://source.unsplash.com/300x300/?diploma",
    },
    {
      id: 4,
      name: "LANGUAGE COURSE",
      url: "https://source.unsplash.com/300x300/?programing ",
    },
    {
      id: 5,
      name: "TYPING COURSE",
      url: "https://source.unsplash.com/300x300/?typing",
    },
    {
      id: 6,
      name: "PROFESSIONAL COURSES",
      url: "https://source.unsplash.com/300x300/?professional",
    },
  ];

  return (
    <Flex flexWrap="wrap" w="80%" mx="auto" gap={12} >
      {ImageBoxes.map((imagebox) => {
        return (
          <ImageBox name={imagebox.name} url={imagebox.url} key={imagebox.id} />
        );
      })}
    </Flex>
  );
}

export default ImageBoxGrid;
