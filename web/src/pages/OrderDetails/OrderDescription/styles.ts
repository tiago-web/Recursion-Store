import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    alignLeft: {
      textAlign: 'left',
    },
    alignRight: {
      textAlign: 'right',
    },
    title: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: '1.2rem',
    },
  }),
);

export const RowMUGrid = styled(Grid)`
  padding: 1rem;
`;
