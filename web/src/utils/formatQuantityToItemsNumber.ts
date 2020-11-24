const formatQuantityToItemsNumber = (quantity: number): string => {
  const formattedQuantity =
    quantity === 1 ? `${quantity} item` : `${quantity} items`;

  return formattedQuantity;
};

export default formatQuantityToItemsNumber;
