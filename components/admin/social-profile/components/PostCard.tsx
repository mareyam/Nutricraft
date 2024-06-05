import ProfileAvatar from "@/common/ProfileAvatar";
import { useRecipes } from "@/hooks/recipes";
import { Card, CardBody, HStack, Text, VStack, Image } from "@chakra-ui/react";
import React from "react";
import { useQuery } from "react-query";
import Interactions from "./Interactions";
import Comments from "./Comments";

const PostCard = () => {
  const { data: recipes, isError, isLoading } = useQuery("recipes", useRecipes);

  return (
    <Card rounded="lg" w="full">
      <CardBody>
        <HStack>
          <ProfileAvatar size="md" />
          <VStack lineHeight="1">
            <Text w="full" textAlign="left" fontSize="12" fontWeight="500">
              Kenery Thomson
            </Text>

            <Text
              w="full"
              textAlign="left"
              fontWeight="500"
              fontSize="10"
              color="gray.400"
            >
              22 Jul, 2018
            </Text>
          </VStack>
        </HStack>
        <HStack py="4" gap="4">
          {recipes?.slice(0, 2).map((item: any, index: number) => (
            <Image
              objectFit="cover"
              objectPosition="top"
              h="52"
              rounded="md"
              w="full"
              src={item.image}
              key={index}
              alt="recipe-post-image"
            />
          ))}
        </HStack>
        <Interactions />
        <Comments />
      </CardBody>
    </Card>
  );
};

export default PostCard;
