const formatToDollars = (value: number): string =>
  `CA${Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
  }).format(value)}`;

export default formatToDollars;
