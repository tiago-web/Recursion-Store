import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { shade } from 'polished';
import { TextField } from '@material-ui/core';

import styled from 'styled-components';
import Button from '../../../../components/Button';

export const PurpleButton = styled(Button)`
  transition: background 0.3s;
  background: #e06b50;
  color: #fff;
  width: 18.4rem;
  font-weight: 700;

  &:hover {
    background: ${shade(0.25, '#e06b50')};
  }
`;

export const CssTextField = styled(TextField)`
  fieldset {
    border-color: #583874 !important;
  }

  label {
    color: #583874 !important;
  }

  .Mui-focused fieldset {
    border-color: #583874 !important;
  }

  label.Mui-focused {
    color: #e06b50 !important;
  }

  .Mui-focused .MuiSvgIcon-root {
    color: #e06b50 !important;
  }

  svg {
    color: #583874 !important;
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
