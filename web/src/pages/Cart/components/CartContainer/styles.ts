import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  margin: 64px 0;
`;

export const YourCartContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  /* width: 100%; */

  h1 {
    font-size: 32px;
    color: #583874;
    margin-bottom: 36px;
  }

  .emptyCart {
    display: flex;
    flex-direction: column;

    strong {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 8px;
    }

    span {
      margin-bottom: 16px;
    }

    button {
      max-width: 180px;
    }
  }

  .cart {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;
