import React from 'react';
import { CarouselProps as DefaultCarouselProps } from 'react-material-ui-carousel';

import {
  MaterialCarousel,
  CarouselContainer,
  CarouselTitle,
  CarouselDescription,
  CarouselImage,
} from './styles';

export interface ImagesProps {
  imageUrl: string;
}

export interface Item {
  id: string;
  imageUrl?: string;
  name?: string;
  description?: string;
}

interface CarouselProps extends DefaultCarouselProps {
  items: Item[];
  height: number;
  backgroundColor?: string;
}

const Carousel: React.FC<CarouselProps> = ({
  items,
  height,
  backgroundColor,
  ...rest
}) => {
  return (
    <MaterialCarousel
      height={height}
      animation="slide"
      background={backgroundColor}
      interval={5000}
      {...rest}
    >
      {items.map(item => (
        <CarouselContainer key={item.id} name={!!item.name}>
          <div>
            {item.name && <CarouselTitle>{item.name}</CarouselTitle>}
            {item.description && (
              <CarouselDescription>{item.description}</CarouselDescription>
            )}
          </div>
          <CarouselImage
            name={!!item.name}
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
