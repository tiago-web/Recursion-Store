import React from 'react';
import { Grid, Paper, Divider } from '@material-ui/core';
import previousOrders from '../../MockData/previousOrders';
import Navbar from '../../components/Navbar';
import ProductPrevOrder from '../User/components/PreviousOrders/PreviousOrderCard/ProductPrevOrder';
import OrderDescription from './OrderDescription';
// import { useStyles } from './styles';

const OrderDetails: React.FC = () => {
  const order = previousOrders[0];
  return (
    <>
      <Navbar />
      <Grid
        container
        direction="column"
        justify="space-evenly"
        alignItems="stretch"
      >
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
          style={{
            minHeight: '5rem',
          }}
        >
          <h2
            style={{
              margin: '1.5rem 0 0 2rem',
            }}
          >
            Order Details
          </h2>

          <Grid container>
            <Grid
              xs={6}
              style={{
                padding: '2vw 2vw',
              }}
            >
              <Paper>
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
            <Divider orientation="vertical" flexItem />
            <Grid
              xs={6}
              style={{
                padding: '2vw 2vw',
              }}
            >
              <OrderDescription />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default OrderDetails;
