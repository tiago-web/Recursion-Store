import styled from 'styled-components';
import Carousel from 'react-material-ui-carousel';

interface CarouselProps {
  imageUrl?: boolean;
  name?: boolean;
  height?: number;
  background?: string;
}

export const CarouselImage = styled.img<CarouselProps>`
  height: ${props => (props.name ? 300 : 800)}px;
  width: ${props => (props.name ? 250 : 750)}px;
  border-radius: 5px;

  display: ${props => (props.imageUrl ? 'block' : 'none')};
`;

export const MaterialCarousel = styled(Carousel)<CarouselProps>`
  height: ${props => props.height}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  background: ${props => (props.background ? props.background : 'none')};

  .Carousel-indicators-2 {
    display: none;
  }

  .Carousel-indicators-9 {
    position: absolute;
    bottom: 0;

    .Carousel-active {
      color: #e0e1e2;
    }
  }

  .CarouselItem {
    width: 75vw;
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
  display: flex;
  align-items: center;
  justify-content: ${props => (props.name ? 'space-around' : 'center')};
`;

export const CarouselTitle = styled.h1`
  font-family: Roboto, Ubunto, sans-serif;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const CarouselDescription = styled.p`
  color: #e0e1e2;
`;
