import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const CartSection = styled.section`
  min-height: 700px;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 64px;
`;

export const CartContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 80px 64px;
`;

export const YourCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;

  h1 {
    font-size: 32px;
    margin-bottom: 64px;
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

export const CartItem = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  max-width: 800px;

  & + div {
    margin-top: 48px;
  }

  img {
    width: 250px;
    height: 300px;
    border: 5px solid #fff;
  }

  div {
    display: flex;
    width: 100%;

    div {
      display: flex;
      flex-direction: column;
      margin-left: 12px;

      div {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 0;

        button {
          width: 40px;
          height: 40px;
          text-align: center;

          & + button {
            margin-left: 4px;
          }
        }
      }
    }
  }

  .price {
    display: flex;
    flex-direction: column;
    width: 100px;
    align-items: center;
    justify-content: center;

    span {
      margin: 8px 24px 0 0;
    }

    button {
      margin-top: 12px;
      background: #fafafa;
      color: #583874;
      padding: 0;
      width: 45px;
      height: 45px;

      transition: all 0.2;

      &:hover {
        color: ${shade(0.8, '#583874')};
      }
    }
  }
`;

export const CartTotalContainer = styled.div`
  width: 40%;
  margin: 0 80px;

  display: flex;
  flex-direction: column;

  h1 {
    margin-top: 24px;
  }

  button {
    margin-top: 32px;
    width: 300px;
  }

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    margin-top: 32px;

    input {
      padding: 16px 26px;
      border: 0;
      border-radius: 4px;

      &::placeholder {
        color: var(--placeholder-text);
      }
    }

    button {
      width: 100px;
      margin: 0;
    }
  }
`;
