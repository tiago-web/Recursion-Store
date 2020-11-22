import React from 'react';
import { Link } from 'react-router-dom';
import Carousel, { Item } from '../../components/Carousel';
import Navbar from '../../components/Navbar';

import {
  Container,
  Section,
  ProductOffers,
  ProductOffer,
  SeeProducts,
  SeeProduct,
} from './styles';

const Home: React.FC = () => {
  const items = [
    {
      id: 0,
      imageUrl:
        'https://calvinklein.scene7.com/is/image/CalvinKlein/54016593_466_main?wid=730&hei=961&fmt=jpeg&qlt=85%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0',
      name: 'Sergio Sanchez',
      description:
        'The best of the best, something that you have never seen before!',
    },
    {
      id: 1,
      name: 'Banner Title #2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ] as Item[];

  return (
    <>
      <Navbar />
      <Section>
        <Carousel items={items} navButtons height={420} />
      </Section>
      <Section>
        <Container>
          <h1>Offers you might Like</h1>
          <ProductOffers>
            <ProductOffer>
              <Link to="product-detail">
                <img
                  src="https://digital.michaelkors.com/refreshes/2020/holiday/refresh1/global/desktop/homepage/HP_PROMO_11-1.jpg"
                  alt="MK"
                />
                <strong>Dress V-shape</strong>
                <span>CA$499.99</span>
              </Link>
            </ProductOffer>
            <ProductOffer>
              <Link to="product-detail">
                <img
                  src="https://digital.michaelkors.com/refreshes/2020/holiday/refresh1/global/desktop/homepage/HP_PROMO_11-1.jpg"
                  alt="MK"
                />
                <strong>Dress V-shape</strong>
                <span>CA$499.99</span>
              </Link>
            </ProductOffer>
            <ProductOffer>
              <Link to="product-detail">
                <img
                  src="https://digital.michaelkors.com/refreshes/2020/holiday/refresh1/global/desktop/homepage/HP_PROMO_11-1.jpg"
                  alt="MK"
                />
                <strong>Dress V-shape</strong>
                <span>CA$499.99</span>
              </Link>
            </ProductOffer>
            <ProductOffer>
              <Link to="product-detail">
                <img
                  src="https://digital.michaelkors.com/refreshes/2020/holiday/refresh1/global/desktop/homepage/HP_PROMO_11-1.jpg"
                  alt="MK"
                />
                <strong>Dress V-shape</strong>
                <span>CA$499.99</span>
              </Link>
            </ProductOffer>
          </ProductOffers>
        </Container>
      </Section>
      <Section>
        <SeeProducts>
          <SeeProduct>
            <strong>Underwear</strong>
            <Link to="products">See Products</Link>
          </SeeProduct>
          <SeeProduct>
            <strong>Jackets</strong>
            <Link to="products">See Products</Link>
          </SeeProduct>
          <SeeProduct>
            <strong>T-Shirts</strong>
            <Link to="products">See Products</Link>
          </SeeProduct>
          <SeeProduct>
            <strong>Pants</strong>
            <Link to="products">See Products</Link>
          </SeeProduct>
        </SeeProducts>
      </Section>
    </>
  );
};

export default Home;
