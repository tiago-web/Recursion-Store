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
}

const ProductReviewBody: React.FC<ProductReviewBodyProps> = ({
  title,
  showAllReviews,
  reviews,
  users,
}) => {
  const [loadMore, setLoadMore] = useState(1);
  const [user, setUser] = useState<User>();

  const handleLoadMoreReviews = useCallback(() => {
    setLoadMore(loadMore + 1);
  }, [loadMore]);

  // console.log(users);

  return (
    <Container>
      {showAllReviews ? (
        <>
          {reviews.slice(0, loadMore).map(review => (
            <ReviewContainer key={review._id}>
              {users.find(u => u._id === review.createdBy && console.log(u))}

              <Info>
                {user ? <span>{user.firstName}</span> : <span>No Name</span>}

                <span>Toronto, ON</span>
                <span>{formatDateToOrderDate(review.createdAt)}</span>
              </Info>

              <ReviewBody>
                <strong>{review.title}</strong>
                <p>{review.body}</p>
                {/* <Likes>
                  <button type="button">
                    <FiThumbsUp size={18} color="#909ea9" />
                  </button>
                  <span>3900</span>
                  <button type="button">
                    <FiThumbsDown size={18} color="#909ea9" />
                  </button>
                  <span>2</span>
                </Likes> */}
              </ReviewBody>
            </ReviewContainer>
          ))}
          {reviews.length > loadMore && (
            <Button
              style={{ marginTop: '48px' }}
              onClick={handleLoadMoreReviews}
            >
              Load 1 more
            </Button>
          )}
        </>
      ) : (
          <>
            <h1>{title}</h1>
            {reviews.slice(0, 1).map(r => (
              <ReviewContainer key={r._id}>
                <Info>
                  <span>Sergio</span>
                  <span>Toronto, ON</span>
                  <span>{formatDateToOrderDate(r.createdAt)}</span>
                </Info>
                <ReviewBody>
                  <strong>{r.title}</strong>
                  <p>{r.body}</p>
                  {/* <Likes>
                <button type="button">
                  <FiThumbsUp size={18} color="#909ea9" />
                </button>
                <span>3900</span>
                <button type="button">
                  <FiThumbsDown size={18} color="#909ea9" />
                </button>
                <span>2</span>
              </Likes> */}
                </ReviewBody>
              </ReviewContainer>
            ))}
          </>
        )}
    </Container>
  );
};

export default ProductReviewBody;
