import React from 'react';
import { CarouselProps as DefaultCarouselProps } from 'react-material-ui-carousel';

import {
  MaterialCarousel,
  CarouselContainer,
  CarouselTitle,
  CarouselDescription,
  CarouselImage,
} from './styles';

export interface Item {
  id: number;
  imageUrl?: string;
  name?: string;
  description?: string;
}

interface CarouselProps extends DefaultCarouselProps {
  items: Item[];
  height: number;
}

const CarouselList: React.FC<CarouselProps> = ({ items, height, ...rest }) => {
  // GET FROM THE DB
  // const items = [
  //   {
  //     id: 0,
  //     imageUrl:
  //       'https://avatars1.githubusercontent.com/u/25516049?s=400&u=3111610864f1e0c93733e568ae35e42433d9e217&v=4',
  //     name: 'Sergio Sanchez',
  //     description:
  //       'The best of the best, something that you have never seen before!',
  //   },
  //   {
  //     id: 1,
  //     name: 'Banner Title #2',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  // ] as Item[];

  return (
    <MaterialCarousel
      height={height}
      animation="slide"
      interval={5000}
      {...rest}
    >
      <CarouselContainer>
        {items.map(item => (
          <div key={item.id}>
            {item.name || item.description ? (
              <div>
                <CarouselTitle>{item.name}</CarouselTitle>
                <CarouselDescription>{item.description}</CarouselDescription>
              </div>
            ) : (
                ''
              )}
            <CarouselImage
              name={!!item.name}
              imageUrl={!!item.imageUrl}
              src={item.imageUrl}
              alt="Product Name"
            />
          </div>
        ))}
      </CarouselContainer>
    </MaterialCarousel>
  );
};

export default CarouselList;
