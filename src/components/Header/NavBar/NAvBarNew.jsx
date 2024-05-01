import React, { useState } from "react";
import "./NavbarNew.css";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { menuItems } from "./data/data";

function NAvBarNew() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSubMenuToggle = (label) => {
    setOpenSubMenu(openSubMenu === label ? null : label);
  };

  return (
    <Box minW="100vw" bgColor=" #034C7F">
      <Flex
        as="nav"
        align="center"
        mx="auto"
        w={{ base: "90%", md: "80%" }}
        h={{ base: "55px", md: "80%" }}
        justify={{ base: "end", md: "none" }}
        boxShadow="1px 1px 10px 3px rgba(0, 0, 0, 0.1)"
      >
        <Box
          as="ul"
          className="navigation-menu"
          color="white"
          display={{ base: "none", md: "flex" }}
          w="100%"
          h="50px"
          listStyleType="none"
          zIndex={1}
        >
          {menuItems.map((menuItem, index) => (
            <Box as="li" key={index}>
              <Link to={menuItem.link}>
                {menuItem.label}
                {menuItem.subMenu && <IoIosArrowDown />}
              </Link>
              {menuItem.subMenu && (
                <ul>
                  {menuItem.subMenu.map((subMenuItem, subIndex) => (
                    <li key={subIndex}>
                      <Link to={subMenuItem.link}>{subMenuItem.label}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </Box>
          ))}
        </Box>
        <IconButton
          icon={<HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: "none" }}
          onClick={handleToggle}
        />
      </Flex>
      <Drawer isOpen={isOpen} placement="left" onClose={handleToggle}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>M-Tech Computer Institute</DrawerHeader>
          <DrawerBody>
            {menuItems.map((list) => (
              <React.Fragment key={list.label}>
                <Button
                  colorScheme="teal"
                  mb={2}
                  w="100%"
                  key={list.label}
                  onClick={() => handleSubMenuToggle(list.label)}
                >
                  {list.label}
                  {list.subMenu && <IoIosArrowDown />}
                </Button>
                {list.subMenu && openSubMenu === list.label && (
                  <Box ml={4}>
                    {list.subMenu.map((subMenuItem) => (
                      <Link to={subMenuItem.link} key={subMenuItem.label}>
                        <Button
                          colorScheme="gray"
                          mb={2}
                          w="100%"
                          onClick={() => console.log(subMenuItem.link)}
                        >
                          {subMenuItem.label}
                        </Button>
                      </Link>
                    ))}
                  </Box>
                )}
              </React.Fragment>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default NAvBarNew;
