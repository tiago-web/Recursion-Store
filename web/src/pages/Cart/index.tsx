import React, { useState } from 'react';
import AlsoLikeList from '../../components/AlsoLikeList';
import CarouselList from '../../components/CarouselList';

import CartContainer from './components/CartContainer';

import { Container, CartSection } from './styles';

export interface Product {
  id: number;
  imageUrl: string;
  name: string;
  price: string;
}

export interface Item {
  id?: number;
  imageUrl?: string;
  name?: string;
  size?: string;
  color?: string;
  quantity?: number;
  price?: number;
  discount?: boolean;
}

const Cart: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [items, setItems] = useState<Item[]>([]);

  // GET from db
  // const products = [
  //   {
  //     id: 0,
  //     imageUrl:
  //       'https://digital.michaelkors.com/refreshes/2020/holiday/refresh1/global/desktop/homepage/HP_PROMO_11-1.jpg',
  //     name: 'Dress V-shape',
  //     price: 'CA$499.99',
  //   },
  //   {
  //     id: 1,
  //     imageUrl:
  //       'https://www.prada.com/content/dam/pradanux_products/2/291/291832/1WQ8F0002/291832_1WQ8_F0002_S_202_MDF.png/_jcr_content/renditions/cq5dam.web.white.800.1000.webp',
  //     name: 'Dress V-shape',
  //     price: 'CA$499.99',
  //   },
  //   {
  //     id: 2,
  //     imageUrl:
  //       'https://digital.michaelkors.com/refreshes/2020/holiday/refresh1/global/desktop/homepage/HP_PROMO_11-1.jpg',
  //     name: 'Dress V-shape',
  //     price: 'CA$499.99',
  //   },
  //   {
  //     id: 3,
  //     imageUrl:
  //       'https://digital.michaelkors.com/refreshes/2020/holiday/refresh1/global/desktop/homepage/HP_PROMO_11-1.jpg',
  //     name: 'Dress V-shape',
  //     price: 'CA$499.99',
  //   },
  // ] as Product[];

  // GET from db
  // const items = [
  //   {
  //     id: 0,
  //     imageUrl:
  //       'https://digital.michaelkors.com/refreshes/2020/holiday/refresh1/global/desktop/homepage/HP_PROMO_11-1.jpg',
  //     name: 'Dress V-shape',
  //     size: 'Medium',
  //     color: 'Green',
  //     quantity: 2,
  //     price: 99.99,
  //     discount: false,
  //   },
  //   {
  //     id: 1,
  //     imageUrl:
  //       'https://digital.michaelkors.com/refreshes/2020/holiday/refresh1/global/desktop/homepage/HP_PROMO_11-1.jpg',
  //     name: 'Dress V-shape',
  //     size: 'Large',
  //     color: 'Black',
  //     quantity: 2,
  //     price: 99.99,
  //     discount: true,
  //   },
  //   {
  //     id: 1,
  //     imageUrl:
  //       'https://digital.michaelkors.com/refreshes/2020/holiday/refresh1/global/desktop/homepage/HP_PROMO_11-1.jpg',
  //     name: 'Dress V-shape',
  //     size: 'Large',
  //     color: 'Black',
  //     quantity: 2,
  //     price: 99.99,
  //     discount: true,
  //   },
  // ] as Item[];

  // const {increment, decrement, items} = useCart();

  // const addItem = (id: string): void => {
  //   increment(id);
  // }

  // const removeItem = (id: string): void => {
  //   decrement(id);
  // }

  return (
    <>
      <Container>
        <CartSection>
          <CartContainer items={items} />
        </CartSection>
        <CartSection>
          <h1>You also might like</h1>
          <AlsoLikeList />
          <CarouselList items={products} navButtonsAlwaysVisible height={420} />
        </CartSection>
      </Container>
    </>
  );
};

export default Cart;
