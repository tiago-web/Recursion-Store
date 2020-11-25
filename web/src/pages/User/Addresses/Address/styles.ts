import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import styled from 'styled-components';
import { shade } from 'polished';
import Button from '../../../../components/Button';

export const PurpleSolidButton = styled(Button)`
  background-color: #6060ab;
  color: white;
  width: 18.4rem;
  &:hover {
    background: ${shade(0.2, '#5454A0')};
  }
`;

// export const RedOutlinedButton = styled(Button)`
//   background-color: transparent;
//   border: 2px solid var(--menu-logout-border-btn-bg);
//   color: var(--menu-logout-border-btn-bg);
//   width: 18.4rem;
//   &:hover {
//     background: ${shade(0.1, 'var(--menu-logout-border-btn-bg)')};
//     color: ${shade(0, '#FFFFFF')};
//   }
// `;

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: 275,
    },
    title: {
      fontSize: 14,
    },
    addressesGrid: {
      padding: theme.spacing(2, 2),
    },
    red: {
      color: '#d3455b',
    },
  }),
);
