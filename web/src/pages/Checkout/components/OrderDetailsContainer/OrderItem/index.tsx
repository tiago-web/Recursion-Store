import React from 'react';

import { Item } from '../../../../../contexts/CartContext';
import { Container, ItemDetails } from './styles';

interface OrderItem {
  items: Item[];
}

const OrderItem: React.FC<OrderItem> = ({ items }) => {
  return (
    <>
      {items.map(item => (
        <Container key={item.color}>
          <ItemDetails>
            <img
              src="http://localhost:3333/files/db9f69d2dcf820c89151-blueDress.jpg"
              alt="dress"
            />
            <div>
              <h2>Dress</h2>
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
          <span>CA$99.99</span>
        </Container>
      ))}
    </>
  );
};

export default OrderItem;
