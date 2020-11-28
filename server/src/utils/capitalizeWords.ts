const capitalizeWords = (word: string) => {
  return word.replace(/\b\w/g, char => char.toUpperCase());
};

export default capitalizeWords;
