import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';

const Navbar: React.FC = () => {
  return (
    <AppBar style={{ position: 'unset' }}>
      <Toolbar>
        <div>
          <Typography variant="h4">Recursion Store</Typography>
          <Typography variant="h6">
            You have never seen a store like this!
          </Typography>
        </div>
        <Link to="/Products">Products</Link>
        <Button color="inherit">Login</Button>
        <div>
          <SearchIcon />
          <ShoppingCartIcon />
          <PersonIcon />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
