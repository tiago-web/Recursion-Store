import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  width: 40%;
  margin: 0 80px;

  display: flex;
  flex-direction: column;

  h1 {
    margin-top: 12px;
  }

  button {
    margin-top: 32px;
    width: 100%;
    margin-bottom: 24px;
  }

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    height: 48px;

    input {
      height: 100%;
      border: 0;
      border-radius: 5px 0 0 5px;
      padding: 0 16px;
      flex: 1;
      outline: none;

      -webkit-box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.05);
      -moz-box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.05);
      box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.05);

      &::placeholder {
        color: var(--placeholder-text);
      }
    }

    button {
      height: 100%;
      width: 100px;
      border-radius: 0 5px 5px 0;

      margin: 0;
      background: #e06b50;

      -webkit-box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.05);
      -moz-box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.05);
      box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.05);

      &:hover {
        background: ${shade(0.3, '#e06b50')};
      }
    }
  }
`;
