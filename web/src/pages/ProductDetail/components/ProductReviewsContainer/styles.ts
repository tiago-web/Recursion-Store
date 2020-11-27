import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: #f2f2f2;
  width: 100%;
  padding-bottom: 80px;

  @media screen and (max-width: 1120px) {
    width: screen;
  }
`;
