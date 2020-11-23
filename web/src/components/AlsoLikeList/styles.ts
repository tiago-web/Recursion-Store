import styled from 'styled-components';
import GridList from '@material-ui/core/GridList';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow: hidden;
  /* background:  */
`;

export const GridListing = styled(GridList)`
  flex-wrap: nowrap;
  transform: translateZ(0);

  .Carousel-indicators-2 {
    display: none;
  }

  .Carousel-indicators-9 {
    display: none;
  }

  .CarouselItem {
    width: 75vw;
  }
`;

export const GridListTileBar = styled.div`
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0.3) 70%,
    rgba(0, 0, 0, 0) 100%
  );
  color: var(--title-color);
`;
