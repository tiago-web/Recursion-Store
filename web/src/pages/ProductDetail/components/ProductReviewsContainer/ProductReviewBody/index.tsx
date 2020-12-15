import React, { useCallback, useEffect, useState } from 'react';
import { FiThumbsDown, FiThumbsUp } from 'react-icons/fi';

import { Container, ReviewContainer, Info, ReviewBody, Likes } from './styles';
import { Review, User } from '../../..';
import Button from '../../../../../components/Button';
import formatDateToOrderDate from '../../../../../utils/formatDateToOrderDate';

interface ProductReviewBodyProps {
  productId: string;
  title: string;
  showAllReviews: boolean;
  reviews: Review[];
  users: User[];
  handleDeleteReview(reviewId: string): void;
}

const ProductReviewBody: React.FC<ProductReviewBodyProps> = ({
  title,
  showAllReviews,
  reviews,
  users,
  handleDeleteReview,
}) => {
  const [loadMore, setLoadMore] = useState(3);
  // const [reviewOwner, setReviewOwner] = useState();

  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLoadMoreReviews = useCallback(() => {
    setLoadMore(loadMore + 3);
  }, [loadMore]);

  // useEffect(() => {
  //   if (reviews) {
  //   }
  // }, []);

  return (
    <Container>
      {showAllReviews ? (
        <>
          {reviews.slice(0, loadMore).map(review => {
            <Review review={review} handleDeleteReview={handleDeleteReview} />;

            // review.userInteractions.map(userInteraction =>
            //   userInteraction.action === 'like'
            //     ? setLikes(likes + 1)
            //     : setLikes(likes),
            // );

            // review.userInteractions.map(userInteraction =>
            //   userInteraction.action === 'dislike'
            //     ? setLikes(likes + 1)
            //     : setLikes(likes),
            // );
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
            <ReviewContainer key={reviews[0]._id}>
              <Info>
                {user ? (
                  <span>
                    {user.firstName} {user.lastName}
                  </span>
                ) : (
                    <span>No Name</span>
                  )}
                <span>{formatDateToOrderDate(reviews[0].createdAt)}</span>
              </Info>
              <ReviewBody>
                <strong>{reviews[0].title}</strong>
                <p>{reviews[0].body}</p>
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
          </>
        )}
    </Container>
  );
};

export default ProductReviewBody;
