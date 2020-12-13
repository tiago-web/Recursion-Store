import React, { useEffect, useState } from 'react';

import Button from '../../../../components/Button';
import formatToDollars from '../../../../utils/formatToDollars';
// import { Product } from '../../../../contexts/CartContext';
import { Container } from './styles';

interface SummaryProps {
  disable: boolean;
  shippingPrice: number;
}

const Summary: React.FC<SummaryProps> = ({ disable, shippingPrice }) => {
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const cartTotal = localStorage.getItem('@Recursion:cart-total');

    setSubtotal(Number(cartTotal));
  }, []);

  useEffect(() => {
    const estTax = subtotal * 0.13;
    const totalPrice = subtotal + tax + shippingPrice;

    setTax(estTax);
    setTotal(totalPrice);
  }, [subtotal, tax, shippingPrice]);

  return (
    <>
      <Container>
        <h1>Summary</h1>
        <div className="subtotal">
          <span>Subtotal:</span>
          <span>{formatToDollars(subtotal)}</span>
        </div>
        <div className="ship">
          <span>Shipping:</span>
          <span>{formatToDollars(shippingPrice)}</span>
        </div>
        <div className="tax">
          <span>Extimated Tax:</span>
          <span>{formatToDollars(tax)}</span>
        </div>
        <div className="total">
          <strong>Total:</strong>
          <strong>{formatToDollars(total)}</strong>
        </div>
        {/* <div className="complete"></div> */}
        <span className="terms">
          By completing your purchase you agree to these
          <a href="/">Terms of Service</a>
        </span>
        <Button disabled={!disable}>Complete Payment</Button>
      </Container>
    </>
  );
};

export default Summary;
