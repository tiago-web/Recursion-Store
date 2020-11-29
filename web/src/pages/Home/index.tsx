import React from 'react';
import Carousel, { Item } from '../../components/Carousel';
import Navbar from '../../components/Navbar';
import ProductOffers from './components/ProductOffers';
import ProductsOverview from './components/ProductsOverview';

import { Container, Section } from './styles';

const Home: React.FC = () => {
  const items = [
    {
      id: '0',
      imageUrl:
        'https://image.freepik.com/free-vector/christmas-santa-claus-character-with-lettering_23-2148386165.jpg',
      name: 'Christmas is comming!',
      description:
        'Shop our christmas offers to give the best gift to who you love: a RECURSION fashion piece!',
    },
    {
      id: '1',
      imageUrl:
        'https://cdn1.vectorstock.com/i/1000x1000/66/35/stop-coronavirus-covid-19-design-banner-vector-30366635.jpg',
      name: 'COVID-19, we need to stop it!',
      description:
        'It is time to stop the spread of the virus. The RECURSION Store is taking all the precautions needed to mantain our customers and employees safe. We offer a safe kit to help the community, send a message to know how to receive yours.',
    },
  ] as Item[];

  return (
    <>
      <Navbar />
      <Section>
        <Carousel
          backgroundColor="#d12121"
          items={items}
          navButtonsAlwaysVisible
          height={500}
        />
      </Section>
      <Section>
        <Container>
          <h1>Offers you might Like</h1>
          <ProductOffers />
        </Container>
      </Section>
      <Section>
        <ProductsOverview />
      </Section>
    </>
  );
};

export default Home;
