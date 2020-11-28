import React from 'react';

import { Link } from 'react-router-dom';
import Button from '../../../../../components/Button';

import { Container } from './styles';

interface ProductReviewHeaderProps {
  productId: string;
}

const ProductReviewHeader: React.FC<ProductReviewHeaderProps> = ({
  productId,
}) => {
  function handleViewAllReviews(): void {
    console.log(productId);
  }

  return (
    <Container>
      <h1>Reviews</h1>
      <Button onClick={handleViewAllReviews}>READ ALL REVIEWS</Button>
      <Link to={`/product/review/${productId}`}>WRITE A REVIEW</Link>
    </Container>
  );
};

export default ProductReviewHeader;
