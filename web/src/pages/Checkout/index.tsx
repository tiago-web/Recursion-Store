import React, { useEffect, useState } from 'react';

import Summary from './components/Summary';
import Address from './components/Address';
import OrderDetailsContainer from './components/OrderDetailsContainer';

import { Container, CheckoutContent } from './styles';
import { useCart, Product } from '../../contexts/CartContext';

const Checkout: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { products: localStorageProducts } = useCart();

  useEffect(() => {
    setProducts(localStorageProducts);
  }, [localStorageProducts]);

  return (
    <>
      <Container>
        <CheckoutContent>
          <h1>Checkout</h1>
          <Address />
          <OrderDetailsContainer products={products} />
        </CheckoutContent>
        <Summary />
      </Container>
    </>
  );
};

export default Checkout;
