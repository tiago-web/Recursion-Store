import React, { useCallback, useEffect, useState } from 'react';

import { useAuth } from '../../../../../contexts/AuthContext';
import { Container, Info, ReviewBody, Likes } from './styles';

interface ReviewProps {
  review: string;
  handleDeleteReview(reviewId: string): void;
}

const Review: React.FC<ReviewProps> = ({ review, handleDeleteReview }) => {
  const [isAdminUser, setIsAdminUser] = useState(false);
  const { user: localStorageUser } = useAuth();

  const user = users.find(u => u._id === review.createdBy);

  useEffect(() => {
    setIsAdminUser(
      !(!localStorageUser || localStorageUser.permission === 'User'),
    );
  }, [localStorageUser]);

  return (
    <Container key={review._id}>
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
      {isAdminUser && (
        <Button
          className="deleteBtn"
          onClick={() => handleDeleteReview(review._id)}
        >
          delete
        </Button>
      )}
    </Container>
  );
};

export default Review;
