import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

import Button from '../../../../../components/Button';

import { Container } from './styles';

const EmptyCart: React.FC = () => {
  const handleBestSellersClick = useCallback(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, []);

  return (
    <>
      <Container>
        <div className="emptyCart">
          <strong>You have no items in your bag.</strong>
          <span>Don't know where to start? Here's our best sellers</span>
          <Button onClick={handleBestSellersClick}>Best Sellers</Button>
        </div>
      </Container>
    </>
  );
};

export default EmptyCart;
