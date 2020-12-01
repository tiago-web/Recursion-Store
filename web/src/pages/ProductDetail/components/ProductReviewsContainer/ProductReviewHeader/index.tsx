import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import Button from '../../../../../components/Button';

import { Container } from './styles';

interface ProductReviewHeaderProps {
  productId: string;
  toggleShowAllReviews(): void;
  btnText: string;
}

const ProductReviewHeader: React.FC<ProductReviewHeaderProps> = ({
  productId,
  toggleShowAllReviews,
  btnText,
}) => {
  return (
    <Container>
      <h1>Reviews</h1>
      <Button onClick={toggleShowAllReviews}>{btnText}</Button>
      <Link to={`/product/review/${productId}`}>WRITE A REVIEW</Link>
    </Container>
  );
};

export default ProductReviewHeader;
