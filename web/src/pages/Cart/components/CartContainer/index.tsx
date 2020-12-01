import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Divider } from '@material-ui/core';
import { FiTrash } from 'react-icons/fi';

import Button from '../../../../components/Button';
import EmptyCart from './EmptyCart';
import CartItem from './CartItem';
import CartTotal from './CartTotal';
import { Item } from '../..';

import { Container, YourCartContainer } from './styles';

type CartContainerProps = Omit<Item, ''> & {
  items: Item[];
};

const CartContainer: React.FC<CartContainerProps> = ({ items }) => {
  const [isCartEmpty, setIsCartEmpty] = useState(false);

  return (
    <>
      <Container>
        <YourCartContainer>
          <h1>Your Cart</h1>
          {isCartEmpty ? (
            <EmptyCart />
          ) : (
              items.map(item => <CartItem key={item.id} item={item} />)
            )}
        </YourCartContainer>
        <Divider orientation="vertical" flexItem />
        <CartTotal />
      </Container>
    </>
  );
};

export default CartContainer;
