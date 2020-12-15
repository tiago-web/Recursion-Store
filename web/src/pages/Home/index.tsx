import React from 'react';
import Carousel, { Item } from '../../components/Carousel';
import ProductsOverview from './components/ProductsOverview';
import NewCollectionProducts from './components/NewCollectionProducts';

import coughingImg from '../../assets/coughing.svg';
import santaImg from '../../assets/santa.svg';
import mobileAppImg from '../../assets/mobileApp.svg';

import { Container, Section } from './styles';

const Home: React.FC = () => {
  const items = [
    {
      id: '0',
      imageUrl: `${santaImg}`,
      imageWidth: 35,
      name: 'Christmas is comming!',
      description:
        'Shop our christmas offers to give the best gift to who you love: a RECURSION fashion piece!',
    },
    {
      id: '1',
      imageUrl: `${coughingImg}`,
      imageWidth: 40,
      name: 'COVID-19, we need to stop it!',
      description:
        'It is time to stop the spread of the virus. The RECURSION Store is taking all the precautions needed to mantain our customers and employees safe. We offer a safe kit to help the community, send a message to know how to receive yours.',
    },
    {
      id: '2',
      imageUrl: `${mobileAppImg}`,
      imageWidth: 40,
      name: 'Recursion App is one step from realeasing!',
      description:
        "Our mobile app is 90% built to fit our customer needs. Don't forget to download it receive our best offers before everyone.",
    },
  ] as Item[];

  return (
    <>
      <Section>
        <Carousel
          backgroundColor="#341C49"
          items={items}
          timeout={{ enter: 600, exit: 450 }}
          navButtonsAlwaysVisible
          height={70}
        />
      </Section>
      <Section>
        <Container>
          <h1>New Collection</h1>
          <NewCollectionProducts />
        </Container>
      </Section>
      <Section>
        <ProductsOverview />
      </Section>
    </>
  );
};

export default Home;
