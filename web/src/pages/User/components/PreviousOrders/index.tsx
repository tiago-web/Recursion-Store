import React from 'react';
import PreviousOrderCard, { TPreviousOrder } from './PreviousOrderCard';
import { Grid } from '@material-ui/core';
import api from '../../../../services/api';
import { useStyles } from './styles';
import previousOrders from '../../../../MockData/previousOrders';

const PreviousOrders: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid container direction="column">
      <Grid item className={classes.root}>
        <h2>Orders History</h2>
      </Grid>
      <Grid>
        {previousOrders.map(order => (
          <PreviousOrderCard key={order._id} order={order} />
        ))}
      </Grid>
    </Grid>
  );
};

export default PreviousOrders;
