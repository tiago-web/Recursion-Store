import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #583874;
  height: 48px;
  border-radius: 4px;
  border: 0;
  padding: 0 16px;
  color: #fafafa;
  width: 100%;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#583874')};
  }
`;
