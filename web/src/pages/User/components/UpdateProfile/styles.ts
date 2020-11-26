import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { shade } from 'polished';
import styled from 'styled-components';
import Button from '../../../../components/Button';

export const PurpleButton = styled(Button)`
  background-color: #6060ab;
  color: white;
  width: 18.4rem;
  &:hover {
    background: ${shade(0.2, '#5454A0')};
  }
`;

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginBottom: '3rem',
    },
    paper: {
      padding: theme.spacing(0),
      textAlign: 'center',
      backgroundColor: 'transparent',
      boxShadow: 'none',
    },
    title: {
      flexGrow: 1,
      padding: theme.spacing(0, 3, 4),
    },
    textField: {
      width: '18.4rem',
    },
  }),
);