import styled from 'styled-components';
import { shade } from 'polished';
import { Button } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: theme.spacing(2, 4),
    },
    textFieldGrid: {
      padding: '1rem 1rem',
    },
    error: {
      color: 'red',
    },
  }),
);

export const PurpleSolidButton = styled(Button)`
  background-color: #6060ab;
  border: 2px solid #6060ab;
  color: white;
  &:hover {
    background: ${shade(0.2, '#5454A0')};
  }
`;

export const RedOutlinedButton = styled(Button)`
  background-color: white;
  border: 2px solid var(--menu-logout-btn-bg);
  color: var(--menu-logout-border-btn-bg);
  &:hover {
    background: ${shade(0.1, '#d3455b')};
    border: 2px solid var(--menu-logout-border-btn-bg);
    color: ${shade(0, '#FFFFFF')};
  }
`;
