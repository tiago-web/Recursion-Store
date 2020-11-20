import styled from 'styled-components';
import Carousel from 'react-material-ui-carousel';

interface CarouselImageProps {
  imageUrl: boolean;
}

export const CarouselImage = styled.img<CarouselImageProps>`
  height: 300px;
  width: 250px;
  border-radius: 5px;

  margin-left: 64px;

  display: ${props => (props.imageUrl ? 'block' : 'none')};
`;
export const MaterialCarousel = styled(Carousel)`
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  .Carousel-indicators-2 {
    display: none;
  }
`;
export const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
