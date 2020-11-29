import styled from 'styled-components';
import { Button } from '@material-ui/core';
import {
  makeStyles,
  fade,
  Theme,
  createStyles,
} from '@material-ui/core/styles';

import { shade } from 'polished';

interface MenuButtonProps {
  isActive?: boolean;
  isLogOut?: boolean;
}

export const MenuButton = styled(Button)<MenuButtonProps>`
  background: ${props => {
    if (props.isLogOut) return 'transparent';
    return props.isActive ? '#e06b50' : 'rgba(88, 56, 116, 1)';
  }};

  padding: 1vw 2.6vw;
  color: ${props =>
    props.isLogOut ? 'rgba(88, 56, 116, 1)' : 'var(--menu-text-color)'};

  border: 2px solid
    ${props => (props.isActive ? '#e06b50' : 'rgba(88, 56, 116, 1)')};

  width: 15rem;
  height: 3rem;
  margin: 0.6rem 0;
  transition: 0.4s all ease-out;
  justify-content: space-between;
  &:hover {
    background: ${props =>
      props.isActive
        ? shade(0.25, '#e06b50')
        : shade(0.25, 'rgba(88, 56, 116, 1)')};

    border: 2px solid
      ${props =>
        props.isActive
          ? shade(0.25, '#e06b50')
          : shade(0.25, 'rgba(88, 56, 116, 1)')};

    color: var(--menu-text-color);
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
