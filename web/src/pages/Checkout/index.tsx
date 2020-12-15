import React, { useCallback, useEffect, useState } from 'react';

import Summary from './components/Summary';
import Address from './components/Address';
import OrderDetailsContainer from './components/OrderDetailsContainer';

import { Container, CheckoutContent } from './styles';
import { useCart, Product } from '../../contexts/CartContext';
import { useAuth } from '../../contexts/AuthContext';
import api from '../../services/api';

export interface AddressProps {
  address: string;
  country: string;
  postalCode: string;
  state: string;
  city: string;
}

interface UserProps {
  shippingAddresses: AddressProps[];
}

const Checkout: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { products: localStorageProducts } = useCart();
  const { user } = useAuth();
  const [userApi, setUserApi] = useState<UserProps>();

  const [isFilled, setIsFilled] = useState(true);
  const [shippingPrice, setShippingPrice] = useState(12.99);

  const [shippingAddress, setShippingAddress] = useState<AddressProps>();
  const [billingAddress, setBillingAddress] = useState<AddressProps>();

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
    (shipping: AddressProps, billing: AddressProps) => {
      setShippingAddress(shipping);
      setBillingAddress(billing);
    },
    [],
  );

  useEffect(() => {
    async function loadUserAddress(): Promise<void> {
      const response = await api.get(`users/${user._id}`);

      if (response) {
        setUserApi(response.data);
      }
    }

    loadUserAddress();
  }, [user._id]);

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
        {shippingAddress && billingAddress ? (
          <Summary
            isFilled={isFilled}
            shippingPrice={shippingPrice}
            shippingAddress={shippingAddress}
            billingAddress={billingAddress}
          />
        ) : null}
      </Container>
    </>
  );
};

export default Checkout;
