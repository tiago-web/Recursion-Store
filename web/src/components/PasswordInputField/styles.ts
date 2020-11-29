import { TextField } from '@material-ui/core';
import styled from 'styled-components';

export const CssTextField = styled(TextField)`
  fieldset {
    border-color: #583874 !important;
    color: #583874 !important;
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
