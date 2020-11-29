import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import UserLayout from '../components/UserLayout';
import Address, { TUserAddress } from './Address';
import { useStyles, PurpleSolidButton } from './styles';
import api from '../../../services/api';
import apiErrorHandler from '../../../services/apiErrorHandler';

const PreviousOrders: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const [addressesFound, setAddressesFound] = useState(false);
  const [addresses, setAddresses] = useState<TUserAddress[]>([]);

  useEffect(() => {
    setAddressesFound(addresses.length > 0);
  }, [addresses]);

  useEffect(() => {
    const token = localStorage.getItem('@Recursion:token');
    if (!token) history.push('/');
    api
      .get('/profile/shippingAddresses', {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
      .then(response => setAddresses(response.data))
      .catch(apiErrorHandler);
  }, []);

  return (
    <UserLayout addressesActive>
      <Grid container direction="row" className={classes.root}>
        <Grid item className={classes.container}>
          <h2>Addresses</h2>
        </Grid>
        {addressesFound ? (
          <Grid container item>
            {addresses.map(address => (
              <Address key={address.postalCode} address={address} />
            ))}
          </Grid>
        ) : (
          <Grid container item>
            No addresses were found
          </Grid>
        )}
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
