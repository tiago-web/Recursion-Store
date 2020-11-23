import React from 'react';
import { GridListProps as DefaultGridListProps } from '@material-ui/core/GridList';

import GridListTile from '@material-ui/core/GridListTile';
// import IconButton from '@material-ui/core/IconButton';
// import StarBorderIcon from '@material-ui/icons/StarBorder';
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

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       display: 'flex',
//       flexWrap: 'wrap',
//       justifyContent: 'space-around',
//       overflow: 'hidden',
//       backgroundColor: theme.palette.background.paper,
//     },
//     gridList: {
//       flexWrap: 'nowrap',
//       // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
//       transform: 'translateZ(0)',
//     },
//     title: {
//       color: theme.palette.primary.light,
//     },
//     titleBar: {
//       background:
//         'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
//     },
//   }),
// );

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
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
