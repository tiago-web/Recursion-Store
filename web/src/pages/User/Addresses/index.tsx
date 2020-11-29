import React from 'react';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import UserLayout from '../components/UserLayout';
import Address from './Address';
import userAddresses from '../../../MockData/userAddresses';
import { useStyles, PurpleSolidButton } from './styles';
import api from '../../../services/api';

const PreviousOrders: React.FC = () => {
  const classes = useStyles();
  return (
    <UserLayout addressesActive>
      <Grid container direction="row" className={classes.root}>
        <Grid item className={classes.container}>
          <h2>Addresses</h2>
        </Grid>
        <Grid container item>
          {userAddresses.map(address => (
            <Address key={address.postalCode} address={address} />
          ))}
        </Grid>
        <Grid item>&nbsp;</Grid>
        <Grid container item className={classes.container} alignItems="center">
          <Grid xs={12} sm={6}>
            &nbsp;
          </Grid>
          <Grid container xs={12} sm={6} justify="center">
            <Link to="/user/add-address">
              <PurpleSolidButton>Add New Address</PurpleSolidButton>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </UserLayout>
  );
};

export default PreviousOrders;
