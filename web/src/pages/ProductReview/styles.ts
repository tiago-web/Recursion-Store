import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 64px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin-bottom: 48px;
  }

  div.form {
    width: 60%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;

    img {
    }
  }
`;

export const Form = styled.form`
  width: 40%;
  height: 440px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  input {
    padding: 16px;
    border: 0;
    border-radius: 4px;
    color: #293845;

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

    &::placeholder {
      color: #909ea9;
      font-size: 18px;
    }
  }
`;
