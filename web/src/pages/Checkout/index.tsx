import React, { useCallback, useEffect, useState } from 'react';

import Summary from './components/Summary';
import Address from './components/Address';
import OrderDetailsContainer from './components/OrderDetailsContainer';

import { Container, CheckoutContent } from './styles';
import { useCart, Product } from '../../contexts/CartContext';

const Checkout: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { products: localStorageProducts } = useCart();

  const [isFilled, setIsFilled] = useState(true);
  const [shippingPrice, setShippingPrice] = useState(12.99);

  useEffect(() => {
    setProducts(localStorageProducts);
  }, [localStorageProducts]);

  const handleFillAddress = useCallback(
    (shippingFormFilled: boolean, billingFormFilled: boolean) => {
      if (shippingFormFilled && billingFormFilled) {
        setIsFilled(true);
      } else {
        setIsFilled(false);
      }
    },
    [],
  );

  const handleShippingPrice = useCallback((selected: number) => {
    setShippingPrice(selected);
  }, []);

  return (
    <>
      <Container>
        <CheckoutContent>
          <h1>Checkout</h1>
          <Address
            isFormFilled={handleFillAddress}
            handleShippingPrice={handleShippingPrice}
          />
          <OrderDetailsContainer products={products} />
        </CheckoutContent>
        <Summary disable={isFilled} shippingPrice={shippingPrice} />
      </Container>
    </>
  );
};

export default Checkout;
