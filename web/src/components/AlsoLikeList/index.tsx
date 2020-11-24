import React from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { Container } from './styles';

// export interface Product {
//   id: number;
//   imageUrl: string;
//   name: string;
//   price: string;
// }

// interface GridListProps extends DefaultGridListProps {
//   products: Product[];
// }

interface List {
  name: string;
}

const AlsoLikeList: React.FC = () => {
  const list = [
    { name: 'item1' },
    { name: 'item2' },
    { name: 'item3' },
    { name: 'item4' },
    { name: 'item5' },
    { name: 'item6' },
  ] as List[];

  const handleScrollLeft = (): void => { };
  const handleScrollRight = (): void => { };

  return (
    <>
      <Container>
        {list.map(el => (
          <div key={el.name}>{el.name}</div>
        ))}
        <button className="left" type="button" onClick={handleScrollLeft}>
          <FiArrowLeft size={20} />
        </button>
        <button className="right" type="button" onClick={handleScrollRight}>
          <FiArrowRight size={20} />
        </button>
      </Container>
    </>
    // <MaterialCarousel navButtonsAlwaysVisible animation="slide" interval={5000}>
    //   <Container>
    //     <GridListing cols={2.5} {...rest}>
    //       {products.map(product => (
    //         <CarouselContainer key={product.imageUrl}>
    //           <GridListTile>
    //             <img src={product.imageUrl} alt={product.name} />
    //             <GridListTileBar title={product.name} />
    //           </GridListTile>
    //         </CarouselContainer>
    //       ))}
    //     </GridListing>
    //   </Container>
    // </MaterialCarousel>
  );
};

export default AlsoLikeList;
