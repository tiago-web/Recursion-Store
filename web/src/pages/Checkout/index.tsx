import React, { useCallback, useEffect, useState } from 'react';

import Summary from './components/Summary';
import Address from './components/Address';
import OrderDetailsContainer from './components/OrderDetailsContainer';

import { Container, CheckoutContent } from './styles';
import { useCart, Product } from '../../contexts/CartContext';

// interface CheckoutProps {

// }

const Checkout: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { products: localStorageProducts } = useCart();
  // const [productsApi, setProductsApi] = useState();

  const [isFilled, setIsFilled] = useState(true);

  useEffect(() => {
    setProducts(localStorageProducts);
  }, [localStorageProducts]);

  const handleFillAddress = useCallback((formFilled: boolean) => {
    setIsFilled(formFilled);
  }, []);

  return (
    <>
      <Container>
        <CheckoutContent>
          <h1>Checkout</h1>
          <Address isFormFilled={handleFillAddress} />
          <OrderDetailsContainer products={products} />
        </CheckoutContent>
        <Summary disable={isFilled} />
      </Container>
    </>
  );
};

export default Checkout;
