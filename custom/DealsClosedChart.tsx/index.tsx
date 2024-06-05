import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { deals } from "@/data/listing/deals";
const DealsClosedChart = () => {
  const [dealCard, setDealCard] = useState<number>(-1);
  return (
    <Flex w="full" display="flex" flexWrap="wrap">
      {deals.map((item: any, index: number) => (
        <>
          <VStack
            flex="1"
            transition="all 0.5s ease"
            gap="0"
            h="40"
            position="relative"
            onMouseEnter={() => setDealCard(index)}
            onMouseLeave={() => setDealCard(-1)}
            my="4"
            py="4"
            _hover={{
              bg: "gray.200",
            }}
          >
            <Box
              key={index}
              w="2"
              zIndex="0"
              h={`${item.deals / 100}`}
              bg="blue.400"
            />
            <Box
              key={index}
              w="2"
              h={`${item.queries / 10}`}
              bg="red.500"
              zIndex="0"
            />
            <Box
              display={dealCard == index ? "block" : "none"}
              pos="absolute"
              left="4"
              zIndex="10"
              h="24"
              w="24"
              bottom="0"
              bg="gray.100"
              fontSize="12"
              fontWeight="600"
              px="2"
              py="2"
              cursor="pointer"
            >
              <Text as="span" color="blue.200" fontWeight="800" fontSize="12">
                DEALS
              </Text>
              <br />
              {item.deals}
              <br />

              <Text color="red.400" fontWeight="800" fontSize="12" as="span">
                QUERIES
              </Text>
              <br />

              {item.queries}
            </Box>
          </VStack>
        </>
      ))}
    </Flex>
  );
};

export default DealsClosedChart;
