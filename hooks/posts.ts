const usePosts = async () => {
  const response = await fetch("https://dummyjson.com/posts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const posts = await response.json();
  return posts.posts;
};
export { usePosts };
