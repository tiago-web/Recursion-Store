import React from 'react';
import Carousel from '../../components/Carousel';
import Navbar from '../../components/Navbar';

import { Container, Section, ProductOffers, ProductOffer } from './styles';

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
              <img
                src="https://avatars1.githubusercontent.com/u/54996200?s=460&u=71727831f077b47e9e102c1c0e78240fe9b7d67b&v=4"
                alt="Tiago-git"
              />
              <span>Dress V-shape</span>
              <span>CA$499.99</span>
            </ProductOffer>
            <ProductOffer>
              <img
                src="https://avatars1.githubusercontent.com/u/54996200?s=460&u=71727831f077b47e9e102c1c0e78240fe9b7d67b&v=4"
                alt="Tiago-git"
              />
              <span>Dress V-shape</span>
              <span>CA$499.99</span>
            </ProductOffer>
            <ProductOffer>
              <img
                src="https://avatars1.githubusercontent.com/u/54996200?s=460&u=71727831f077b47e9e102c1c0e78240fe9b7d67b&v=4"
                alt="Tiago-git"
              />
              <span>Dress V-shape</span>
              <span>CA$499.99</span>
            </ProductOffer>
            <ProductOffer>
              <img
                src="https://avatars1.githubusercontent.com/u/54996200?s=460&u=71727831f077b47e9e102c1c0e78240fe9b7d67b&v=4"
                alt="Tiago-git"
              />
              <span>Dress V-shape</span>
              <span>CA$499.99</span>
            </ProductOffer>
          </ProductOffers>
        </Container>
      </Section>
      <Section>
        <Container>
          <img
            src="https://avatars1.githubusercontent.com/u/54996200?s=460&u=71727831f077b47e9e102c1c0e78240fe9b7d67b&v=4"
            alt="Tiago-git"
          />
        </Container>
      </Section>
    </>
  );
};

export default Home;
