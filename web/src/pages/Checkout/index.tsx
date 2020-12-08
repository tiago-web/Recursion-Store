import React from 'react';

import Summary from './components/Summary';
import Address from './components/Address';
import OrderDetailsContainer from './components/OrderDetailsContainer';

import { Container, CheckoutContent } from './styles';

const Checkout: React.FC = () => {
  return (
    <>
      <Container>
        <CheckoutContent>
          <h1>Checkout</h1>
          <Address />
          <OrderDetailsContainer />
        </CheckoutContent>
        <Summary />
      </Container>
    </>
  );
};

export default Checkout;
