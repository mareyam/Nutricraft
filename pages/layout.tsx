import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box bg="gray.100" px="12" py="4" w="full">
      {children}
    </Box>
  );
};

export default Layout;
