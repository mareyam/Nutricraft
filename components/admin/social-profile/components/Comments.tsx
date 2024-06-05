import React from "react";
import { HStack, Input, Text, VStack } from "@chakra-ui/react";
import ProfileAvatar from "@/common/ProfileAvatar";

const Comments = () => {
  return (
    <>
      <HStack alignItems="flex-start">
        <ProfileAvatar size="md" />
        <VStack pt="1" lineHeight="1">
          <Text w="full" textAlign="left" fontSize="12" fontWeight="500">
            Kenery Thomson
          </Text>

          <Text
            w="full"
            textAlign="left"
            fontWeight="500"
            fontSize="10"
            color="gray.400"
          >
            22 Jul, 2018
          </Text>

          <Text py="2" color="gray.500" fontSize="12" fontWeight="500">
            Wow! Excellent, these images are so beautiful.
          </Text>
        </VStack>
      </HStack>

      <HStack pt='2' alignItems="flex-start">
        <ProfileAvatar size="md" />
        <Input h="16" rounded="none" />
      </HStack>
    </>
  );
};

export default Comments;
