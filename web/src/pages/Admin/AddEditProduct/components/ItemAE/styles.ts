import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import styled from 'styled-components';
import { shade } from 'polished';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    item: {
      padding: theme.spacing(1, 2),
      textAlign: 'center',
    },
    error: {
      color: 'red',
    },
  }),
);

export const SolidButton = styled(Button)`
  background-color: #e06b50;
  padding: 0.5rem 1rem;
  color: white;
  width: 100%;
  max-width: 18.4rem;
  &:hover {
    background: ${shade(0.25, '#e06b50')};
  }
`;

export const RedOutlinedButton = styled(Button)`
  background-color: white;
  border: 2px solid #d3455b;
  color: #d3455b;
  padding: 0.5rem 1rem;
  width: 100%;
  max-width: 18.4rem;
  &:hover {
    background: ${shade(0.1, '#d3455b')};
    border: 2px solid #d3455b;
    color: ${shade(0, '#FFFFFF')};
  }
`;
