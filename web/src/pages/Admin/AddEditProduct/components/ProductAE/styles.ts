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
