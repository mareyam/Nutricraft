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
        bgColor="#9575CD"
        overlayColor="#7E57C2"
      />
      <ResultCard
        title="cities"
        amount="26873"
        change={3}
        bgColor="#EF5350"
        overlayColor="#E53935"
      />
      <ResultCard
        title="online visits"
        amount="26873"
        change={3}
        bgColor="#23BCBA"
        overlayColor="#72CFCE"
      />
      <ResultCard
        title="online queries"
        amount="26873"
        change={3}
        bgColor="#42A5F5"
        overlayColor="#6EC6FF"
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

const ResultCard = ({
  title,
  amount,
  change,
  bgColor,
  overlayColor,
}: ResultCardProps) => {
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
      boxShadow="0px 8px 10px -5px rgba(0,0,0,0.5)"
    >
      <Box pos="absolute" bottom="0" w="full" h="20">
        <Box
          borderBottomLeftRadius="xl"
          pos="absolute"
          bottom="0"
          left="-4"
          borderLeft="12px solid transparent"
          borderRight="98px solid transparent"
          borderBottom={`32px solid ${overlayColor}`}
        ></Box>

        <Box
          pos="absolute"
          bottom="0"
          left="12"
          borderLeft="50px solid transparent"
          borderRight="50px solid transparent"
          borderBottom={`28px solid ${overlayColor}`}
        />
        <Box
          pos="absolute"
          bottom="0"
          left="24"
          transform="skew(-40deg)"
          borderBottom={`28px solid ${overlayColor}`}
        ></Box>
        <Box
          pos="absolute"
          left="28"
          bottom="0"
          borderLeft="45px solid transparent"
          borderRight="9px solid transparent"
          borderBottom={`43px solid ${overlayColor}`}
          borderTopRightRadius="100px"
        />
        <Box
          pos="absolute"
          left="44"
          borderLeft="0px solid transparent"
          borderRight="90px solid transparent"
          borderBottom={`80px solid ${overlayColor}`}
          transform="skew(-20deg)"
          borderTopLeftRadius="100px"
        />
        <Box
          borderBottomRightRadius="xl"
          pos="absolute"
          bottom="0"
          right="4"
          w="80px"
          borderRight="9px solid transparent"
          borderBottom={`20px solid ${overlayColor}`}
        ></Box>
      </Box>
      <Text
        color="white"
        fontWeight="500"
        fontSize="10"
        textTransform="uppercase"
        letterSpacing="1.5px"
        fontFamily="roboto"
      >
        {title}
      </Text>
      <VStack pt="4" lineHeight="1" w="full" alignItems="left">
        <Text fontFamily="roboto" fontSize="20" fontWeight="600" color="white">
          {addCommasToNumberString(amount)}
        </Text>
        <Text
          fontFamily="roboto"
          zIndex="1"
          fontSize="12"
          fontWeight="500"
          color="white"
        >
          0{change}% This Week
        </Text>
      </VStack>
    </VStack>
  );
};
