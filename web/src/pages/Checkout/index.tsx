import React, { useCallback, useEffect, useState } from 'react';

import Summary from './components/Summary';
import Address from './components/Address';
import OrderDetailsContainer from './components/OrderDetailsContainer';

import { Container, CheckoutContent } from './styles';
import { useCart, Product } from '../../contexts/CartContext';

export interface ShippingAddressProps {
  shippingAdress?: string;
  shippinCountry?: string;
  shippingPostalCode?: string;
  shippingState?: string;
  shippingCity?: string;
}

export interface BillingAddressProps {
  billingAdress?: string;
  billingCountry?: string;
  billingPostalCode?: string;
  billingState?: string;
  billingCity?: string;
}

const Checkout: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { products: localStorageProducts } = useCart();

  const [isFilled, setIsFilled] = useState(true);
  const [shippingPrice, setShippingPrice] = useState(12.99);

  const [shippingAddress, setShippingAddress] = useState<
    ShippingAddressProps
  >();
  const [billingAddress, setBillingAddress] = useState<BillingAddressProps>();

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

  const handleGetTheAddresses = useCallback(
    (
      shippingAdress: string,
      shippinCountry: string,
      shippingPostalCode: string,
      shippingState: string,
      shippingCity: string,
      billingAdress: string,
      billingCountry: string,
      billingPostalCode: string,
      billingState: string,
      billingCity: string,
    ) => {
      setShippingAddress({
        shippingAdress,
        shippinCountry,
        shippingPostalCode,
        shippingState,
        shippingCity,
      });

      setBillingAddress({
        billingAdress,
        billingCountry,
        billingPostalCode,
        billingState,
        billingCity,
      });
    },
    [],
  );

  return (
    <>
      <Container>
        <CheckoutContent>
          <h1>Checkout</h1>
          <Address
            isFormFilled={handleFillAddress}
            handleShippingPrice={handleShippingPrice}
            handleGetTheAddresses={handleGetTheAddresses}
          />
          <OrderDetailsContainer products={products} />
        </CheckoutContent>
        <Summary
          isFilled={isFilled}
          shippingPrice={shippingPrice}
          shippingAddress={shippingAddress}
          billingAddress={billingAddress}
        />
      </Container>
    </>
  );
};

export default Checkout;
