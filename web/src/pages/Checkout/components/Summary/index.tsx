import React from 'react';

import Button from '../../../../components/Button';
import { Container } from './styles';

const Summary: React.FC = () => {
  return (
    <>
      <Container>
        <h1>Summary</h1>
        <div className="subtotal">
          <span>Subtotal:</span>
          <span>CA$104.99</span>
        </div>
        <div className="ship">
          <span>Shipping:</span>
          <span>CA$0.00</span>
        </div>
        <div className="tax">
          <span>Extimated Tax:</span>
          <span>CA$0.00</span>
        </div>
        <div className="total">
          <strong>Total:</strong>
          <strong>CA$104.99</strong>
        </div>
        {/* <div className="complete"></div> */}
        <span className="terms">
          By completing your purchase you agree to these
          <a href="/">Terms of Service</a>
        </span>
        <Button>Complete Payment</Button>
      </Container>
    </>
  );
};

export default Summary;
