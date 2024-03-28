import ProfileAvatar from "@/common/ProfileAvatar";
import MenuLink from "@/components/navbar/MenuLink";
import MessageIcon from "@/icons/message-icon";
import NotificationIcon from "@/icons/notification-icon";
import {
  Avatar,
  Box,
  HStack,
  InputGroup,
  Input,
  InputLeftElement,
  Text,
  IconButton,
} from "@chakra-ui/react";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import NavbarDrawer from "@/components/navbar-drawer";

const Navbar = () => {
  return (
    <HStack justifyContent="space-between">
      <NavbarDrawer />
      <InputGroup>
        <InputLeftElement>
          <IconButton
            rounded="full"
            bg="transparent"
            aria-label="search-icon"
            icon={<IoSearchOutline size={20} />}
          />
        </InputLeftElement>
        <Input
          w="xs"
          rounded="full"
          fontSize="14"
          placeholder="Search anything"
          bg="white"
        />
      </InputGroup>
      <HStack>
        <MessageIcon />
        <NotificationIcon />
        <ProfileAvatar />
      </HStack>
    </HStack>
  );
};

export default Navbar;
