const formatSizeTagToName = (sizeTag: string): string => {
  const formattedSizeTag = sizeTag
    .split('')
    .map(letter => {
      switch (letter) {
        case 'X':
          return 'Extra';
        case 'S':
          return 'Small';
        case 'M':
          return 'Medium';
        case 'L':
          return 'Large';
        case 'U':
          return 'Unique Size';
        default:
          return '';
      }
    })
    .join(' ');

  return formattedSizeTag;
};

export default formatSizeTagToName;
