import React from 'react';
import { Grid } from '@material-ui/core';

import { useStyles, RowMUGrid } from './styles';

const OrderDescription: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      style={{
        padding: '1rem',
      }}
    >
      <RowMUGrid item xs={12} className={classes.title}>
        Order #12312312
      </RowMUGrid>
      <RowMUGrid item xs={12} sm={6} className={classes.alignLeft}>
        Status
      </RowMUGrid>
      <RowMUGrid item xs={12} sm={6} className={classes.alignRight}>
        Delivered
      </RowMUGrid>
      <RowMUGrid item xs={12} sm={6} className={classes.alignLeft}>
        Order Placed
      </RowMUGrid>
      <RowMUGrid item xs={12} sm={6} className={classes.alignRight}>
        August 10, 2020
      </RowMUGrid>
      <RowMUGrid item xs={12} sm={6} className={classes.alignLeft}>
        Subtotal
      </RowMUGrid>
      <RowMUGrid item xs={12} sm={6} className={classes.alignRight}>
        CA$299.98
      </RowMUGrid>
      <RowMUGrid item xs={12} sm={6} className={classes.alignLeft}>
        Shipping Price
      </RowMUGrid>
      <RowMUGrid item xs={12} sm={6} className={classes.alignRight}>
        CA$2.98
      </RowMUGrid>
      <RowMUGrid item xs={12} sm={6} className={classes.alignLeft}>
        Total
      </RowMUGrid>
      <RowMUGrid item xs={12} sm={6} className={classes.alignRight}>
        CA$321.98
      </RowMUGrid>
      <RowMUGrid item xs={12} sm={6} className={classes.alignLeft}>
        Shipping Address
      </RowMUGrid>
      <RowMUGrid item xs={12} sm={6} className={classes.alignRight}>
        123 Eglinton Rd
        <br />
        1A2 B3C
        <br />
        Toronto, Ontario, Canada
      </RowMUGrid>
      <RowMUGrid item xs={12} sm={6} className={classes.alignLeft}>
        Billing Address
      </RowMUGrid>
      <RowMUGrid item xs={12} sm={6} className={classes.alignRight}>
        123 Eglinton Rd
        <br />
        1A2 B3C
        <br />
        Toronto, Ontario, Canada
      </RowMUGrid>
    </Grid>
  );
};

export default OrderDescription;
