import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import PreviousOrderCard, { TPreviousOrder } from './PreviousOrderCard';
import api from '../../../../services/api';
import apiErrorHandler from '../../../../services/apiErrorHandler';
import { useStyles } from './styles';

const PreviousOrders: React.FC = () => {
  const classes = useStyles();
  const [ordersFound, setOrdersFound] = useState(false);
  const [orders, setOrders] = useState<TPreviousOrder[]>([]);

  useEffect(() => {
    setOrdersFound(orders.length > 0);
  }, [orders]);

  useEffect(() => {
    api
      .get('/orders/user')
      .then(response => setOrders(response.data))
      .catch(apiErrorHandler);
  }, []);

  return (
    <Grid container direction="column">
      <Grid item className={classes.root}>
        <h2>Orders History</h2>
      </Grid>

      {ordersFound ? (
        <Grid>
          {orders.map(order => (
            <PreviousOrderCard key={order._id} order={order} />
          ))}
        </Grid>
      ) : (
        <Grid item justify="center" alignItems="center">
          No orders were found
        </Grid>
      )}
    </Grid>
  );
};

export default PreviousOrders;
