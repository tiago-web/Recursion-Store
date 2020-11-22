import React from 'react';
import Navbar from '../../components/Navbar';

import { Container, Form } from './styles';

import Button from '../../components/Button';

const ProductReview: React.FC = () => {
  return (
    <>
      <Navbar />
      <Container>
        <h1>
          Write a review for <span>Dress V-shape</span>
        </h1>
        <div className="form">
          <img
            src="https://digital.michaelkors.com/refreshes/2020/holiday/refresh1/global/desktop/homepage/HP_PROMO_11-1.jpg"
            alt="Dress"
          />
          <Form action="">
            <input type="text" placeholder="Title" />
            <textarea placeholder="Review" cols={4} rows={18} />
            <Button>SEND</Button>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default ProductReview;
