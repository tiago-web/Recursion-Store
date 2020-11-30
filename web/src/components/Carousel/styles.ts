import styled from 'styled-components';
import Carousel from 'react-material-ui-carousel';

import { shade } from 'polished';

interface CarouselProps {
  imageUrl?: boolean;
  name?: boolean;
  height?: number;
  background?: string;
  imageWidth?: number;
}

export const CarouselImage = styled.img<CarouselProps>`
  height: ${props => (props.name ? '330px' : '80%')};
  width: ${props =>
    props.name ? (props.imageWidth ? `${props.imageWidth}%` : '100%') : '35%'};
  border-radius: 5px;

  z-index: 5;

  display: ${props => (props.imageUrl ? 'block' : 'none')};
`;

export const MaterialCarousel = styled(Carousel)<CarouselProps>`
  height: ${props => props.height}vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  background: ${props => (props.background ? props.background : 'none')};
  background-image: linear-gradient(200deg, #220f33, #220f33, #341c49, #462a5e);

  .indicatorContainer {
    position: absolute;
    bottom: 0;

    /* opacity: 0.9; */
  }

  .activeIndicator {
    color: #e06b50;
  }

  .nonActiveIndicator {
    color: #b1b3b6;
    &:hover {
      color: ${shade(0.3, '#B1B3B6')};
    }
  }

  .MuiIconButton-root {
    padding: 0;
  }

  .Carousel-button-14,
  .Carousel-button-24,
  .MuiButtonBase-root,
  .MuiIconButton-label .MuiSvgIcon-root {
    background: transparent;
    width: 45px;
    height: 45px;
    color: #fafafa;
  }
`;

export const CarouselContainer = styled.div<CarouselProps>`
  width: 80vw;
  min-height: 100%;
  margin-top: 10vh;

  display: flex;
  align-items: center;
  justify-content: ${props => (props.name ? 'space-around' : 'center')};

  @media screen and (max-width: 800px) {
    flex-direction: column;

    margin: 42px 0;

    img {
      flex: 1;
      margin: 24px 0;
    }
  }
`;

export const CarouselTitle = styled.h1`
  font-family: Roboto, Ubunto, sans-serif;
  font-weight: 700;
  margin-bottom: 10px;

  font-size: 1.8rem;

  text-shadow: 0px 0px 20px rgba(224, 107, 80, 0.3);
`;

export const CarouselDescription = styled.p`
  color: #e0e1e2;
  line-height: 1.4rem;

  max-width: 480px;
`;
