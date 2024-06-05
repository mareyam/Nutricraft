import { Flex, HStack, Text } from "@chakra-ui/react";
import React from "react";

const Interactions = () => {
  return (
    <Flex
      py="4"
      w="full"
      justifyContent="space-between"
      fontSize="10"
      color="gray.500"
    >
      <HStack>
        <Text>350 views</Text>
        <Text>150 Likes</Text>
        <Text>1 Comments</Text>
      </HStack>
      <Text>124 Shares</Text>
    </Flex>
  );
};

export default Interactions;
