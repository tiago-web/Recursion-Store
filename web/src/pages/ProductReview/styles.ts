import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 64px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1120px) {
    margin-left: 0;
    margin-right: 0;
  }

  h1 {
    margin-bottom: 48px;

    @media screen and (max-width: 1120px) {
      margin: 0px 24px 48px;
    }
  }

  div.form {
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media screen and (max-width: 1120px) {
      flex-direction: column;
      width: 100%;
    }

    img {
      @media screen and (max-width: 1120px) {
        width: 90%;
      }
    }
  }
`;

export const Form = styled.form`
  width: 40%;
  height: 440px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 1120px) {
    margin: 48px 24px 0;
    width: 100%;
  }

  input {
    padding: 16px;
    border: 0;
    border-radius: 4px;
    color: #293845;

    @media screen and (max-width: 1120px) {
      margin: 0 24px;
    }

    &::placeholder {
      color: #909ea9;
      font-size: 18px;
    }
  }
  textarea {
    padding: 16px;
    border: 0;
    border-radius: 4px;
    color: #293845;

    @media screen and (max-width: 1120px) {
      margin: 0 24px;
    }

    &::placeholder {
      color: #909ea9;
      font-size: 18px;
    }
  }

  button {
    @media screen and (max-width: 1120px) {
      margin: 0 24px 24px;
    }
  }
`;
