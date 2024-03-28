import { Box } from "@chakra-ui/react";
import React from "react";

const HorizontalLine = ({
  color,
  width,
}: {
  color: string;
  width: string | Record<string, string>;
}) => {
  return <Box border="2px solid red" w={width} h="0.5" bg={color}></Box>;
};

export default HorizontalLine;
