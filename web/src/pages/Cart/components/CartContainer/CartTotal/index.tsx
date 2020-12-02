import React, { useMemo, useState } from 'react';

import Button from '../../../../../components/Button';
import formatToDollars from '../../../../../utils/formatToDollars';
import { Product, Item } from '../../..';

import { Container } from './styles';

interface CartTotalProps {
  products: Product[];
}

const CartTotal: React.FC<CartTotalProps> = ({ products }) => {
  const [items, setItems] = useState<Item[]>([]);

  // const cartTotal = useMemo(() => {
  //   const total = products.reduce((accumulator, product) => {
  //     const subTotals = product.items.map(item => item.price !== 0);
  //     setItems(subTotals);

  //     const subTotal = subTotals.

  //     return accumulator + subTotal;
  //   }, 0);

  //   return formatValue(total);
  // }, [products]);

  return (
    <>
      <Container>
        <span>Subtotal:</span>
        <h1>{formatToDollars(199.98)}</h1>
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
