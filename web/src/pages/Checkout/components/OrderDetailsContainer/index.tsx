import React from 'react';

import OrderItem from './OrderItem';

import { Container } from './styles';

const OrderDetailsContainer: React.FC = () => {
  const count = [1, 2, 3];
  return (
    <>
      <Container>
        <h1>Order Details</h1>
        {count.map(item => (
          <OrderItem key={item} />
        ))}
      </Container>
    </>
  );
};

export default OrderDetailsContainer;
