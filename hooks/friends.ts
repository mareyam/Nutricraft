const useFriends = async () => {
  const response = await fetch("https://api.escuelajs.co/api/v1/users");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const friends = await response.json();
  return friends;
};
export { useFriends };
