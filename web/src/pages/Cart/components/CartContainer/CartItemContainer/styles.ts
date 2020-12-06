import { lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  align-content: space-between;

  h2 {
    margin: 24px 0;

    &:hover {
      color: ${lighten(0.1, '#e06b50')};
    }
  }
`;
