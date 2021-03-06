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
    return props.isActive ? '#e06b50' : '#583874';
  }};

  padding: 1vw 2.3vw;
  color: ${props => (props.isLogOut ? '#583874' : '#fafafa')};

  border: 2px solid ${props => (props.isActive ? '#e06b50' : '#583874')};

  width: 15rem;
  height: 3rem;
  margin: 0.6rem 0;
  transition: 0.4s all ease-out;
  justify-content: space-between;
  &:hover {
    background: ${props =>
      props.isActive ? shade(0.25, '#e06b50') : shade(0.25, '#583874')};

    border: 2px solid
      ${props =>
        props.isActive ? shade(0.25, '#e06b50') : shade(0.25, '#583874')};

    color: #fafafa;
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
