import React from 'react';

import { Container, ItemDetails } from './styles';

const OrderItem: React.FC = () => {
  return (
    <>
      <Container>
        <ItemDetails>
          <img
            src="http://localhost:3333/files/db9f69d2dcf820c89151-blueDress.jpg"
            alt="dress"
          />
          <div>
            <h2>Dress</h2>
            <strong>
              Size: <span>M</span>
            </strong>
            <strong>
              Color: <span>Green</span>
            </strong>
            <strong>
              Quantity: <span>2</span>
            </strong>
          </div>
        </ItemDetails>
        <span>CA$99.99</span>
      </Container>
    </>
  );
};

export default OrderItem;
