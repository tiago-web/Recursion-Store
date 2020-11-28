import React from 'react';
import { Grid } from '@material-ui/core';
import formatToDollars from '../../../utils/formatToDollars';
import formatDateToOrderDate from '../../../utils/formatDateToOrderDate';
import { TAddress } from '../../User/components/PreviousOrders/PreviousOrderCard';
import { useStyles, RowMUGrid } from './styles';

type OrderDescriptionProps = {
  orderId: string;
  date: string;
  status: string;
  shippingAddress: TAddress;
  billingAddress: TAddress;
  subTotal: number;
  shippingPrice: number;
  total: number;
};

const OrderDescription: React.FC<OrderDescriptionProps> = ({
  orderId,
  date,
  status,
  shippingAddress,
  billingAddress,
  subTotal,
  shippingPrice,
  total,
}) => {
  const classes = useStyles();
  return (
    <Grid
      container
      style={{
        padding: '1rem',
      }}
    >
      <RowMUGrid item xs={12} className={classes.title}>
        Order # {orderId}
      </RowMUGrid>
      <RowMUGrid item xs={6} className={classes.alignLeft}>
        Status
      </RowMUGrid>
      <RowMUGrid item xs={6} className={classes.alignRight}>
        {status}
      </RowMUGrid>
      <RowMUGrid item xs={6} className={classes.alignLeft}>
        Order Placed
      </RowMUGrid>
      <RowMUGrid item xs={6} className={classes.alignRight}>
        {formatDateToOrderDate(date)}
      </RowMUGrid>
      <RowMUGrid item xs={6} className={classes.alignLeft}>
        Subtotal
      </RowMUGrid>
      <RowMUGrid item xs={6} className={classes.alignRight}>
        {formatToDollars(subTotal)}
      </RowMUGrid>
      <RowMUGrid item xs={6} className={classes.alignLeft}>
        Shipping Price
      </RowMUGrid>
      <RowMUGrid item xs={6} className={classes.alignRight}>
        {formatToDollars(shippingPrice)}
      </RowMUGrid>
      <RowMUGrid item xs={6} className={classes.alignLeft}>
        Total
      </RowMUGrid>
      <RowMUGrid item xs={6} className={classes.alignRight}>
        {formatToDollars(total)}
      </RowMUGrid>
      <RowMUGrid item xs={6} className={classes.alignLeft}>
        Shipping Address
      </RowMUGrid>
      <RowMUGrid item xs={6} className={classes.alignRight}>
        {shippingAddress.address}
        <br />
        {shippingAddress.postalCode}
        <br />
        {shippingAddress.city}, {shippingAddress.state},{' '}
        {shippingAddress.country}
      </RowMUGrid>
      <RowMUGrid item xs={6} className={classes.alignLeft}>
        Billing Address
      </RowMUGrid>
      <RowMUGrid item xs={6} className={classes.alignRight}>
        {billingAddress.address}
        <br />
        {billingAddress.postalCode}
        <br />
        {billingAddress.city}, {billingAddress.state}, {billingAddress.country}
      </RowMUGrid>
    </Grid>
  );
};

export default OrderDescription;
