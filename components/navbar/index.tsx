import MenuLink from "@/components/navbar/MenuLink";
import { Box, HStack, Text } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <HStack
      bg="rgba(95, 152, 237, 0.5)"
      w="full"
      p="4"
      justifyContent="space-between"
    >
      <MenuLink color="white" title="NutriCraft" href="" fontSize="20" />
      <HStack>
        <MenuLink color="white" title="Features" href="" fontSize="16" />
        <MenuLink color="white" title="Blogs" href="" fontSize="16" />
      </HStack>
    </HStack>
  );
};

export default Navbar;
