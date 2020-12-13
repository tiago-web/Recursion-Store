import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { shade } from 'polished';
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
    title: {
      padding: theme.spacing(2, 1),
    },
    purple: {
      color: '#583874',
    },
    addBtn: {
      width: '18.4rem',
      padding: theme.spacing(2, 0),
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      maxWidth: '75vw',
      maxHeight: '90vh',
      overflowY: 'auto',
      padding: theme.spacing(2, 4, 3),
    },
    item: {
      padding: theme.spacing(1, 2),
      textAlign: 'center',
    },
    gridCenter: {
      textAlignLast: 'center',
    },
  }),
);

export const SolidButton = styled(Button)`
  background-color: #e06b50;
  border: 2px solid #e06b50;
  padding: 0.5rem 1rem;
  color: white;
  width: 100%;
  max-width: 18.4rem;
  &:hover {
    background: ${shade(0.25, '#e06b50')};
    border: 2px solid ${shade(0.25, '#e06b50')};
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
