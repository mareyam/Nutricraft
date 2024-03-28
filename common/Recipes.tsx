import React from "react";
import { useQuery } from "react-query";
import { useRecipes } from "@/hooks/recipes";

const Recipes = () => {
  const { data: recipes, isLoading, isError } = useQuery("recipes", useRecipes);
  return (
    <>
      {recipes?.map((item: any) => (
        <>{item.name}</>
      ))}
    </>
  );
};

export default Recipes;
