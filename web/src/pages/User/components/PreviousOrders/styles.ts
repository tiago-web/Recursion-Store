import styled from 'styled-components';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const NoOrdersFoundMessage = styled.p`
  margin: -250px 0 0 18px;

  font-weight: bold;
  font-size: 1.1rem;
`;

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing(0, 2, 2),
    },
    container: {
      padding: theme.spacing(0, 3, 4),

      '& h2': {
        color: '#e06b50',
        marginLeft: '3px',
      },
    },
  }),
);
