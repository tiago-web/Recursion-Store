import React, { useEffect, useState } from 'react';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import {
  Container,
  CustomButtonBack,
  CustomButtonNext,
  SlideImage,
} from './styles';
import { ImagesProps } from '../../..';

interface ProductImagesCarouselProps {
  images: ImagesProps[];
}

const BestSellers: React.FC<ProductImagesCarouselProps> = ({ images }) => {
  return (
    <Container id="best-sellers">
      <CarouselProvider
        naturalSlideWidth={600}
        naturalSlideHeight={650}
        totalSlides={images.length}
      >
        <Slider>
          {images.map((image, index) => (
            <Slide key={image.id} index={index}>
              <SlideImage
                style={{
                  backgroundImage: `url(${image.imageUrl})`,
                }}
              />
            </Slide>
          ))}
        </Slider>
        <CustomButtonBack>
          <NavigateBeforeIcon />
        </CustomButtonBack>
        <CustomButtonNext>
          <NavigateNextIcon />
        </CustomButtonNext>
      </CarouselProvider>
    </Container>
  );
};

export default BestSellers;
