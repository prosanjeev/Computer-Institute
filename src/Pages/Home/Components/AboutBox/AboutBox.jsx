import React from "react";
import { Link } from "react-router-dom";
import { Divider, HStack, Img, Stack, Text } from "@chakra-ui/react";
import { c_name } from "../../../../info/Info";

const AboutBox = () => {
  return (
    <HStack m="40px auto" w="80%" gap={5} flexWrap={{base:'wrap', lg:'nowrap'}} >
        <Stack  >
            <Text fontSize="28px" fontWeight="700" color="#444444">WELCOME TO {c_name}</Text>
            <Divider width="60px" h="3px" bgColor="#ff6c00" borderRadius="100px 0 100px 0" my={5} />
            <Text fontSize={{base:"16px", md:'20px'}} color="#777777">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam a nostrum quas sapiente harum dolore rerum quos assumenda explicabo. Quos, voluptatum. Nemo distinctio consequuntur accusamus quidem sit, amet tenetur officiis deserunt dolor tempore quibusdam asperiores. Alias cum dignissimos culpa accusantium reiciendis suscipit, asperiores in, ducimus, voluptas illum laborum quaerat aliquam molestiae sequi? Nam, voluptate magni. Dolorum, tempora unde modi maxime, animi optio sapiente aliquid eaque, qui eius totam harum minima ex accusantium nobis cum iure. Et nisi dolorum, sint fugit, beatae modi sunt debitis dolores voluptas rerum, possimus sequi animi tenetur nobis voluptatem explicabo! Est, velit. Rerum possimus hic officia veniam odit tempora? Officia veritatis quos quasi omnis quaerat deleniti tenetur, quidem nostrum pariatur, eveniet, possimus molestias similique sit? Ratione facere praesentium, corporis a, deleniti quis necessitatibus tenetur in eaque, asperiores neque nulla non. Temporibus voluptatem deleniti molestiae, adipisci suscipit omnis nobis est modi necessitatibus repellat ad autem, odit recusandae cumque voluptates dicta aliquid aut magni, eaque dolorem in eius tempora laboriosam?
            </Text>
            <Link to="#">Read More..</Link>
        </Stack>
      <Img h='400px'  src="https://iotmate.co.in/wp-content/uploads/2020/01/feature1.png" alt="about-image" />
    </HStack>
  );
};

export default AboutBox;
