import { Grid, Divider } from '@material-ui/core';
import React from 'react';
import Navbar from '../../../components/Navbar';
import UpdateProfile from '../../../components/UpdateProfile';
import UserSideBar from '../../../components/UserSideBar';

const MyAccount: React.FC = () => {
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
          item
          container
          direction="row"
          justify="center"
          alignItems="stretch"
          style={{
            minHeight: '6rem',
          }}
        >
          &nbsp;
        </Grid>
        <Grid container>
          <Grid
            item
            container
            direction="row"
            justify="center"
            alignItems="stretch"
            xs={12}
            sm={12}
            md={3}
            style={{
              minWidth: '30%',
              padding: '3vw 3vw',
            }}
          >
            <UserSideBar myProfileActive />
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid
            item
            container
            direction="row"
            justify="center"
            alignItems="stretch"
            xs={12}
            sm={12}
            md={8}
          >
            <UpdateProfile />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default MyAccount;
