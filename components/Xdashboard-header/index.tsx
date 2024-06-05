import React from "react";
import {
  Avatar,
  Box,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import { TbVector } from "react-icons/tb";
import { IoMailOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
const DashboardNavbar = () => {
  return (
    <HStack w="full" p="4" justifyContent="space-between">
      <VStack textAlign="left" lineHeight="1">
        <Text w="full" fontWeight="700">
          Hi, Esha
        </Text>
        <Text>Lets check your store today</Text>
      </VStack>

      <HStack>
        <HStack spacing="0">
          <InputGroup w="xs">
            <InputLeftElement>{/* <CiSearch /> */}</InputLeftElement>
            <Input bg="rgba(250, 250, 250, 1)" placeholder="Search..."></Input>
            <InputRightElement>
              <TbVector />
            </InputRightElement>
          </InputGroup>

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

          <IconButton
            aria-label="update social profile"
            variant="unstyled"
            display="flex"
            justifyContent="center"
            alignItems="center"
            p="0"
            icon={<IoIosNotificationsOutline />}
            rounded="full"
            color="black"
          />
        </HStack>
        <Box h="8" w="0.5" bg="rgba(255, 255, 255, 0.2)" />
        <Avatar src="" size="sm" />
        <Text>Esha!</Text>
      </HStack>
    </HStack>
  );
};

export default DashboardNavbar;
