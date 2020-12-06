import React, { useEffect, useState } from 'react';
import { Grid, Paper, Divider } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import ProductPrevOrder from '../User/components/PreviousOrders/PreviousOrderCard/ProductPrevOrder';
import OrderDescription from './OrderDescription';
import api from '../../services/api';
import apiErrorHandler from '../../services/apiErrorHandler';
import { useStyles } from './styles';
import { TPreviousOrder } from '../User/components/PreviousOrders/PreviousOrderCard';

const OrderDetails: React.FC = () => {
  const { orderId }: { orderId: string } = useParams();
  const classes = useStyles();
  const history = useHistory();
  const [order, setOrder] = useState<TPreviousOrder>();

  useEffect(() => {
    api
      .get(`/orders/${orderId}`)
      .then(response => setOrder(response.data))
      .catch(apiErrorHandler);
  }, [order, orderId, history]);

  return (
    <>
      <div className={classes.root}>
        <Grid container justify="space-between">
          <Grid item xs={12}>
            <Paper className={classes.paperTitle}>Order Details</Paper>
          </Grid>
          {order ? (
            <>
              <Grid item xs={12} sm={12} md={5}>
                <Paper className={classes.paper}>
                  <OrderDescription
                    orderId={order._id}
                    date={order.createdAt}
                    status={order.status}
                    shippingAddress={order.shippingAddress}
                    billingAddress={order.billingAddress}
                    subTotal={order.subTotal}
                    shippingPrice={order.shippingPrice}
                    total={order.total}
                  />
                </Paper>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={12} sm={12} md={6}>
                <Paper className={classes.paper}>
                  {order.products.map(product =>
                    product.items.map(item => {
                      const imageUrl = product.productId.items.find(
                        itemImg => itemImg.color === item.color,
                      );
                      return (
                        <ProductPrevOrder
                          key={item._id}
                          productId={product.productId._id}
                          productName={product.productId.name}
                          productPrice={product.productPrice}
                          imageUrl={
                            imageUrl ? imageUrl.productImages[0].imageUrl : ''
                          }
                          item={item}
                        />
                      );
                    }),
                  )}
                </Paper>
              </Grid>
            </>
          ) : (
            <Grid item xs={12} justify="flex-start">
              <Paper className={classes.paper}>Order not found</Paper>
            </Grid>
          )}
        </Grid>
      </div>
    </>
  );
};

export default OrderDetails;
