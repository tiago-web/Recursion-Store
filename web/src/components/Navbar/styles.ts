import styled from 'styled-components';
import { AppBar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';
import {
  makeStyles,
  fade,
  Theme,
  createStyles,
} from '@material-ui/core/styles';

export const MaterialAppBar = styled(AppBar)`
  position: unset;
  flex: 20em 40em 20em;
  background: var(--navbar-bg);
  border-bottom: 3px solid var(--navbar-border);
  height: 130px;
  justify-content: center;
`;

export const ContainerTitle = styled.div`
  align-self: center;
  padding: 0.4rem 0;
  h4 {
    margin: 0;
    padding: 0;
  }
  h6 {
    margin: 0;
    font-size: 1rem;
    padding: 0;
  }
`;

export const ReactLink = styled(Link)`
  text-decoration: none;
  color: var(--navbar-text);
`;

export const MaterialTypography = styled(Typography)`
  color: var(--navbar-text);
  font-weight: 600;
`;

export const MaterialShoppingCartIcon = styled(ShoppingCartIcon)`
  color: var(--navbar-text);
`;

export const MaterialPersonIcon = styled(PersonIcon)`
  color: var(--navbar-text);
`;

export const MaterialSearchIcon = styled(SearchIcon)`
  color: var(--navbar-text);
`;

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    NavbarGridLeft: {
      alignItems: 'flex-start',
    },
    NavbarGridCenter: {
      placeContent: 'space-evenly',
      fontWeight: 500,
      fontSize: '1.1rem',
      alignItems: 'center',
    },
    NavbarGridRight: {
      placeContent: 'space-evenly',
      alignItems: 'center',
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('xs')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '8ch',
        '&:focus': {
          width: '16ch',
        },
      },
    },
  }),
);
