import { Box, IconButton } from "@chakra-ui/react";
import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";

const NotificationIcon = () => {
  return (
    <Box pos="relative">
      <IconButton
        display="flex"
        justifyContent="center"
        alignItems="center"
        variant="unstyled"
        aria-label=""
        rounded="full"
        border="1px solid gray"
        icon={<IoIosNotificationsOutline size={22} />}
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

export default NotificationIcon;
