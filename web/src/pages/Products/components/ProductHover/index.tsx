import React from 'react';
import { Link } from 'react-router-dom';

import { Container, ButtonsContainer, DetailsBtn, QuickAddBtn } from './styles';

interface ProductHoverProps {
  productId: string;
}

const ProductHover: React.FC<ProductHoverProps> = ({ productId }) => {
  return (
    <Container>
      {/* <ProductOptionSelector /> */}
      <ButtonsContainer>
        <DetailsBtn>
          <Link to={`/product-detail/${productId}`}>details</Link>
        </DetailsBtn>
        <QuickAddBtn>quick add</QuickAddBtn>
      </ButtonsContainer>
    </Container>
  );
};

export default ProductHover;
