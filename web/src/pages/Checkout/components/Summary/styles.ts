import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  height: 500px;
  background: #fff;

  border: 1px solid;
  padding: 24px 48px;

  -webkit-box-shadow: 0px 0px 18px 2px rgba(0, 0, 0, 0.42);
  box-shadow: 0px 0px 18px 2px rgba(0, 0, 0, 0.42);

  h1 {
    margin: 0 0 32px;
  }

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-size: 18px;
  }

  .subtotal {
    border-bottom: 1px solid #000;
    padding: 0 0 8px;
  }

  .ship {
    margin: 16px 0 8px;
  }

  .total {
    font-size: 28px;
    font-weight: bold;
    margin: 32px 0 64px;
  }

  .terms {
    margin: 16px 0 8px;
    a {
      margin-left: 3px;
      color: #00f;
    }
  }

  button {
    font-size: 20px;
  }
`;
