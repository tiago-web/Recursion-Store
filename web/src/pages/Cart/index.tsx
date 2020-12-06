import React, { useEffect, useState } from 'react';

import AlsoLikeList from '../../components/AlsoLikeList';
import { useCart } from '../../contexts/CartContext';
import CartContainer from './components/CartContainer';

import { Container, CartSection } from './styles';

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
          <h1>You also might like</h1>
          <AlsoLikeList />
          {/* <CarouselList items={items} navButtonsAlwaysVisible height={420} /> */}
        </CartSection>
      </Container>
    </>
  );
};

export default Cart;
