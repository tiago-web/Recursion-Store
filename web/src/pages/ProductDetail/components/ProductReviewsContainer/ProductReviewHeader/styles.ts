import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 45%;
  margin-top: 48px;

  @media screen and (max-width: 1120px) {
    flex-direction: column;
  }

  h1 {
    margin-right: 64px;

    @media screen and (max-width: 1120px) {
      margin-left: 0;
      margin-right: 0;
      margin-bottom: 12px;
    }
  }

  a {
    background: #809bb1;
    height: 48px;
    border-radius: 4px;
    border: 0;
    padding: 0 12px;
    color: #312e38;
    width: 100%;
    font-weight: 500;
    transition: background-color 0.2s;
    font-size: 14px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-left: 16px;

    @media screen and (max-width: 1120px) {
      margin-left: 0;
      margin-right: 0;
      margin-top: 12px;
    }

    &:hover {
      background: ${shade(0.2, '#809bb1')};
    }
  }
`;
