import styled from 'styled-components';
import { shade } from 'polished';
import { Button, TextField } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const CustomInput = styled(TextField)`
  margin-bottom: 20px;
  width: 100%;

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
    color: #583874 !important;
  }

  .Mui-focused .MuiSvgIcon-root {
    color: #583874 !important;
  }
`;

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
  background-color: #583874;
  border: 2px solid #583874;
  color: white;
  transition: background 0.3s;
  &:hover {
    background: ${shade(0.3, '#583874')};
  }
`;

export const RedOutlinedButton = styled(Button)`
  background: #fff;
  color: #0f0f0f;
  transition: all 0.3s;

  &:hover {
    background: ${shade(0.1, '#d3455b')};
    color: ${shade(0, '#FFFFFF')};
  }
`;
