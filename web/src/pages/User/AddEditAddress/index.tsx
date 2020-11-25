import React from 'react';
import { useLocation } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import UserLayout from '../components/UserLayout';
// import { useStyles, PurpleSolidButton } from './styles';
import api from '../../../services/api';

const PreviousOrders: React.FC = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  // if (location.split('-')[1].toLowerCase() === "add");
  // const classes = useStyles();
  return (
    <UserLayout addressesActive>
      <Grid container direction="row">
        <Grid item>
          <h2>Add / Edit Address</h2>
        </Grid>
        <Grid container item alignItems="center">
          <Grid xs={12}>&nbsp;</Grid>
          <Grid xs={12} sm={6}>
            &nbsp;
          </Grid>
        </Grid>
      </Grid>
    </UserLayout>
  );
};

export default PreviousOrders;
