import React from 'react';
import { FiThumbsDown, FiThumbsUp } from 'react-icons/fi';

import { Container, Review, Info, ReviewBody, Likes } from './styles';

interface ProductReviewBodyProps {
  productId: string;
  title: string;
}

const ProductReviewBody: React.FC<ProductReviewBodyProps> = ({
  productId,
  title,
}) => {
  return (
    <Container>
      <h1>{title}</h1>
      <Review>
        <Info>
          <span>Sergio</span>
          <span>Address</span>
          <span>Date</span>
        </Info>
        <ReviewBody>
          <strong>Title of the review</strong>
          <p>
            Tenete ergo quod si servitus quae natura liber, et aliena tua tunc
            impeditur. Dolebis, et turbabuntur, et invenietis, cum culpa tam dis
            hominibusque. Quod si tibi tantum sit propria et aliena
          </p>
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
      </Review>
    </Container>
  );
};

export default ProductReviewBody;
