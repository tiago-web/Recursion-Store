import styled from 'styled-components';
import Carousel from 'react-material-ui-carousel';

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
    props.name ? (props.imageWidth ? `${props.imageWidth}%` : '100%') : '55%'};
  border-radius: 5px;

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

  .Carousel-indicators-2 {
    display: none;
  }

  .Carousel-indicators-9,
  .Carousel-indicators-10,
  .Carousel-indicators-38 {
    position: absolute;
    bottom: 0;

    opacity: 0.9;

    .Carousel-active-11 {
      color: #fff;
    }
  }

  .MuiIconButton-root {
    padding: 0;
  }

  .Carousel-button-14 {
    background: transparent;
  }

  .MuiIconButton-label .MuiSvgIcon-root {
    width: 45px;
    height: 45px;
    color: #e0e1e2;
  }
`;

export const CarouselContainer = styled.div<CarouselProps>`
  width: 80vw;
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: ${props => (props.name ? 'space-around' : 'center')};
`;

export const CarouselTitle = styled.h1`
  font-family: Roboto, Ubunto, sans-serif;
  font-weight: 700;
  margin-bottom: 10px;

  font-size: 1.8rem;

  text-shadow: 0px 0px 20px rgba(224, 107, 80, 0.25);
`;

export const CarouselDescription = styled.p`
  color: #e0e1e2;
  line-height: 1.4rem;

  max-width: 480px;
`;
