import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Paper, ClickAwayListener, Typography } from '@material-ui/core';
import ProductPrevOrder from './ProductPrevOrder';
import { useStyles, HtmlTooltip } from './styles';
import { TProduct } from './ProductPrevOrder';
import formatToDollars from '../../../../../utils/formatToDollars';
import formatDateToOrderDate from '../../../../../utils/formatDateToOrderDate';

type TAddress = {
  address: string;
  country: string;
  state: string;
  city: string;
  postalCode: string;
};

type TUser = {
  _id: string;
  firstName: string;
  lastName: string;
  phone: string;
};

export type TPreviousOrder = {
  _id: string;
  userId: TUser;
  total: number;
  subTotal: number;
  shippingPrice: number;
  status: string;
  delivered: boolean;
  shippingAddress: TAddress;
  billingAddress: TAddress;
  products: TProduct[];
  createdAt: string;
  updatedAt: string;
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
              <div>{formatDateToOrderDate(order.createdAt)}</div>
            </Grid>
            <Grid item className={classes.item}>
              <div>Total</div>
              <div>{formatToDollars(order.total)}</div>
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
                      <Typography variant="caption" display="block">
                        {order.userId.firstName} {order.userId.lastName}
                      </Typography>
                      <Typography variant="caption" display="block">
                        {order.shippingAddress.address}
                      </Typography>
                      <Typography variant="caption" display="block">
                        {order.shippingAddress.state},{' '}
                        {order.shippingAddress.country},{' '}
                        {order.shippingAddress.postalCode}
                      </Typography>
                      <Typography variant="caption" display="block">
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
                    className={classes.linkColor}
                  >
                    {order.userId.firstName} {order.userId.lastName}
                  </div>
                </HtmlTooltip>
              </ClickAwayListener>
            </Grid>
            <Grid item className={classes.item}>
              <div>Order # {order._id}</div>
              <Link to="/" className={classes.linkColor}>
                Order Details
              </Link>
            </Grid>
          </Grid>
        </Paper>
        <Paper className={classes.orderDetails}>
          {order.products.map(product =>
            product.items.map(item => (
              <ProductPrevOrder
                key={product._id}
                productId={product.productId._id}
                productName={product.productId.name}
                productPrice={product.productPrice}
                imageUrl={product.productId.items[0].productImages[0].imageUrl}
                item={item}
              />
            )),
          )}
        </Paper>
      </Paper>
    </div>
  );
};

export default PreviousOrderCard;
