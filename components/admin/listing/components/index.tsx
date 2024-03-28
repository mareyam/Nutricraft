import React from "react";
import { VStack } from "@chakra-ui/react";
import ResultCards from "./ResultCards";
import PopularAgents from "./Agents";
import AllDeals from "./Deals";
import RecipeCard from "./RecipeCard";

const Listing = () => {
  return (
    <VStack w="full">
      <ResultCards />
      <PopularAgents />
      <AllDeals />
      <RecipeCard />
    </VStack>
  );
};

export default Listing;
