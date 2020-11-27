import React from 'react';

import ProductReviewHeader from './ProductReviewHeader';
import ProductReviewBody from './ProductReviewBody';

import { Container } from './styles';

const ProductReviewContainer: React.FC = () => {
  return (
    <>
      <Container>
        <ProductReviewHeader />
        <ProductReviewBody />
      </Container>
    </>
  );
};

export default ProductReviewContainer;
