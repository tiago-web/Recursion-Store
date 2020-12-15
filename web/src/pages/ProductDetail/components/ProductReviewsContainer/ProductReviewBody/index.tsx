import React, { useCallback, useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { Container, NoReviewsContainer } from './styles';
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
  const [isReview, setIsReview] = useState(false);
  const [title, setTitle] = useState('Most Relevant');

  useEffect(() => {
    if (reviews.length <= 0) {
      setIsReview(false);
      setTitle('No Reviews yet');
    } else {
      setIsReview(true);
      setTitle('Most Relevant');
    }
  }, [reviews]);

  const handleLoadMoreReviews = useCallback(() => {
    setLoadMore(loadMore + 3);
  }, [loadMore]);

  return (
    <>
      {isReview ? (
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
                <h1>{title}</h1>
                <Review
                  review={reviews[0]}
                  handleDeleteReview={handleDeleteReview}
                  productId={productId}
                />
              </>
            )}
        </Container>
      ) : (
          <>
            <NoReviewsContainer>
              <h2>{title}</h2>
              <span>Be the first to review</span>
              <span>
                Click on the write a review button above an tell us how you feel
                about this product.
            </span>
            </NoReviewsContainer>
          </>
        )}
    </>
  );
};

export default ProductReviewBody;
