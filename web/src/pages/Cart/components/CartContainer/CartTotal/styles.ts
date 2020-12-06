import styled from 'styled-components';

export const Container = styled.div`
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
