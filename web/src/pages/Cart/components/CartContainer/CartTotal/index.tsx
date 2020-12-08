import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { useHistory } from 'react-router-dom';
import Button from '../../../../../components/Button';
import formatToDollars from '../../../../../utils/formatToDollars';
import { Product } from '../../..';

import { Container } from './styles';
import { ProductApiProps } from '../CartItemContainer';
import api from '../../../../../services/api';

interface CartTotalProps {
  products: Product[];
  isEmpty: boolean;
}

const CartTotal: React.FC<CartTotalProps> = ({ products, isEmpty }) => {
  const [productsApi, setProductsApi] = useState<ProductApiProps[]>([]);
  const history = useHistory();

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const response = await api.get('products');

      setProductsApi(response.data);
    }

    loadProducts();
  }, []);

  const totalCart = useMemo(() => {
    const total = products.reduce((accumulator, product) => {
      const qtyTotal = product.items.reduce((accumulatorItem, item) => {
        return accumulatorItem + item.quantity;
      }, 0);
      const productApi = productsApi.find(p => p._id === product.productId);
      let subTotal = 0;
      if (productApi) {
        subTotal = productApi.price * qtyTotal;
      }

      return accumulator + subTotal;
    }, 0);

    return total;
  }, [products, productsApi]);

  const handleSendToCheckout = useCallback(() => {
    history.push('/checkout');
  }, [history]);

  return (
    <>
      <Container>
        <span>Subtotal: </span>
        <h1>{formatToDollars(totalCart)}</h1>
        {isEmpty ? (
          <Button disabled>Checkout</Button>
        ) : (
            <Button onClick={handleSendToCheckout}>Checkout</Button>
          )}
        <form action="">
          <input type="text" placeholder="Enter Coupon" />
          <Button>Apply</Button>
        </form>
      </Container>
    </>
  );
};

export default CartTotal;
