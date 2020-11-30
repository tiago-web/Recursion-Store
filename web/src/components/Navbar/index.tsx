import React, { useCallback, useEffect, useState } from 'react';
import { Toolbar, Tooltip, Grid, InputBase } from '@material-ui/core';
import {
  MaterialAppBar,
  ContainerTitle,
  useStyles,
  MaterialTypography,
  MaterialShoppingCartIcon,
  MaterialPersonIcon,
  MaterialSearchIcon,
  ReactLink as Link,
} from './styles';
import { useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const classes = useStyles();
  const [navbarActive, setNavbarActive] = useState(false);
  const [isHome, setIsHome] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      setIsHome(true);
    } else {
      setIsHome(false);
    }
  }, [location]);

  useEffect(() => {
    const handleNavBarActive = () => {
      if (window.scrollY >= 150) {
        setNavbarActive(true);
      } else {
        setNavbarActive(false);
      }
    };

    window.addEventListener('scroll', handleNavBarActive);

    return () => {
      window.removeEventListener('scroll', handleNavBarActive);
    };
  }, []);

  const handleNavbarClasses = useCallback(() => {
    if (isHome) {
      return navbarActive ? 'isHome active' : 'isHome';
    }
    return navbarActive ? 'active' : '';
  }, [isHome, navbarActive]);

  return (
    <MaterialAppBar className={handleNavbarClasses()}>
      <Toolbar>
        <Grid container xs={7} className={classes.NavbarGridLeft}>
          <ContainerTitle>
            <Link to="/">
              <MaterialTypography variant="h4">
                Recursion Store
              </MaterialTypography>
              <MaterialTypography variant="h6">
                You have never seen a store like this!
              </MaterialTypography>
            </Link>
          </ContainerTitle>
        </Grid>
        <Grid container xs={12} className={classes.NavbarGridCenter}>
          <Link to="/products/women">Women</Link>
          <Link to="/products/men">Men</Link>
          <Link to="/products/kids">Kids</Link>
        </Grid>
        <Grid container xs={6} className={classes.NavbarGridRight}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <MaterialSearchIcon />
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
              <MaterialShoppingCartIcon />
            </Link>
          </Tooltip>
          <Tooltip title="User" aria-label="user">
            <Link to="/user/myaccount">
              <MaterialPersonIcon />
            </Link>
          </Tooltip>
        </Grid>
      </Toolbar>
    </MaterialAppBar>
  );
};

export default Navbar;
