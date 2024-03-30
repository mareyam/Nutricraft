const useUsers = async () => {
  const response = await fetch("https://dummyjson.com/users");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const users = await response.json();
  return users.users;
};
export { useUsers };
