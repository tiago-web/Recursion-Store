const formatSizeTagToName = (sizeTag: string): string => {
  const avaliableSizes = [
    {
      sizeTag: 'X',
      sizeName: 'Extra',
    },
    {
      sizeTag: 'S',
      sizeName: 'Small',
    },
    {
      sizeTag: 'M',
      sizeName: 'Medium',
    },
    {
      sizeTag: 'L',
      sizeName: 'Large',
    },
    {
      sizeTag: 'U',
      sizeName: 'Unique Size',
    },
  ];

  const formattedSizeTag = sizeTag
    .split('')
    .map(letter => {
      const sizeFound = avaliableSizes.find(size => size.sizeTag === letter);
      if (!sizeFound) return '';
      return sizeFound.sizeName;
    })
    .join(' ');

  return formattedSizeTag;
};

export default formatSizeTagToName;
