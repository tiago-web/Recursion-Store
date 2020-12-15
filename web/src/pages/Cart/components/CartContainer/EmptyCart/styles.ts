import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  div {
    button {
      transition: background 0.3s;
      background: #e06b50;

      :hover {
        background: ${shade(0.3, '#e06b50')};
      }
      a {
        color: #fafafa;
      }
    }
  }
`;
