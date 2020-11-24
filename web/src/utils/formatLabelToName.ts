const formatLabelToName = (label: string): string => {
  const formattedLabel = label
    .split(' ')
    .map((word, index) => {
      return index === 0
        ? word.toLocaleLowerCase()
        : word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join('');

  return formattedLabel;
};

export default formatLabelToName;
