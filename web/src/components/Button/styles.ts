import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #809bb1;
  height: 48px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #312e38;
  width: 100%;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#809bb1')};
  }
`;
