import React from 'react';
import { GridListProps as DefaultGridListProps } from '@material-ui/core/GridList';

import GridListTile from '@material-ui/core/GridListTile';
import { Container, GridListing, GridListTileBar } from './styles';
import { CarouselContainer, MaterialCarousel } from '../Carousel/styles';

export interface Product {
  id: number;
  imageUrl: string;
  name: string;
  price: string;
}

interface GridListProps extends DefaultGridListProps {
  products: Product[];
}

const AlsoLikeList: React.FC<GridListProps> = ({ products, ...rest }) => {
  return (
    <MaterialCarousel navButtonsAlwaysVisible animation="slide" interval={5000}>
      <Container>
        <GridListing cols={2.5} {...rest}>
          {products.map(product => (
            <CarouselContainer key={product.imageUrl}>
              <GridListTile>
                <img src={product.imageUrl} alt={product.name} />
                <GridListTileBar title={product.name} />
              </GridListTile>
            </CarouselContainer>
          ))}
        </GridListing>
      </Container>
    </MaterialCarousel>
  );
};

export default AlsoLikeList;
