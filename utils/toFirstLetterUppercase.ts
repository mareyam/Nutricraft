export const toFirstLetterUppercase = (str: string) => {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
};

console.log(toFirstLetterUppercase("for sale")); // Output: For Sale
