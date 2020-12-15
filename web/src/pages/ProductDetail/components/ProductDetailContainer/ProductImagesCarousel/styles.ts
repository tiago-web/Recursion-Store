import styled from 'styled-components';

import {
  CarouselProvider,
  ButtonBack,
  ButtonNext,
  ButtonBackProps,
} from 'pure-react-carousel';
import { shade } from 'polished';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  position: relative;
  width: 600px;
  height: 650px;
  display: flex;
  justify-content: center;

  .carousel {
    width: 600px;
    height: 650px;
  }
`;

// export const Carousel = styled(CarouselProvider)`
//   position: relative;
//   width: 350px;

//   display: flex;
//   justify-content: center;
// `;

export const SlideImage = styled.div`
  width: 600px;
  height: 650px;
  border-radius: 5px;
  margin: 0 auto 8px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 600px 650px;

  -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.07);
  -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.07);
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.07);
`;

export const CustomButtonBack = styled(ButtonBack)<ButtonBackProps>`
  transition: all 0.2s;
  border-radius: 50%;
  padding: 4px;

  svg {
    font-size: 42px;
  }

  position: absolute;
  top: 40%;
  left: 30px;
  z-index: 5;

  border: none;
  outline: none;

  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  color: rgba(0, 0, 0, 0.5);

  &:hover {
    background: ${shade(0.3, 'rgba(0, 0, 0, 0.5)')};

    color: rgba(255, 255, 255, 0.8);
  }
`;

export const CustomButtonNext = styled(ButtonNext)`
  transition: all 0.2s;
  border-radius: 50%;
  padding: 4px;

  svg {
    font-size: 42px;
  }

  border: none;
  outline: none;

  position: absolute;
  top: 40%;
  right: 30px;
  z-index: 5;

  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  color: rgba(0, 0, 0, 0.5);

  &:hover {
    background: ${shade(0.3, 'rgba(0, 0, 0, 0.5)')};

    color: rgba(255, 255, 255, 0.8);
  }
`;
