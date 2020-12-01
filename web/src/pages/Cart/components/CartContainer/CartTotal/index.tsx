import React from 'react';

import Button from '../../../../../components/Button';

import { Container } from './styles';

const CartTotal: React.FC = () => {
  return (
    <>
      <Container>
        <span>Subtotal:</span>
        <h1>CA$199.98</h1>
        <Button>Checkout</Button>
        <form action="">
          <input type="text" placeholder="Enter Coupon" />
          <Button>Apply</Button>
        </form>
      </Container>
    </>
  );
};

export default CartTotal;
