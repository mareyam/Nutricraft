import { useQuery } from "react-query";

const useAgents = async () => {
  const response = await fetch("https://dummyjson.com/users");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const agents = await response.json();
  return agents.users;
};

export { useAgents };
