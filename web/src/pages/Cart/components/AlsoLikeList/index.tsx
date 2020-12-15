import React from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  ButtonFirst,
  ButtonLast,
} from 'pure-react-carousel';
import { CarouselContainer } from './styles';
import 'pure-react-carousel/dist/react-carousel.es.css';
const AlsoLikeList: React.FC = () => {
  return (
    <CarouselProvider
      visibleSlides={3}
      totalSlides={10}
      step={1}
      naturalSlideWidth={400}
      naturalSlideHeight={500}
    >
      <Slider>
        <Slide index={0}>I am the first Slide.</Slide>
        <Slide index={1}>I am the second Slide.</Slide>
        <Slide index={2}>I am the third Slide.</Slide>
        <Slide index={3}>I am the third Slide.</Slide>
        <Slide index={4}>I am the third Slide.</Slide>
        <Slide index={5}>I am the third Slide.</Slide>
        <Slide index={6}>I am the third Slide.</Slide>
        <Slide index={7}>I am the third Slide.</Slide>
        <Slide index={8}>I am the third Slide.</Slide>
        <Slide index={9}>I am the third Slide.</Slide>
      </Slider>
      <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext>
    </CarouselProvider>
  );
};

export default AlsoLikeList;
