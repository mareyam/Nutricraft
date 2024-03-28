const useRecipes = async () => {
  const response = await fetch("https://dummyjson.com/recipes");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const recipes = await response.json();
  return recipes.recipes;
};
export { useRecipes };
