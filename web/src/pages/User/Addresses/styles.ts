import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import styled from 'styled-components';
import { shade } from 'polished';
import Button from '../../../components/Button';

export const PurpleSolidButton = styled(Button)`
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
      padding: theme.spacing(2, 0),
    },
    container: {
      padding: theme.spacing(0, 3, 4),
    },
  }),
);
