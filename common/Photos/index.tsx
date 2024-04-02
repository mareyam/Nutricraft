import React from "react";
import { useRecipes } from "@/hooks/recipes";
import { useQuery } from "react-query";
import { Grid, Image } from "@chakra-ui/react";
const Photos = () => {
  const { data: recipes, isLoading, isError } = useQuery("recipes", useRecipes);
  const cornerRounding = [
    "8px 8px 0 0",
    "0 8px 0 0",
    "0 0 0 8px",
    "8px 0 0 0",
    "0",
    "0 0 8px 0",
  ];
  return (
    <Grid px="2" templateColumns="repeat(3, 1fr)" gap={0}>
      {recipes?.slice(0, 6).map((item: any, index: number) => (
        <Image
          key={index}
          src={item.image}
          borderRadius={cornerRounding[index]}
        />
      ))}
    </Grid>
  );
};

export default Photos;
