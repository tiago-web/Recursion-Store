import { Grid, Divider } from '@material-ui/core';
import React from 'react';
import Navbar from '../Navbar';
import UserSideBar from '../UserSideBar';

type UserLayoutProps = {
  children: React.ReactNode;
  myProfileActive?: boolean;
  ordersHistoryActive?: boolean;
  addressesActive?: boolean;
};

const UserLayout: React.FC<UserLayoutProps> = ({
  children,
  myProfileActive,
  ordersHistoryActive,
  addressesActive,
}) => {
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
            <UserSideBar
              myProfileActive={myProfileActive ? true : undefined}
              ordersHistoryActive={ordersHistoryActive ? true : undefined}
              addressesActive={addressesActive ? true : undefined}
            />
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
            {children}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default UserLayout;
