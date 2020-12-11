import React from 'react';

import { Product } from '../../../Cart';
import OrderItem from './OrderItem';

import { Container } from './styles';

interface OrderDetailsContainerProps {
  products: Product[];
}

const OrderDetailsContainer: React.FC<OrderDetailsContainerProps> = ({
  products,
}) => {
  const count = [1, 2, 3];
  return (
    <>
      <Container>
        <h1>Order Details</h1>
        {products.map(product => (
          <OrderItem key={product.productId} items={product.items} />
        ))}
      </Container>
    </>
  );
};

export default OrderDetailsContainer;
