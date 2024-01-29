import React from "react";
import ImageBox from "./components/ImageBox";
import { Flex } from "@chakra-ui/react";

function ImageBoxGrid() {
  let ImageBoxes = [
    {
      id: 1,
      name: "BASIC COMPUTER COURSES",
      url: "https://hypernetitsolutions.com/new/images/user/1650952150854.jpg",
    },
    {
      id: 2,
      name: "CERTIFICATE COURSE",
      url: "https://hypernetitsolutions.com/new/images/user/1650952242833.jpg",
    },
    {
      id: 2,
      name: "DIPLOMA COURSE",
      url: "https://hypernetitsolutions.com/new/images/user/1650952305695.jpg",
    },
    {
      id: 2,
      name: "LANGUAGE COURSE",
      url: "https://hypernetitsolutions.com/new/images/user/1650952345698.jpg ",
    },
    {
      id: 2,
      name: "TYPING COURSE",
      url: "https://hypernetitsolutions.com/new/images/user/1650952380660.png",
    },
    {
      id: 2,
      name: "PROFESSIONAL COURSES",
      url: "https://hypernetitsolutions.com/new/images/user/1650952242833.jpg",
    },
  ];

  return (
    <Flex flexWrap="wrap" w="80%" mx="auto" >
      {ImageBoxes.map((imagebox) => {
        return (
          <ImageBox name={imagebox.name} url={imagebox.url} key={imagebox.id} />
        );
      })}
    </Flex>
  );
}

export default ImageBoxGrid;
