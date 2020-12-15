import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  margin: 86px 48px 0 48px;
  max-width: 1700px;
  text-align: center;

  @media screen and (max-width: 1120px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h1 {
    margin: 0 0 64px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    margin: 48px 0 0;

    input {
      padding: 4px;
      margin: 0 12px 0 0;
    }
  }
`;
