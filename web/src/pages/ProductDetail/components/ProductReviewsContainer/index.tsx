import React, { useCallback, useState } from 'react';

import ProductReviewHeader from './ProductReviewHeader';
import ProductReviewBody from './ProductReviewBody';
import { Review } from '../..';

import { Container } from './styles';

interface ProductReviewContainerProps {
  productId: string;
  reviews: Review[];
  handleDeleteReview(reviewId: string): void;
}

const ProductReviewContainer: React.FC<ProductReviewContainerProps> = ({
  productId,
  reviews,
  handleDeleteReview,
}) => {
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [btnText, setBtnText] = useState('SHOW ALL REVIEWS');

  const toggleShowAllReviews = useCallback(() => {
    setShowAllReviews(prevState => !prevState);
    if (btnText === 'SHOW ALL REVIEWS') setBtnText('HIDE REVIEWS');
    if (btnText === 'HIDE REVIEWS') setBtnText('SHOW ALL REVIEWS');
  }, [btnText]);

  return (
    <>
      <Container>
        <ProductReviewHeader
          productId={productId}
          toggleShowAllReviews={toggleShowAllReviews}
          btnText={btnText}
        />
        <ProductReviewBody
          showAllReviews={showAllReviews}
          reviews={reviews}
          handleDeleteReview={handleDeleteReview}
          productId={productId}
        />
      </Container>
    </>
  );
};

export default ProductReviewContainer;
