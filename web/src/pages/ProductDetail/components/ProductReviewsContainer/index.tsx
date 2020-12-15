import React, { useCallback, useEffect, useState } from 'react';

import ProductReviewHeader from './ProductReviewHeader';
import ProductReviewBody from './ProductReviewBody';
import { Product, User } from '../..';

import { Container } from './styles';

type ProductReviewContainerProps = Omit<Product, '_id'> & {
  productId: string;
  users: User[];
};

const ProductReviewContainer: React.FC<ProductReviewContainerProps> = ({
  productId,
  reviews,
  users,
}) => {
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [btnText, setBtnText] = useState('SHOW ALL REVIEWS');

  const toggleShowAllReviews = useCallback(() => {
    setShowAllReviews(prevState => !prevState);
    if (btnText === 'SHOW ALL REVIEWS') setBtnText('HIDE REVIEWS');
    if (btnText === 'HIDE REVIEWS') setBtnText('SHOW ALL REVIEWS');
  }, [btnText]);

  return (
    <>
      <Container>
        <ProductReviewHeader
          productId={productId}
          toggleShowAllReviews={toggleShowAllReviews}
          btnText={btnText}
        />
        <ProductReviewBody
          productId={productId}
          title="Most Relevant"
          showAllReviews={showAllReviews}
          reviews={reviews}
          users={users}
        />
      </Container>
    </>
  );
};

export default ProductReviewContainer;
