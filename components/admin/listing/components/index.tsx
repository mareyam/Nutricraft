import React from "react";
import { Flex, SimpleGrid, VStack } from "@chakra-ui/react";
import ResultCards from "./ResultCards";
import PopularAgents from "./Agents";
import AllDeals from "./Deals";
import Recipes from "./Recipes";
import RecentActivities from "./RecentActivities";

const Listing = () => {
  return (
    <VStack w="full">
      <ResultCards />
      <PopularAgents />
      <AllDeals />
      <Flex gap="10px" w="full" justifyContent="space-between">
        <Recipes />
        <RecentActivities />
      </Flex>
    </VStack>
  );
};

export default Listing;
