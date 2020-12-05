import React, { useCallback, useEffect, useState } from 'react';
import { Divider } from '@material-ui/core';

import EmptyCart from './EmptyCart';
import CartItemContainer from './CartItemContainer';
import CartTotal from './CartTotal';
import { Product } from '../..';

import { Container, YourCartContainer } from './styles';
import { ProductApiProps } from './CartItemContainer';

interface CartContainerProps {
  products: Product[];
}

const CartContainer: React.FC<CartContainerProps> = ({ products }) => {
  const [productApi, setProductApi] = useState<ProductApiProps>();

  const productFromApi = useCallback((pApi: ProductApiProps) => {
    setProductApi(pApi);
  }, []);

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
            products.map(p => (
              <CartItemContainer
                key={p.productId}
                p={p}
                productFromApi={productFromApi}
              />
            ))
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
