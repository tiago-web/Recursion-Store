import React from 'react';

import { Product } from '../../../Cart';
import { ItemProps } from '../../../Products/components/ProductList';
import OrderItemContainer from './OrderItemContainer';

import { Container } from './styles';

interface OrderDetailsContainerProps {
  products: Product[];
}

interface ProductApiProps {
  _id: string;
  name: string;
  items: ItemProps[];
  price: number;
}

const OrderDetailsContainer: React.FC<OrderDetailsContainerProps> = ({
  products,
}) => {
  return (
    <>
      <Container>
        <h1>Order Details</h1>
        {products.map(product => (
          <OrderItemContainer key={product.productId} product={product} />
        ))}
      </Container>
    </>
  );
};

export default OrderDetailsContainer;
