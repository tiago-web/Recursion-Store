import styled from 'styled-components';
import { TextField } from '@material-ui/core';
import { shade } from 'polished';

import Button from '../../components/Button';

export const Container = styled.div`
  height: 85vh;
  display: flex;
  justify-content: center;

  h1 {
    margin: 8px auto 42px auto;
  }
`;

export const FormWrapper = styled.div`
  margin-top: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 420px;

  border: 1px solid #341c49;
  border-radius: 15px;
`;

export const Form = styled.div`
  display: flex;
  width: 340px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Input = styled(TextField)`
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

export const SubmitButton = styled(Button)`
  text-transform: uppercase;
  width: 100%;
  transition: background-color 0.3s;

  padding: 6px 8px;
  background: #e06b50;
  margin-top: 18px;
  color: #fff;
  font-family: Roboto, Ubunto, sans-serif;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  &:hover {
    background: ${shade(0.3, '#e06b50')};
  }
`;
