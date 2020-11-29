import React from 'react';
import { Grid, Paper, Divider } from '@material-ui/core';
import previousOrders from '../../MockData/previousOrders';
import ProductPrevOrder from '../User/components/PreviousOrders/PreviousOrderCard/ProductPrevOrder';
import OrderDescription from './OrderDescription';
import { useStyles } from './styles';

const OrderDetails: React.FC = () => {
  const order = previousOrders[0];
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Grid container justify="space-between">
          <Grid item xs={12} justify="flex-start">
            <Paper className={classes.paperTitle}>Order Details</Paper>
          </Grid>
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
                product.items.map(item => (
                  <ProductPrevOrder
                    key={product._id}
                    productId={product.productId._id}
                    productName={product.productId.name}
                    productPrice={product.productPrice}
                    imageUrl={
                      product.productId.items[0].productImages[0].imageUrl
                    }
                    item={item}
                  />
                )),
              )}
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>

    // <div className={classes.root}>
    //   <Navbar />
    //   <Grid container spacing={3}>
    //     <Grid item xs={12}>
    //       <h2
    //         style={{
    //           margin: '1.5rem 2rem 0 2rem',
    //         }}
    //       >
    //         Order Details
    //       </h2>
    //     </Grid>
    //     <Grid item xs={6}>
    //       <Paper>
    //         {/* {order.products.map(product =>
    //           product.items.map(item => (
    //             <ProductPrevOrder
    //               key={product._id}
    //               productId={product.productId._id}
    //               productName={product.productId.name}
    //               productPrice={product.productPrice}
    //               imageUrl={
    //                 product.productId.items[0].productImages[0].imageUrl
    //               }
    //               item={item}
    //             />
    //           )),
    //         )} */}
    //         Something
    //       </Paper>
    //     </Grid>
    //     {/* <Divider orientation="vertical" flexItem /> */}
    //     <Grid item xs={6} container>
    //       <OrderDescription />
    //     </Grid>
    //   </Grid>
    // </div>
  );
};

export default OrderDetails;
