import React, { useState, useCallback } from 'react';
import { Grid, Paper, ClickAwayListener, Typography } from '@material-ui/core';
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
  }, [userDetailTooltipOpen]);

  const handleClickClose = useCallback(() => {
    setuserDetailTooltipOpen(false);
  }, [userDetailTooltipOpen]);

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
              <div>August 10, 2020</div>
            </Grid>
            <Grid item className={classes.item}>
              <div>Total</div>
              <div>CA$299.98</div>
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
                      <Typography color="inherit">Sergio Sanchez</Typography>
                      <Typography color="inherit">123 Ellesmere Rd</Typography>
                      <Typography color="inherit">
                        Ontario, Canada, M2D 3F7
                      </Typography>
                      <Typography color="inherit">321 654 9874</Typography>
                    </>
                  }
                >
                  <div
                    onClick={handleClickOpen}
                    onKeyUp={handleClickOpen}
                    role="button"
                    tabIndex={0}
                  >
                    Username
                  </div>
                </HtmlTooltip>
              </ClickAwayListener>
            </Grid>
            <Grid item className={classes.item}>
              <div>Order # 32123131</div>
              <div>Order Details</div>
            </Grid>
          </Grid>
        </Paper>
        <Paper className={classes.orderDetails}>EMpty</Paper>
      </Paper>
    </div>
  );
};

export default PreviousOrderCard;
