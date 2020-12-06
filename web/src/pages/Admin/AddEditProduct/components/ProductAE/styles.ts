import styled from 'styled-components';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    error: {
      color: 'red',
    },
    textField: {
      minWidth: '18rem',
      margin: theme.spacing(1, 0),
    },
    multiSelect: {
      maxWidth: '18rem',
      width: '18rem',
      backgroundColor: '#fff',
    },
  }),
);
