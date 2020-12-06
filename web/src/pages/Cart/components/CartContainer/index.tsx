import React, { useEffect } from 'react';
import { Divider } from '@material-ui/core';

import EmptyCart from './EmptyCart';
import CartItemContainer from './CartItemContainer';
import CartTotal from './CartTotal';
import { Product } from '../..';

import { Container, YourCartContainer } from './styles';

interface CartContainerProps {
  products: Product[];
}

const CartContainer: React.FC<CartContainerProps> = ({ products }) => {
  useEffect(() => {
    if (products.length === 0) {
      localStorage.removeItem('@Recursion:products');
    }
  }, [products]);

  return (
    <>
      <Container>
        <YourCartContainer>
          <h1>Your Cart</h1>
          {products.length !== 0 ? (
            products.map(p => <CartItemContainer key={p.productId} p={p} />)
          ) : (
              <EmptyCart />
            )}
        </YourCartContainer>
        <Divider orientation="vertical" flexItem />
        {products.length !== 0 ? (
          <CartTotal products={products} isEmpty={false} />
        ) : (
            <CartTotal products={products} isEmpty />
          )}
      </Container>
    </>
  );
};

export default CartContainer;
