import { Grid, Divider } from '@material-ui/core';
import React from 'react';
import UserSideBar from '../UserSideBar';
import { useStyles } from './styles';

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
  const classes = useStyles();

  return (
    <>
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
          <Divider
            orientation="vertical"
            flexItem
            classes={{ root: classes.divider }}
          />
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
