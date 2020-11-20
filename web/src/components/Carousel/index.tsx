import React from 'react';

import { CarouselImage, MaterialCarousel, CarouselContainer } from './styles';

interface Item {
  id: number;
  imageUrl?: string;
  name: string;
  description: string;
}

const Carousel: React.FC = () => {
  const items = [
    {
      id: 0,
      imageUrl:
        'https://avatars1.githubusercontent.com/u/25516049?s=400&u=3111610864f1e0c93733e568ae35e42433d9e217&v=4',
      name: 'Random Name #1',
      description: 'Probably the most random thing you have ever seen!',
    },
    {
      id: 1,
      name: 'Random Name #2',
      description: 'Hello World!',
    },
  ] as Item[];

  return (
    <MaterialCarousel
      navButtonsAlwaysVisible
      animation="slide"
      autoPlay={false}
    >
      {items.map(item => (
        <CarouselContainer key={item.id}>
          <div>
            <h1>{item.name}</h1>
            <p>{item.description}</p>
          </div>
          <CarouselImage
            imageUrl={!!item.imageUrl}
            src={item.imageUrl}
            alt="Product Name"
          />
        </CarouselContainer>
      ))}
    </MaterialCarousel>
  );
};

export default Carousel;
