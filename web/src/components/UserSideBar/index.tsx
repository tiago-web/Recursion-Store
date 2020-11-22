import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import HouseIcon from '@material-ui/icons/House';

import { MenuButton, LogOutIcon, useStyles } from './styles';

const UserSideBar: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.menuContainer}>
      <MenuButton isActive>
        My Profile
        <PersonIcon />
      </MenuButton>
      <MenuButton>
        Orders History
        <ShoppingBasketIcon />
      </MenuButton>
      <MenuButton>
        Addresses
        <HouseIcon />
      </MenuButton>
      <MenuButton isLogOut>
        LogOut
        <LogOutIcon />
      </MenuButton>
    </div>
  );
};

export default UserSideBar;
