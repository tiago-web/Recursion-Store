import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import PreviousOrderCard, { TPreviousOrder } from './PreviousOrderCard';
import api from '../../../../services/api';
import { useStyles } from './styles';
import { useHistory } from 'react-router-dom';
// import previousOrders from '../../../../MockData/previousOrders';

const PreviousOrders: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const [ordersFound, setOrdersFound] = useState(false);
  const [orders, setOrders] = useState<TPreviousOrder[]>([]);

  useEffect(() => {
    setOrdersFound(orders.length > 0);
  }, [orders]);

  useEffect(() => {
    const token = localStorage.getItem('@Recursion:token');
    if (!token) history.push('/');
    api
      .get('/orders/user', {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
      .then(response => setOrders(response.data))
      .catch(response => {
        localStorage.removeItem('@Recursion:token');
        history.push('/');
      });
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
