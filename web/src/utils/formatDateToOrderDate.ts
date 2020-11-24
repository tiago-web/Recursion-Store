const formatDateToOrderDate = (date: string): string => {
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));

  return `${formattedDate}`;
};

export default formatDateToOrderDate;
