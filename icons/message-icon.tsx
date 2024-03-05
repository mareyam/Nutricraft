import React from "react";
import { FiMessageSquare } from "react-icons/fi";
import { Box, IconButton } from "@chakra-ui/react";

const MessageIcon = () => {
  return (
    <Box pos="relative">
      <IconButton
        display="flex"
        justifyContent="center"
        alignItems="center"
        variant="unstyled"
        aria-label="message-icon"
        border="1px solid gray"
        rounded="full"
        icon={<FiMessageSquare size={20} />}
      />
      <Box
        pos="absolute"
        right="1"
        top="1"
        rounded="full"
        boxSize="2"
        bgGradient="linear(to-br, #7928CA, #FF0080)"
      />
    </Box>
  );
};

export default MessageIcon;
