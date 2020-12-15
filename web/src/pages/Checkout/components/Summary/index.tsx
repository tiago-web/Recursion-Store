import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '../../../../components/Button';
import { ShippingAddressProps, BillingAddressProps } from '../..';
import api from '../../../../services/api';
import formatToDollars from '../../../../utils/formatToDollars';
import { Container } from './styles';
import { useCart } from '../../../../contexts/CartContext';

interface SummaryProps {
  isFilled: boolean;
  shippingPrice: number;
  shippingAddress: ShippingAddressProps | undefined;
  billingAddress: BillingAddressProps | undefined;
}

const Summary: React.FC<SummaryProps> = ({
  isFilled,
  shippingPrice,
  shippingAddress,
  billingAddress,
}) => {
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);
  const { products } = useCart();

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

  const handleCreateOrder = useCallback(async () => {
    try {
      await api.post('orders', {
        products,
        shippingPrice,
        shippingAddress,
        billingAddress,
      });
    } catch (err) {
      console.log(err);
    }
  }, [products, shippingPrice, shippingAddress, billingAddress]);

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
        <span className="terms">
          By completing your purchase you agree to these
          <Link to="/terms-of-service">Terms of Service</Link>
        </span>
        <Button disabled={!isFilled} onClick={handleCreateOrder}>
          Complete Payment
        </Button>
        {!isFilled ? (
          <span style={{ color: '#f00', margin: '8px 0 0' }}>
            Fill the address.
          </span>
        ) : null}
      </Container>
    </>
  );
};

export default Summary;
