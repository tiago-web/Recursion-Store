import React from 'react';

import ProductReviewHeader from './ProductReviewHeader';
import ProductReviewBody from './ProductReviewBody';

import { Container } from './styles';

interface ProductReviewContainerProps {
  productId: string;
}

const ProductReviewContainer: React.FC<ProductReviewContainerProps> = ({
  productId,
}) => {
  return (
    <>
      <Container>
        <ProductReviewHeader productId={productId} />
        <ProductReviewBody productId={productId} />
      </Container>
    </>
  );
};

export default ProductReviewContainer;
