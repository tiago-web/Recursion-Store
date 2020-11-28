import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paperTitle: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: '1.8rem',
      backgroundColor: 'transparent',
      boxShadow: 'none',
      padding: theme.spacing(2, 4, 0),
      color: theme.palette.text.secondary,
      textAlignLast: 'start',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      backgroundColor: 'transparent',
      boxShadow: 'none',

      color: theme.palette.text.secondary,
    },
  }),
);

export const RowMUGrid = styled(Grid)`
  padding: 1rem;
`;
