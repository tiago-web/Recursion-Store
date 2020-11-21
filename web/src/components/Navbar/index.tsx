import React from 'react';
import { Toolbar, Tooltip, Grid, InputBase } from '@material-ui/core';
import {
  MaterialAppBar,
  ContainerTitle,
  useStyles,
  MaterialTypography as Typography,
  MaterialShoppingCartIcon as ShoppingCartIcon,
  MaterialPersonIcon as PersonIcon,
  MaterialSearchIcon as SearchIcon,
  ReactLink as Link,
} from './styles';

const Navbar: React.FC = () => {
  const classes = useStyles();
  return (
    <MaterialAppBar>
      <Toolbar>
        <Grid container xs={7} className={classes.NavbarGridLeft}>
          <ContainerTitle>
            <Typography variant="h4">
              <Link to="/">Recursion Store</Link>
            </Typography>
            <Typography variant="h6">
              You have never seen a store like this!
            </Typography>
          </ContainerTitle>
        </Grid>
        <Grid container xs={12} className={classes.NavbarGridCenter}>
          <Link to="/products">Women</Link>
          <Link to="/products">Men</Link>
          <Link to="/products">Kids</Link>
        </Grid>
        <Grid container xs={6} className={classes.NavbarGridRight}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <Tooltip title="Cart" aria-label="cart">
            <Link to="/Cart">
              <ShoppingCartIcon />
            </Link>
          </Tooltip>
          <Tooltip title="User" aria-label="user">
            <Link to="/user/myaccount">
              <PersonIcon />
            </Link>
          </Tooltip>
        </Grid>
      </Toolbar>
    </MaterialAppBar>
  );
};

export default Navbar;
