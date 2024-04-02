import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  Button,
  Image,
  Text,
  HStack,
  VStack,
  IconButton,
  Flex,
  CircularProgress,
} from "@chakra-ui/react";
import { useQuery } from "react-query";
import { useRecipes } from "@/hooks/recipes";
import { RxDotsHorizontal } from "react-icons/rx";
import HorizontalLine from "@/common/HorizontalLine";
import RecipeCard from "./RecipeCard";

const Recipes = () => {
  const { data: recipes, isLoading, isError } = useQuery("recipes", useRecipes);
  const [filtredDishes, setFilteredDishes] = useState<any>();
  console.log(recipes);

  const uniqueCuisinesSet = new Set(
    recipes?.map((recipe: any) => recipe.cuisine)
  );
  const uniqueCuisinesArray = Array.from(uniqueCuisinesSet);

  const filterRecipes = (cuisine?: string) => {
    let dishes;
    if (cuisine) {
      dishes = recipes.filter((recipe: any) => recipe.cuisine === cuisine);
    } else {
      dishes = recipes;
    }
    setFilteredDishes(dishes);
  };

  if (isLoading) {
    return (
      <Card w="6xl" h="xl">
        <CardBody textAlign="center">
          <Text>Loading...</Text>
        </CardBody>
      </Card>
    );
  }

  if (isError) {
    return (
      <Card w="6xl" h="xl">
        <CardBody textAlign="center">
          <Text>Error fetching data</Text>
        </CardBody>
      </Card>
    );
  }

  return (
    <>
      <Card
        w="6xl"
        h="xl"
        boxShadow="0px 3px 10px -5px rgba(0,0,0,0.5)"
        transition="all 0.5s ease"
      >
        <HStack py="2" w="full" justifyContent="space-between" px="4" my="2">
          <Text fontSize="20" fontWeight="500">
            Recipes
          </Text>
          <HStack>
            <Button
              h="6"
              w="16"
              fontSize="12"
              color="white"
              bg="purple.500"
              textTransform="uppercase"
              _hover={{
                bg: "purple.600",
                boxShadow: "0px 5px 10px -5px rgba(0,0,0,0.5)",
              }}
            >
              All
            </Button>

            {uniqueCuisinesArray?.slice(0, 3).map((cuisine: any, i: number) => (
              <Button
                key={i}
                h="6"
                w="20"
                fontSize="12"
                color="purple.600"
                bg="transparent"
                textTransform="uppercase"
                border="1px solid #CBBFEB"
                fontWeight="600"
                borderRadius="md"
                _hover={{
                  border: "1px solid #7352C7",
                  bg: "gray.100",
                }}
                onClick={() => filterRecipes(cuisine)}
              >
                {cuisine}
              </Button>
            ))}
          </HStack>

          <IconButton
            display="flex"
            aria-label="shopping-basket"
            variant="unstyled"
            icon={<RxDotsHorizontal size="20" />}
          />
        </HStack>
        <HorizontalLine color="gray.100" width="full" />

        <CardBody w="full" h="20" overflowY="auto" transition="all 0.5s ease">
          <RecipeCard recipes={filtredDishes} />
        </CardBody>
      </Card>
    </>
  );
};

export default Recipes;
