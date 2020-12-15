import React, { useCallback, useEffect, useState } from 'react';

import {
  ThumbDown,
  ThumbDownAlt,
  ThumbUp,
  ThumbUpAlt,
} from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../../../../../contexts/AuthContext';
import Button from '../../../../../../components/Button';
import { Review as IReview } from '../../../..';
import api from '../../../../../../services/api';
import formatDateToOrderDate from '../../../../../../utils/formatDateToOrderDate';

import { Container, Info, ReviewBody, Likes, LikeButton } from './styles';

interface ReviewProps {
  review: IReview;
  handleDeleteReview(reviewId: string): void;
  productId: string;
}

const Review: React.FC<ReviewProps> = ({
  review,
  handleDeleteReview,
  productId,
}) => {
  const history = useHistory();

  const [isAdminUser, setIsAdminUser] = useState(false);
  const [isReviewOwner, setIsReviewOwner] = useState(false);
  const { user: localStorageUser } = useAuth();
  const [userName, setUserName] = useState('');

  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  useEffect(() => {
    api
      .get(`users/${review.createdBy}`)
      .then((response: any) =>
        setUserName(
          `${response.data.firstName} ${response.data.lastName} (${response.data.permission})`,
        ),
      );
  }, [review.createdBy]);

  useEffect(() => {
    review.userInteractions.map(interaction =>
      interaction.action === 'like'
        ? setLikes(prevState => prevState + 1)
        : setDislikes(prevState => prevState + 1),
    );
  }, [review.userInteractions]);

  useEffect(() => {
    if (localStorageUser) {
      const userInteracted = review.userInteractions.find(
        interaction => interaction.userId === localStorageUser._id,
      );

      if (userInteracted) {
        userInteracted.action === 'like' ? setLiked(true) : setDisliked(true);
      }
    }
  }, [review.userInteractions, localStorageUser]);

  useEffect(() => {
    if (localStorageUser) {
      setIsAdminUser(
        !(!localStorageUser || localStorageUser.permission === 'User'),
      );
    }
  }, [localStorageUser]);

  useEffect(() => {
    if (localStorageUser) {
      if (localStorageUser._id === review.createdBy) {
        setIsReviewOwner(true);
      }
    }
  }, [review.createdBy, localStorageUser]);

  const handleLike = useCallback(async () => {
    if (localStorageUser) {
      if (!liked && !disliked) {
        await api.post(`reviews/interaction/${review._id}`, { action: 'like' });

        setLiked(true);
        setLikes(likes + 1);
      } else if (liked) {
        await api.delete(`reviews/interaction/${review._id}`);

        setLiked(false);
        setLikes(likes - 1);
      } else if (disliked) {
        await api.put(`reviews/interaction/${review._id}`);

        setLiked(true);
        setDisliked(false);
        setLikes(likes + 1);
        setDislikes(dislikes - 1);
      }
    } else {
      history.push('/login');
    }
  }, [liked, review._id, disliked, likes, dislikes, localStorageUser, history]);

  const handleDislike = useCallback(async () => {
    if (localStorageUser) {
      if (!liked && !disliked) {
        await api.post(`reviews/interaction/${review._id}`, {
          action: 'dislike',
        });

        setDisliked(true);
        setDislikes(dislikes + 1);
      } else if (disliked) {
        await api.delete(`reviews/interaction/${review._id}`);

        setDisliked(false);
        setDislikes(dislikes - 1);
      } else if (liked) {
        await api.put(`reviews/interaction/${review._id}`);

        setDisliked(true);
        setLiked(false);
        setDislikes(dislikes + 1);
        setLikes(likes - 1);
      }
    } else {
      history.push('/login');
    }
  }, [disliked, liked, review._id, likes, dislikes, localStorageUser, history]);

  return (
    <Container key={review._id}>
      <Info>
        <span>{userName}</span>

        <span>{formatDateToOrderDate(review.createdAt)}</span>
      </Info>

      <ReviewBody>
        <strong>{review.title}</strong>
        <p>{review.body}</p>
        <Likes>
          <LikeButton type="button" onClick={handleLike} selected={liked}>
            {liked ? <ThumbUp /> : <ThumbUpAlt />}
            <span>{likes}</span>
          </LikeButton>
          <LikeButton type="button" onClick={handleDislike} selected={disliked}>
            {disliked ? <ThumbDown /> : <ThumbDownAlt />}
            <span>{dislikes}</span>
          </LikeButton>
        </Likes>
      </ReviewBody>
      {(isAdminUser || isReviewOwner) && (
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
