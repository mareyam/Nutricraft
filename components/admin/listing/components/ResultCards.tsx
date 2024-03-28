import { addCommasToNumberString } from "@/utils/formatNumber";
import { VStack, Text, SimpleGrid, Box } from "@chakra-ui/react";
import React from "react";

const ResultCards = () => {
  return (
    <SimpleGrid columns={[2, null, 4]} spacing="30px" pt="8" w="full">
      <ResultCard
        title="properties"
        amount="26873"
        change={3}
        bgColor="purple.300"
        overlayColor="purple.400"
      />
      <ResultCard
        title="cities"
        amount="26873"
        change={3}
        bgColor="red.300"
        overlayColor="red.400"
      />
      <ResultCard
        title="online visits"
        amount="26873"
        change={3}
        bgColor="green.300"
        overlayColor="green.400"
      />
      <ResultCard
        title="online queries"
        amount="26873"
        change={3}
        bgColor="blue.200"
        overlayColor="blue.300"
      />
    </SimpleGrid>
  );
};

export default ResultCards;

type ResultCardProps = {
  title: string;
  amount: string;
  change: number;
  bgColor: string;
  overlayColor: string;
};

const ResultCard = ({ title, amount, change, bgColor }: ResultCardProps) => {
  return (
    <VStack
      zIndex="1"
      pos="relative"
      justifyContent="space-between"
      borderRadius="xl"
      w="full"
      alignItems="left"
      p="4"
      h="36"
      bgColor={bgColor}
    >
      <Text
        color="white"
        fontWeight="500"
        fontSize="12"
        textTransform="uppercase"
        letterSpacing="1px"
      >
        {title}
      </Text>
      <VStack pt="4" lineHeight="1" w="full" alignItems="left">
        <Text
          fontSize="24"
          fontWeight="800"
          fontFamily="roboto-condensed"
          color="white"
        >
          {addCommasToNumberString(amount)}
        </Text>
        <Text fontSize="12" fontWeight="500" color="white">
          0{change}% this week
        </Text>
      </VStack>
    </VStack>
  );
};
