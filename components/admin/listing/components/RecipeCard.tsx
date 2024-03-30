import React from "react";
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
import { CiStar } from "react-icons/ci";

type RecipeCardProps = {
  recipes: any;
};

const RecipeCard = ({ recipes }: RecipeCardProps) => {
  return (
    <>
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
            px="4"
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

            <VStack lineHeight="0">
              <Flex alignItems="center">
                <IconButton
                  aria-label="rating-icon"
                  color="purple.600"
                  variant="unstyled"
                  icon={<CiStar size={20} />}
                  mr="-4"
                  rounded="full"
                  bg="transparent"
                />
                <Text size="16" fontSize="20" color="purple.600">
                  {rating}
                </Text>
              </Flex>
              <Text fontWeight="500" fontSize="12">
                ${reviewCount}/serving
              </Text>
            </VStack>
            <hr />
          </HStack>
        )
      )}
    </>
  );
};

export default RecipeCard;
