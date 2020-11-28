const capitalizeWords = (word: string): string => {
  return word?.replace(/\b\w/g, char => char.toUpperCase());
};

export default capitalizeWords;
