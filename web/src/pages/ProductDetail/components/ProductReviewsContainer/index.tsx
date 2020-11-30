import React, { useCallback, useState } from 'react';

import ProductReviewHeader from './ProductReviewHeader';
import ProductReviewBody from './ProductReviewBody';

import { Container } from './styles';

interface ProductReviewContainerProps {
  productId: string;
}

const ProductReviewContainer: React.FC<ProductReviewContainerProps> = ({
  productId,
}) => {
  const [showAllReviews, setShowAllReviews] = useState(false);

  const toggleShowAllReviews = useCallback(() => {
    setShowAllReviews(prevState => !prevState);
  }, []);

  return (
    <>
      <Container>
        <ProductReviewHeader
          productId={productId}
          toggleShowAllReviews={toggleShowAllReviews}
        />
        <ProductReviewBody
          productId={productId}
          title="Most Relevant"
          showAllReviews={showAllReviews}
        />
      </Container>
    </>
  );
};

export default ProductReviewContainer;
