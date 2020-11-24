import React, { useState, useCallback } from 'react';
import { Grid, Paper, ClickAwayListener, Typography } from '@material-ui/core';
import ProductPrevOrder from './ProductPrevOrder';
import { useStyles, HtmlTooltip } from './styles';

type TItem = {
  color: string;
  sizeTag: string;
  quantity: number;
};

type IProduct = {
  productId: string;
  productPrice: number;
  items: TItem[];
};

export type TPreviousOrder = {
  _id: number;
  userId: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  total: number;
  subTotal: number;
  shippingPrice: number;
  status: string;
  delivered: boolean;
  shippingAddress: {
    address: string;
    country: string;
    state: string;
    city: string;
    postalCode: string;
  };
  billingAddress: {
    address: string;
    country: string;
    state: string;
    city: string;
    postalCode: string;
  };
  products: IProduct[];
  createdAt: string;
};

type previousOrderCardProps = {
  order: TPreviousOrder;
};

const PreviousOrderCard: React.FC<previousOrderCardProps> = ({ order }) => {
  const [userDetailTooltipOpen, setuserDetailTooltipOpen] = useState(false);

  const handleClickOpen = useCallback(() => {
    setuserDetailTooltipOpen(true);
  }, []);

  const handleClickClose = useCallback(() => {
    setuserDetailTooltipOpen(false);
  }, []);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper>
        <Paper className={classes.orderHeader}>
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="stretch"
          >
            <Grid item className={classes.item}>
              <div>Order Placed</div>
              <div>{order.createdAt}</div>
            </Grid>
            <Grid item className={classes.item}>
              <div>Total</div>
              <div>CA${order.total}</div>
            </Grid>
            <Grid item className={classes.item}>
              <div>Shipped to</div>
              <ClickAwayListener onClickAway={handleClickClose}>
                <HtmlTooltip
                  PopperProps={{
                    disablePortal: true,
                  }}
                  onClose={handleClickClose}
                  open={userDetailTooltipOpen}
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  arrow
                  title={
                    <>
                      <Typography color="inherit">
                        {order.userId.firstName} {order.userId.lastName}
                      </Typography>
                      <Typography color="inherit">
                        {order.shippingAddress.address}
                      </Typography>
                      <Typography color="inherit">
                        {order.shippingAddress.state},{' '}
                        {order.shippingAddress.country},{' '}
                        {order.shippingAddress.postalCode}
                      </Typography>
                      <Typography color="inherit">
                        {order.userId.phone}
                      </Typography>
                    </>
                  }
                >
                  <div
                    onClick={handleClickOpen}
                    onKeyUp={handleClickOpen}
                    role="button"
                    tabIndex={0}
                  >
                    {order.userId.firstName} {order.userId.lastName}
                  </div>
                </HtmlTooltip>
              </ClickAwayListener>
            </Grid>
            <Grid item className={classes.item}>
              <div>Order # {order._id}</div>
              <div>Order Details</div>
            </Grid>
          </Grid>
        </Paper>
        <Paper className={classes.orderDetails}>
          <ProductPrevOrder />
        </Paper>
      </Paper>
    </div>
  );
};

export default PreviousOrderCard;
