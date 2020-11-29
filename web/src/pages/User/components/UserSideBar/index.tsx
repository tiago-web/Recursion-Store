import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import HouseIcon from '@material-ui/icons/House';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

import { Link } from 'react-router-dom';
import { MenuButton, useStyles } from './styles';

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
      <Link to="/user/myaccount">
        <MenuButton isActive={myProfileActive ? true : undefined}>
          My Profile
          <PersonIcon />
        </MenuButton>
      </Link>
      <Link to="/user/ordershistory">
        <MenuButton isActive={ordersHistoryActive ? true : undefined}>
          Orders History
          <ShoppingBasketIcon />
        </MenuButton>
      </Link>
      <Link to="/user/addresses">
        <MenuButton isActive={addressesActive ? true : undefined}>
          Addresses
          <HouseIcon />
        </MenuButton>
      </Link>
      <MenuButton isLogOut>
        LogOut
        <PowerSettingsNewIcon />
      </MenuButton>
    </div>
  );
};

export default UserSideBar;
