import styled from 'styled-components';
import { shade } from 'polished';
import { TextField, Grid } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: theme.spacing(2, 4),
    },
    textFieldGrid: {
      padding: '1rem 1rem',
    },
  }),
);

export const MUGrid = styled(Grid)`
  margin: 1rem 0.5rem;
`;
