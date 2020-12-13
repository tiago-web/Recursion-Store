import React, { useEffect, useState } from 'react';

import { Item } from '../../../../../../contexts/CartContext';
import { Container, ItemDetails } from './styles';
import { ProductApiProps } from '..';
import formatToDollars from '../../../../../../utils/formatToDollars';

interface OrderItemProps {
  item: Item;
  productApi: ProductApiProps;
}

const OrderItem: React.FC<OrderItemProps> = ({ item, productApi }) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    async function loadFromApi(): Promise<void> {
      productApi.items.map(
        i => i.color === item.color && setImageUrl(i.productImages[0].imageUrl),
      );
    }

    loadFromApi();
  }, [productApi, item.color]);

  return (
    <>
      <Container>
        <ItemDetails>
          <img src={imageUrl} alt={productApi.name} />
          <div>
            <h2>{productApi.name}</h2>
            <strong>
              Size: <span>{item.sizeTag}</span>
            </strong>
            <strong>
              Color: <span>{item.color}</span>
            </strong>
            <strong>
              Quantity: <span>{item.quantity}</span>
            </strong>
          </div>
        </ItemDetails>
        <span>{formatToDollars(productApi.price)}</span>
      </Container>
    </>
  );
};

export default OrderItem;
