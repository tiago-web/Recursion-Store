import styled from 'styled-components';
import { shade } from 'polished';

interface ButtonProps {
  disabled?: boolean;
}

export const Container = styled.button<ButtonProps>`
  background: ${props => (props.disabled ? '#e0e1e2c9' : '#583874')};
  height: 48px;
  border-radius: 4px;
  border: 0;
  padding: 0 16px;
  color: ${props => (props.disabled ? '#220f33' : '#fafafa')};
  width: 100%;
  font-weight: 500;
  transition: background-color 0.2s;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background: ${props =>
    props.disabled ? '#e0e1e2c9' : shade(0.2, '#583874')};
  }
`;
