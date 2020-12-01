import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../../../../components/Button';

import { Container } from './styles';

const EmptyCart: React.FC = () => {
  return (
    <>
      <Container>
        <div className="emptyCart">
          <strong>You have no items in your bag.</strong>
          <span>Don't know where to start? Here's our best sellers</span>
          <Button>
            <Link to="/products">Best Sellers</Link>
          </Button>
        </div>
      </Container>
    </>
  );
};

export default EmptyCart;
