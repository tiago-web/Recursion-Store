import React, { useState } from 'react';
import { FiTrash } from 'react-icons/fi';

import Button from '../../../../../components/Button';
import { Item } from '../../..';

import { Container } from './styles';

type CartItemProps = Omit<Item, ''> & {
  item: Item;
};

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  return (
    <>
      <Container>
        <div>
          <img src={item.imageUrl} alt={item.name} />
          <div>
            <h2>{item.name}</h2>
            <span>Size: {item.size}</span>
            <span>Color: {item.color}</span>
            <div className="quantity">
              <span>{item.quantity} items</span>
            </div>
          </div>
        </div>
        <div className="price">
          <span>CA${item.price}</span>
          <Button>
            <FiTrash size={20} />
          </Button>
        </div>
      </Container>
    </>
  );
};

export default CartItem;
