import { Button, HStack, Text, IconButton, VStack } from "@chakra-ui/react";
import React from "react";
import { IoMailOutline } from "react-icons/io5";
import MenuLink from "../navbar/MenuLink";

const SideBar = () => {
  return (
    <VStack w="xs" alignItems="left">
      <HStack>
        <IconButton
          aria-label="update social profile"
          variant="unstyled"
          display="flex"
          justifyContent="center"
          alignItems="center"
          p="0"
          icon={<IoMailOutline />}
          rounded="full"
          color="black"
        />
        <Text>Esha Admin Dashboard</Text>
      </HStack>
      <Button>
        <IconButton
          aria-label="update social profile"
          variant="unstyled"
          display="flex"
          justifyContent="center"
          alignItems="center"
          p="0"
          icon={<IoMailOutline />}
          rounded="full"
          color="black"
        />
        Dashboard
      </Button>
      <MenuLink
        icon={<IoMailOutline />}
        color="black"
        href=""
        title="User Account"
        fontSize="12"
      />
      <MenuLink
        icon={<IoMailOutline />}
        color="black"
        href=""
        title="Nutritionist Account"
        fontSize="12"
      />
      <MenuLink
        icon={<IoMailOutline />}
        color="black"
        href=""
        title="Subscription Management"
        fontSize="12"
      />
      <MenuLink
        icon={<IoMailOutline />}
        color="black"
        href=""
        title="Recipe Management"
        fontSize="12"
      />
      <MenuLink
        icon={<IoMailOutline />}
        color="black"
        href=""
        title="Nutritional Content Managmenet"
        fontSize="12"
      />
      <MenuLink
        icon={<IoMailOutline />}
        color="black"
        href=""
        title="Analytics and Reports"
        fontSize="12"
      />
      <MenuLink
        icon={<IoMailOutline />}
        color="black"
        href=""
        title="Customer Support"
        fontSize="12"
      />

      <Button>Logout</Button>
    </VStack>
  );
};

export default SideBar;
