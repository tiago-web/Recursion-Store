import React, { useEffect, useState } from 'react';

import { Product, Item, Image } from '../../..';

import { Container } from './styles';
import CartItem from './CartItem';
import api from '../../../../../services/api';
import { useCart } from '../../../../../contexts/CartContext';
import { ItemProps } from '../../../../Products/components/ProductList';

interface CartItemContainerProps {
  p: Product;
}

interface CartProductProps {
  _id: string;
  name: string;
  items: ItemProps[];
}

const CartItemContainer: React.FC<CartItemContainerProps> = ({ p }) => {
  const [productApi, setProductApi] = useState<CartProductProps>();
  const { deleteItem } = useCart();

  useEffect(() => {
    async function loadProduct(): Promise<void> {
      const response = await api.get(`products/${p.productId}`);

      setProductApi(response.data);
    }

    loadProduct();
  }, [p.productId]);

  function handleDeleteItem(productId: string, updatedItem: Item): void {
    try {
      deleteItem(productId, updatedItem);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container>
      {productApi && (
        <>
          <h2>{productApi.name}</h2>
          {p.items.map(item => (
            <CartItem
              key={item.color}
              productId={p.productId}
              item={item}
              handleDeleteItem={handleDeleteItem}
              imageName={productApi.name}
            />
          ))}
        </>
      )}
    </Container>
  );
};

export default CartItemContainer;
