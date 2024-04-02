import ProfileAvatar from "@/common/ProfileAvatar";
import { Card, CardBody, Divider, HStack, Input } from "@chakra-ui/react";
import React from "react";

const Status = () => {
  return (
    <Card rounded="xl" w="full">
      <CardBody>
        <HStack pb="4">
          <ProfileAvatar size="lg" />
          <Input
            pl="-2"
            fontSize="14"
            placeholder="What is in your mind?"
            border="none"
            _focus={{
              borderColor: "transparent",
              boxShadow: "none",
            }}
          />
        </HStack>
        <Divider />
      </CardBody>
    </Card>
  );
};

export default Status;
