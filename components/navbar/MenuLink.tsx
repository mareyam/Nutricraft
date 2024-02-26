import React, { ReactNode } from "react";
import Link from "next/link";
import { Box, Flex, HStack, IconButton, Text } from "@chakra-ui/react";

type MenuLinkProps = {
  href: string;
  title: string;
  fontSize: string;
  color: string;
  icon?: ReactNode | null;
};

const MenuLink = ({ href, title, fontSize, color, icon }: MenuLinkProps) => {
  return (
    <Box
      as={Link}
      href={href}
      prefetch={false}
      _hover={{
        bg: "rgba(108, 122, 137,0.2)",
      }}
    >
      <HStack color={color} spacing="3">
        {icon && (
          <IconButton
            aria-label="update social profile"
            variant="unstyled"
            display="flex"
            justifyContent="center"
            alignItems="center"
            p="0"
            icon={icon}
            rounded="full"
            color="black"
          />
        )}
        <Text lineHeight="36px" fontStyle="normal" fontSize={fontSize}>
          {title}
        </Text>
      </HStack>
    </Box>
  );
};

export default MenuLink;
