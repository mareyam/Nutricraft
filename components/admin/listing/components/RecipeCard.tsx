import Recipes from "@/common/Recipes";
import { useRecipes } from "@/hooks/recipes";
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
import React from "react";
import { useQuery } from "react-query";
import { RxDotsHorizontal } from "react-icons/rx";
import { CiStar } from "react-icons/ci";
const RecipeCard = () => {
  const { data: recipes, isLoading, isError } = useQuery("recipes", useRecipes);
  const uniqueCuisinesSet = new Set(
    recipes?.map((recipe: any) => recipe.cuisine)
  );
  const uniqueCuisinesArray = Array.from(uniqueCuisinesSet);

  if (isLoading) {
    return (
      <Flex justify="center" align="center" h="100vh">
        <CircularProgress isIndeterminate color="purple.500" />
      </Flex>
    );
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }
  return (
    <>
      <Card w="4xl">
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
                border="1px solid purple"
                fontWeight="600"
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

        <CardBody w="full">
          {recipes?.map(
            (
              {
                name,
                image,
                ingredients,
                prepTimeMinutes,
                cookTimeMinutes,
                servings,
                rating,
                reviewCount,
              }: any,
              i: number
            ) => (
              <HStack
                key={i}
                w="full"
                py="4"
                my="4"
                cursor="pointer"
                transition="all 0.5s ease"
                _hover={{
                  bg: "gray.100",
                  boxShadow: "7px 7px 26px -6px rgba(0,0,0,0.8)",
                }}
              >
                <Image
                  objectFit="cover"
                  src={image}
                  alt="food-image"
                  w="56"
                  h="32"
                  rounded="sm"
                />
                <VStack w="full" align="left">
                  <Text
                    bg="orange.400"
                    rounded="full"
                    w="14"
                    py="1"
                    fontSize="10"
                    color="white"
                    fontWeight={500}
                    textAlign="center"
                  >
                    For Sale
                  </Text>

                  <Text fontSize="16" fontWeight="600">
                    {name}
                  </Text>
                  <Text fontSize="12" fontWeight="400">
                    {ingredients.slice(0, 3).join(" , ")}
                  </Text>
                  <HStack>
                    <Text fontSize="12" color="gray.500">
                      PrepTime:{" "}
                      <Text as="span" color="black" fontSize="12">
                        {prepTimeMinutes}
                      </Text>
                    </Text>
                    <Text fontSize="12" color="gray.500">
                      Serving:{" "}
                      <Text as="span" color="black" fontSize="12">
                        {servings}
                      </Text>
                    </Text>
                    <Text fontSize="12" color="gray.500">
                      Cooking Time:{" "}
                      <Text as="span" color="black" fontSize="12">
                        {cookTimeMinutes}
                      </Text>
                    </Text>
                  </HStack>
                </VStack>

                <VStack>
                  <Flex>
                    <IconButton
                      aria-label="rating-icon"
                      color="purple.600"
                      variant="unstyled"
                      icon={<CiStar size={20} />}
                      mr="-4"
                      rounded="full"
                      bg="transparent"
                      border={"2px solid red"}
                    />
                    <Text size="16" fontSize="20" color="purple.600">
                      {rating}
                    </Text>
                  </Flex>
                  <Text fontSize="12">${reviewCount}/serving</Text>
                </VStack>
                <hr />
              </HStack>
            )
          )}
        </CardBody>
      </Card>
      <Recipes />
    </>
  );
};

export default RecipeCard;
