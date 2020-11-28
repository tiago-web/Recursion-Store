import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      backgroundColor: 'transparent',
      boxShadow: 'none',
      color: theme.palette.text.secondary,
    },
    alignLeft: {
      textAlign: 'left',
    },
    alignRight: {
      textAlign: 'right',
    },
    title: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: '1.3rem',
    },
  }),
);

export const RowMUGrid = styled(Grid)`
  padding: 1rem;
`;
