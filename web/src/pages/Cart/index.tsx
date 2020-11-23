import React from 'react';
import AlsoLikeList, { Product } from '../../components/AlsoLikeList';
import Navbar from '../../components/Navbar';

import { Container, CartSection } from './styles';

const Cart: React.FC = () => {
  const products = [
    {
      id: 0,
      imageUrl:
        'https://digital.michaelkors.com/refreshes/2020/holiday/refresh1/global/desktop/homepage/HP_PROMO_11-1.jpg',
      name: 'Dress V-shape',
      price: 'CA$499.99',
    },
    {
      id: 1,
      imageUrl:
        'https://www.prada.com/content/dam/pradanux_products/2/291/291832/1WQ8F0002/291832_1WQ8_F0002_S_202_MDF.png/_jcr_content/renditions/cq5dam.web.white.800.1000.webp',
      name: 'Dress V-shape',
      price: 'CA$499.99',
    },
    {
      id: 2,
      imageUrl:
        'https://digital.michaelkors.com/refreshes/2020/holiday/refresh1/global/desktop/homepage/HP_PROMO_11-1.jpg',
      name: 'Dress V-shape',
      price: 'CA$499.99',
    },
    {
      id: 3,
      imageUrl:
        'https://digital.michaelkors.com/refreshes/2020/holiday/refresh1/global/desktop/homepage/HP_PROMO_11-1.jpg',
      name: 'Dress V-shape',
      price: 'CA$499.99',
    },
  ] as Product[];

  return (
    <>
      <Navbar />
      <Container>
        <CartSection>
          <h1>Your Cart</h1>
        </CartSection>
        <CartSection>
          <h1>You also might like</h1>
          <AlsoLikeList products={products} />
        </CartSection>
      </Container>
    </>
  );
};

export default Cart;
