export const formatNumberIntoCompactDisplay = (num: number) => {
  const formatter = new Intl.NumberFormat("en-US", {
    notation: "compact",
    compactDisplay: "short",
  });

  return formatter.format(num);
};

export const addCommasToNumberString = (value: string): string => {
  const regex = /\B(?=(\d{3})+(?!\d))/g;
  return value.replace(regex, ",");
};

// Example usage:
console.log(formatNumberIntoCompactDisplay(50000));
console.log(addCommasToNumberString("50000")); // Output: "2,
