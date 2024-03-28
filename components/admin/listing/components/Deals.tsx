import HorizontalLine from "@/common/HorizontalLine";
import DealsDoneData from "@/common/charts/DealsDoneData";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { CiShoppingBasket } from "react-icons/ci";

const AllDeals = () => {
  return (
    <SimpleGrid columns={[1, 2, 2]} gap="40px" w="full">
      <CurrentDeal />
      <CurrentDeal />
    </SimpleGrid>
  );
};
export default AllDeals;

const CurrentDeal = () => {
  return (
    <VStack border="2px solid red" bg="white" py="4" px="8" borderRadius="xl">
      <Text w="full">Your current Plan</Text>{" "}
      <HorizontalLine width={{ base: "40", xl: "full" }} color="gray.200" />
      <SimpleGrid
        pt="4"
        columns={[1, 2, 2]}
        w="full"
        justifyContent="space-between"
      >
        <VStack alignItems="left">
          <Text fontSize="20" fontWeight="600">
            $19
            <Text as="span" fontSize="12" fontWeight="400">
              /month
            </Text>
          </Text>
          <Text>Team plan (4/5) Members</Text>
          <VStack lineHeight="1.25" alignItems="left" w="full">
            <Text fontSize="14"> &gt; 2k daily calls</Text>
            <Text fontSize="14"> &gt; 2k daily calls</Text>
            <Text fontSize="14"> &gt; 2k daily calls</Text>
          </VStack>
        </VStack>

        <VStack justifyContent="center" alignItems="center" display="flex">
          <IconButton
            display="flex"
            aria-label="shopping-basket"
            variant="unstyled"
            mb="2"
            icon={<CiShoppingBasket size="80" />}
          />
          <Text fontSize="12" textAlign="center" color="red">
            Expiring soon
          </Text>
          <Button mt="2" w="32" colorScheme="purple">
            RENEW NOW
          </Button>
        </VStack>
      </SimpleGrid>
    </VStack>
  );
};
