import { Box, HStack, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { BiSupport } from "react-icons/bi";
import { ChevronDownIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { navLinks } from "./navList/navLinks";
import { MdKeyboardArrowRight } from "react-icons/md";

const Sidenav = () => {
  const location = useLocation();

  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const handleMenuClick = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
    setActiveSubmenu(null);
  };

  const handleSubmenuClick = (index) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  const isActiveLink = (link) => {
    return location.pathname === link;
  };

  return (
    <Stack
      bg="#00073D"
      justify="space-between"
      boxShadow={{
        base: "none",
        lg: "lg",
      }}
      w={{
        base: "full",
        lg: "16rem",
      }}
      h="100vh"
    >
      <Box>
        <Heading
          textAlign="center"
          fontSize="20px"
          as="h1"
          pt="3.5rem"
          color="orange"
        >
          @M-Tech Computer
        </Heading>
        <Box mt="6" mx="3">
          {navLinks.map((nav, index) => (
            <Box key={nav.text}>
              {nav.submenu ? (
                <>
                  <HStack
                    onClick={() => handleMenuClick(index)}
                    bg={isActiveLink(nav.link) ? "#F3F3F7" : "transparent"}
                    color={isActiveLink(nav.link) ? "#1A202C" : "#797E82"}
                    borderRadius="10px"
                    py="4"
                    px="5"
                    _hover={{
                      bg: "#F3F3F7",
                      color: "#171717",
                    }}
                    cursor="pointer"
                  >
                    <Icon boxSize={4} as={nav.icon} />
                    <Text fontSize="18px" fontWeight="500">
                      {nav.text}
                    </Text>
                    {activeMenu === index ? (
                      <ChevronLeftIcon />
                    ) : (
                      <ChevronDownIcon />
                    )}
                  </HStack>
                  {activeMenu === index && (
                    <Stack ml="4">
                      {nav.submenu.map((item, subIndex) => (
                        <Link to={item.link} key={item.text}>
                          <HStack
                            onClick={() => handleSubmenuClick(subIndex)}
                            bg={
                              isActiveLink(item.link)
                                ? "#F3F3F7"
                                : "transparent"
                            }
                            color={
                              isActiveLink(item.link) ? "#1A202C" : "#797E82"
                            }
                            borderRadius="10px"
                            py="3"
                            px="8"
                            _hover={{
                              bg: "#F3F3F7",
                              color: "#171717",
                            }}
                          >
                            <Icon
                              boxSize={4}
                              as={item.icon ? item.icon : MdKeyboardArrowRight}
                            />
                            <Text fontSize="16px" fontWeight="500">
                              {item.text}
                            </Text>
                          </HStack>
                        </Link>
                      ))}
                    </Stack>
                  )}
                </>
              ) : (
                <Link to={nav.link}>
                  <HStack
                    bg={isActiveLink(nav.link) ? "#F3F3F7" : "transparent"}
                    color={isActiveLink(nav.link) ? "#1A202C" : "#797E82"}
                    borderRadius="10px"
                    py="3"
                    px="4"
                    _hover={{
                      bg: "#F3F3F7",
                      color: "#171717",
                    }}
                  >
                    <Icon boxSize={4} as={nav.icon} />
                    <Text fontSize="16px" fontWeight="500">
                      {nav.text}
                    </Text>
                  </HStack>
                </Link>
              )}
            </Box>
          ))}
        </Box>
      </Box>

      <Box mt="6" mx="3" mb="6">
        <Link to="/support">
          <HStack
            borderRadius="10px"
            py="3"
            px="4"
            bg={isActiveLink("/support") ? "#F3F3F7" : "transparent"}
            color={isActiveLink("/support") ? "#171717" : "#797E82"}
            _hover={{
              bg: "#F3F3F7",
              color: "#171717",
            }}
          >
            <Icon as={BiSupport} />
            <Text fontSize="14px" fontWeight="medium">
              Support
            </Text>
          </HStack>
        </Link>
      </Box>
    </Stack>
  );
};

export default Sidenav;
