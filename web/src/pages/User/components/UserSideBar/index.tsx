import React, { useCallback } from 'react';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import HouseIcon from '@material-ui/icons/House';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../../../contexts/AuthContext';
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
  const { signOut } = useAuth();
  const history = useHistory();

  const handleLogOut = useCallback(e => {
    signOut();
    history.push('/');
  }, []);

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
      <MenuButton onClick={handleLogOut} isLogOut>
        LogOut
        <PowerSettingsNewIcon />
      </MenuButton>
    </div>
  );
};

export default UserSideBar;
