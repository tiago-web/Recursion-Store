import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import HouseIcon from '@material-ui/icons/House';
import { MenuButton, LogOutIcon, useStyles } from './styles';

type UserSideBarProps = {
  myProfileActive?: boolean;
  ordersHistoryActive?: boolean;
  addressesActive?: boolean;
};

const UserSideBar: React.FC<UserSideBarProps> = ({
  myProfileActive,
  ordersHistoryActive,
  addressesActive,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.menuContainer}>
      <MenuButton isActive={myProfileActive ? true : undefined}>
        My Profile
        <PersonIcon />
      </MenuButton>
      <MenuButton isActive={ordersHistoryActive ? true : undefined}>
        Orders History
        <ShoppingBasketIcon />
      </MenuButton>
      <MenuButton isActive={addressesActive ? true : undefined}>
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
