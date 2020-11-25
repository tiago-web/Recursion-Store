import React from 'react';
import { Grid } from '@material-ui/core';
import { useStyles } from './styles';
import UserLayout from '../components/UserLayout';
import Address from './Address';
import userAddresses from '../../../MockData/userAddresses';
import api from '../../../services/api';

const PreviousOrders: React.FC = () => {
  const classes = useStyles();
  return (
    <UserLayout addressesActive>
      <Grid container direction="column">
        <Grid item className={classes.root}>
          <h2>Addresses</h2>
        </Grid>
        <Grid container item className={classes.root}>
          {userAddresses.map(address => (
            <Address key={address.postalCode} address={address} />
          ))}
        </Grid>
      </Grid>
    </UserLayout>
  );
};

export default PreviousOrders;
