import React, { Component } from "react";
import { Home, Cards, Components, Apps } from "@/data/navbar";
import { HStack, IconButton, Text, VStack } from "@chakra-ui/react";
import useNavbarStore from "@/zustand-store/navbar";

const DrawerElements = () => {
  const { selectedNavElement, setSelectedNavElement } = useNavbarStore();

  return (
    <VStack className="hide-scroll" w="full">
      <DrawerElementsArray
        title="Home"
        data={Home}
        selectedNavElement={selectedNavElement}
        setSelectedNavElement={setSelectedNavElement}
      />
      <DrawerElementsArray
        title="Cards"
        data={Cards}
        selectedNavElement={selectedNavElement}
        setSelectedNavElement={setSelectedNavElement}
      />
      <DrawerElementsArray
        title="Components"
        data={Components}
        selectedNavElement={selectedNavElement}
        setSelectedNavElement={setSelectedNavElement}
      />
      <DrawerElementsArray
        title="Apps"
        data={Apps}
        selectedNavElement={selectedNavElement}
        setSelectedNavElement={setSelectedNavElement}
      />
    </VStack>
  );
};

export default DrawerElements;

const DrawerElementsArray = ({
  title,
  data,
  selectedNavElement,
  setSelectedNavElement,
}: any) => {
  return (
    <VStack w="full">
      <Text
        pt="8"
        pb="2"
        w="full"
        px="4"
        color="gray.600"
        fontWeight="400"
        textTransform="uppercase"
        fontSize="12"
      >
        {title}
      </Text>
      {Array.isArray(data) &&
        data.map((item: any, i: number) => (
          <HStack
            w="full"
            transition="all 0.25s ease"
            cursor="pointer"
            key={i}
            _hover={{
              roundedRight: "full",
              bg: "gray.100",
              borderLeft: "6px solid gray",
            }}
            bg={selectedNavElement === item.title ? "purple.100" : ""}
            borderLeft={
              selectedNavElement === item.title ? "6px solid purple" : ""
            }
            roundedRight={selectedNavElement === item.title ? "full" : ""}
            px="4"
            onClick={() => setSelectedNavElement(item.title)}
          >
            <IconButton
              mr="-4"
              aria-label="icon"
              variant="unstyled"
              icon={item.icon}
            />
            <Text fontSize="14" fontWeight="400">
              {item.title}
            </Text>
          </HStack>
        ))}
    </VStack>
  );
};
