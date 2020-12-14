import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  margin: 24px 0 0;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 8px 0 0;

    input {
      margin: 0 8px 0 0;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  margin: 12px 0 0;
  min-width: 900px;

  div {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
  }

  .main-input {
    width: 100%;
  }

  .input {
    display: column;
    flex-direction: column;
    margin: 12px 0 0;

    input {
      width: 100%;
    }
  }

  .next-input {
    margin: 12px 0 0 12px;
  }

  input {
    padding: 20px 10px;
    border: 0;
    background: #fff;
    border-radius: 4px;
  }
`;
