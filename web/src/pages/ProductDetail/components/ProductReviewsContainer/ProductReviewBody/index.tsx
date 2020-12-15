import React, { useCallback, useEffect, useState } from 'react';
import { FiThumbsDown, FiThumbsUp } from 'react-icons/fi';

import { Container, ReviewContainer, Info, ReviewBody, Likes } from './styles';
import { Review, User } from '../../..';
import Button from '../../../../../components/Button';
import formatDateToOrderDate from '../../../../../utils/formatDateToOrderDate';
import { useAuth } from '../../../../../contexts/AuthContext';

interface ProductReviewBodyProps {
  productId: string;
  title: string;
  showAllReviews: boolean;
  reviews: Review[];
  users: User[];
}

const ProductReviewBody: React.FC<ProductReviewBodyProps> = ({
  title,
  showAllReviews,
  reviews,
  users,
}) => {
  const [loadMore, setLoadMore] = useState(3);

  const handleLoadMoreReviews = useCallback(() => {
    setLoadMore(loadMore + 3);
  }, [loadMore]);

  return (
    <Container>
      {showAllReviews ? (
        <>
          {reviews.slice(0, loadMore).map(review => {
            const user = users.find(u => u._id === review.createdBy);
            console.log(review);

            return (
              <ReviewContainer key={review._id}>
                <Info>
                  {user ? (
                    <span>
                      {user.firstName} {user.lastName}
                    </span>
                  ) : (
                    <span>No Name</span>
                  )}

                  <span>{formatDateToOrderDate(review.createdAt)}</span>
                </Info>

                <ReviewBody>
                  <strong>{review.title}</strong>
                  <p>{review.body}</p>
                  <Likes>
                    <button type="button">
                      <FiThumbsUp size={18} color="#909ea9" />
                    </button>
                    <span>3900</span>
                    <button type="button">
                      <FiThumbsDown size={18} color="#909ea9" />
                    </button>
                    <span>2</span>
                  </Likes>
                </ReviewBody>
              </ReviewContainer>
            );
          })}
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
          {reviews.slice(0, 1).map(r => {
            const user = users.find(u => u._id === r.createdBy);

            return (
              <ReviewContainer key={r._id}>
                <Info>
                  {user ? (
                    <span>
                      {user.firstName} {user.lastName}
                    </span>
                  ) : (
                    <span>No Name</span>
                  )}
                  <span>{formatDateToOrderDate(r.createdAt)}</span>
                </Info>
                <ReviewBody>
                  <strong>{r.title}</strong>
                  <p>{r.body}</p>
                  <Likes>
                    <button type="button">
                      <FiThumbsUp size={18} color="#909ea9" />
                    </button>
                    <span>3900</span>
                    <button type="button">
                      <FiThumbsDown size={18} color="#909ea9" />
                    </button>
                    <span>2</span>
                  </Likes>
                </ReviewBody>
              </ReviewContainer>
            );
          })}
        </>
      )}
    </Container>
  );
};

export default ProductReviewBody;
