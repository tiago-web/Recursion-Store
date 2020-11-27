import React from 'react';

import { Link } from 'react-router-dom';
import Button from '../../../../../components/Button';

import { Container } from './styles';

const ProductReviewHeader: React.FC = () => {
  return (
    <Container>
      <h1>Reviews</h1>
      <Button>READ ALL REVIEWS</Button>
      <Link to="/product/review">WRITE A REVIEW</Link>
    </Container>
  );
};

export default ProductReviewHeader;
