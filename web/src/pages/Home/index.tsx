import React from 'react';
import Carousel from '../../components/Carousel';
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
  return (
    <>
      <Navbar />
      <Section>
        <Carousel />
      </Section>
      <Section>
        <Container>
          <h1>Offers you might Like</h1>
          <ProductOffers>
            <ProductOffer>
              <a href="/">
                <img
                  src="https://digital.michaelkors.com/refreshes/2020/holiday/refresh1/global/desktop/homepage/HP_PROMO_11-1.jpg"
                  alt="MK"
                />
                <strong>Dress V-shape</strong>
                <span>CA$499.99</span>
              </a>
            </ProductOffer>
            <ProductOffer>
              <a href="/">
                <img
                  src="https://digital.michaelkors.com/refreshes/2020/holiday/refresh1/global/desktop/homepage/HP_PROMO_11-1.jpg"
                  alt="MK"
                />
                <strong>Dress V-shape</strong>
                <span>CA$499.99</span>
              </a>
            </ProductOffer>
            <ProductOffer>
              <a href="/">
                <img
                  src="https://digital.michaelkors.com/refreshes/2020/holiday/refresh1/global/desktop/homepage/HP_PROMO_11-1.jpg"
                  alt="MK"
                />
                <strong>Dress V-shape</strong>
                <span>CA$499.99</span>
              </a>
            </ProductOffer>
            <ProductOffer>
              <a href="/">
                <img
                  src="https://digital.michaelkors.com/refreshes/2020/holiday/refresh1/global/desktop/homepage/HP_PROMO_11-1.jpg"
                  alt="MK"
                />
                <strong>Dress V-shape</strong>
                <span>CA$499.99</span>
              </a>
            </ProductOffer>
          </ProductOffers>
        </Container>
      </Section>
      <Section>
        <SeeProducts>
          <SeeProduct>
            <strong>Underwear</strong>
            <a href="/">See Products</a>
          </SeeProduct>
          <SeeProduct>
            <strong>Underwear</strong>
            <a href="/">See Products</a>
          </SeeProduct>
          <SeeProduct>
            <strong>Underwear</strong>
            <a href="/">See Products</a>
          </SeeProduct>
          <SeeProduct>
            <strong>Underwear</strong>
            <a href="/">See Products</a>
          </SeeProduct>
        </SeeProducts>
      </Section>
    </>
  );
};

export default Home;
