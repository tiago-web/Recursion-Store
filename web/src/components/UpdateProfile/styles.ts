import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { shade } from 'polished';
import styled from 'styled-components';
import Button from '../Button';

export const PurpleButton = styled(Button)`
  background-color: #6060ab;
  color: white;
  &:hover {
    background: ${shade(0.2, '#5454A0')};
  }
`;

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);
