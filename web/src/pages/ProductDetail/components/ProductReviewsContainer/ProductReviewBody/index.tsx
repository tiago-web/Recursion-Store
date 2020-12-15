import React, { useCallback, useState } from 'react';

import { Container } from './styles';
import { Review as IReview } from '../../..';
import Review from './Review';
import Button from '../../../../../components/Button';

interface ProductReviewBodyProps {
  showAllReviews: boolean;
  reviews: IReview[];
  handleDeleteReview(reviewId: string): void;
  productId: string;
}

const ProductReviewBody: React.FC<ProductReviewBodyProps> = ({
  showAllReviews,
  reviews,
  handleDeleteReview,
  productId,
}) => {
  const [loadMore, setLoadMore] = useState(3);

  const handleLoadMoreReviews = useCallback(() => {
    setLoadMore(loadMore + 3);
  }, [loadMore]);

  return (
    <Container>
      {showAllReviews ? (
        <>
          {reviews.slice(0, loadMore).map(review => (
            <Review
              key={review._id}
              review={review}
              handleDeleteReview={handleDeleteReview}
              productId={productId}
            />
          ))}
          {reviews.length > loadMore && (
            <Button
              style={{ marginTop: '48px' }}
              onClick={handleLoadMoreReviews}
            >
              Load 3 more
            </Button>
          )}
        </>
      ) : (
          <>
            <h1>Most Relevant</h1>
            <Review
              review={reviews[0]}
              handleDeleteReview={handleDeleteReview}
              productId={productId}
            />
          </>
        )}
    </Container>
  );
};

export default ProductReviewBody;
