import { Text, Wrap, WrapItem } from "@chakra-ui/react";
import React, { useState } from "react";

const Interest = () => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const handleInterestClick = (name: string) => {
    setSelectedInterests((prevInterests) =>
      prevInterests.includes(name)
        ? prevInterests.filter((item) => item !== name)
        : [...prevInterests, name]
    );
  };

  return (
    <>
      <Text fontWeight="500">Interest</Text>
      <Wrap>
        {INTEREST_ARRAY.map((item, index) => (
          <WrapItem key={index}>
            <Text
              onClick={() => handleInterestClick(item.name)}
              cursor="pointer"
              rounded="full"
              fontSize="12"
              whiteSpace="normal"
              border="1px solid gray"
              px="2"
              py="1"
              bg={
                selectedInterests.includes(item.name)
                  ? "blue.200"
                  : "transparent"
              }
            >
              {item.name}
            </Text>
          </WrapItem>
        ))}
      </Wrap>
    </>
  );
};

export default Interest;

const INTEREST_ARRAY = [
  {
    name: "Logo design",
  },
  {
    name: "UI design",
  },
  {
    name: "HTML",
  },
  {
    name: "JavaScript",
  },
  {
    name: "React",
  },
  {
    name: "Branding",
  },
];
