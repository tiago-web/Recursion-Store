import React, { useEffect, useState } from 'react';

import BestSellers from './components/BestSellers';
import CartContainer from './components/CartContainer';
import { useCart } from '../../contexts/CartContext';

import { Container, CartSection, BestSellersTitle } from './styles';

export interface Image {
  imageUrl: string;
}

export interface Item {
  color: string;
  sizeTag: string;
  quantity: number;
}

export interface Product {
  productId: string;
  items: Item[];
}

const Cart: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { products: localStorageProducts } = useCart();

  useEffect(() => {
    setProducts(localStorageProducts);
  }, [localStorageProducts]);

  return (
    <>
      <Container>
        <CartSection>
          <CartContainer products={products} />
        </CartSection>
        <CartSection>
          <BestSellersTitle>Best Sellers</BestSellersTitle>
          <BestSellers />
        </CartSection>
      </Container>
    </>
  );
};

export default Cart;
