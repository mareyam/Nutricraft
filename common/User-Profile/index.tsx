import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  VStack,
  Box,
  HStack,
  ButtonSpinner,
} from "@chakra-ui/react";
import ProfileAvatar from "../ProfileAvatar";

const UserProfile = () => {
  return (
    <Card w="full" borderRadius="2xl">
      <Image
        roundedTopLeft="xl"
        roundedTopRight="xl"
        w="full"
        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="Green double couch with wooden legs"
      />
      <VStack p="6" w="full" pos="relative">
        <HStack w="full" mt="-14">
          <ProfileAvatar size="lg" />
          <Box px="2">
            <Text fontSize="12" color="white">
              Chelsea Jones
            </Text>
            <Text fontSize="12" color="gray.400">
              Floria, USA
            </Text>
          </Box>
        </HStack>
        <HStack textAlign="center" gap="6">
          <Text fontSize="14" fontWeight="500" color="black">
            2k+ <br />
            <Text color="gray.400" fontSize="10" as="span">
              Followers
            </Text>
          </Text>

          <Divider color="blue" height="8" orientation="vertical" />

          <Text fontSize="14" fontWeight="500" color="black">
            689 <br />
            <Text color="gray.400" fontSize="10" as="span">
              Friends
            </Text>
          </Text>

          <Divider color="blue" height="8" orientation="vertical" />

          <Text fontSize="14" fontWeight="500" color="black">
            282 <br />
            <Text color="gray.400" fontSize="10" as="span">
              Following
            </Text>
          </Text>
        </HStack>

        <Box w="full">
          <Button
            px="6"
            bg="purple.600"
            color="white"
            fontSize="12"
            size="sm"
            borderRadius="md"
            _hover={{
              bg: "purple.700",
            }}
          >
            FOLLOW
          </Button>
        </Box>
      </VStack>
    </Card>
  );
};

export default UserProfile;
