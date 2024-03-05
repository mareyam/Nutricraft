import React, { Component } from "react";
import { Home, Cards, Components, Apps } from "@/data/navbar";
import { HStack, IconButton, Text } from "@chakra-ui/react";

const DrawerElements = () => {
  return (
    <>
      Home
      {Home.map((item: any, i: number) => (
        <HStack w="full" key={i}>
          <IconButton aria-label="icon" variant="unstyled" icon={item.icon} />
          <Text>{item.title}</Text>
        </HStack>
      ))}
      Apps
      {Apps.map((item: any, i: number) => (
        <HStack w="full" key={i}>
          <IconButton aria-label="icon" variant="unstyled" icon={item.icon} />
          <Text>{item.title}</Text>
        </HStack>
      ))}
      Components
      {Components.map((item: any, i: number) => (
        <HStack w="full" key={i}>
          <IconButton aria-label="icon" variant="unstyled" icon={item.icon} />
          <Text>{item.title}</Text>
        </HStack>
      ))}
      Cards
      {Cards.map((item: any, i: number) => (
        <HStack w="full" key={i}>
          <IconButton aria-label="icon" variant="unstyled" icon={item.icon} />
          <Text>{item.title}</Text>
        </HStack>
      ))}
    </>
  );
};

export default DrawerElements;
