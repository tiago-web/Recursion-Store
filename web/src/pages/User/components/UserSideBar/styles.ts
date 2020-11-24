import styled from 'styled-components';
import { Button } from '@material-ui/core';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import {
  makeStyles,
  fade,
  Theme,
  createStyles,
} from '@material-ui/core/styles';

interface MenuButtonProps {
  isActive?: boolean;
  isLogOut?: boolean;
}

export const MenuButton = styled(Button)<MenuButtonProps>`
  background: ${props => {
    if (props.isLogOut) return 'var(--menu-logout-btn-bg)';
    return props.isActive
      ? 'var(--menu-active-btn-bg)'
      : 'var(--menu-inactive-btn-bg)';
  }};
  border: 3px solid
    ${props => {
      if (props.isLogOut) return 'var(--menu-logout-border-btn-bg)';
      return props.isActive
        ? 'var(--menu-active-border-btn-bg)'
        : 'var(--menu-inactive-border-btn-bg)';
    }};
  padding: 1vw 2.6vw;
  color: var(--title-color);
  font-weight: 700;
  width: 15rem;
  height: 3rem;
  margin: 0.6rem 0;
  transition: 0.5s all ease-out;
  justify-content: space-between;
  &:hover {
    background: ${props => {
      if (props.isLogOut) return 'var(--menu-logout-border-btn-bg)';
      return props.isActive
        ? 'var(--menu-active-border-btn-bg)'
        : 'var(--menu-inactive-border-btn-bg)';
    }};
  }
`;

export const LogOutIcon = styled(PowerSettingsNewIcon)`
  color: var(--menu-logout-btn-bg);
  background: var(--menu-logout-border-btn-bg);
  border-radius: 12px;
  &:hover {
    background: var(--menu-logout-btn-bg);
    color: var(--menu-logout-border-btn-bg);
  }
`;

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuContainer: {
      alignContent: 'center',
      maxWidth: '20rem',
      textAlign: 'center',
    },
  }),
);
