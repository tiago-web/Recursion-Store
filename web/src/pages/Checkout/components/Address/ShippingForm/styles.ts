import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  margin: 24px 0 0;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  margin: 12px 0 0;

  div {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }

  .input {
    display: column;
    flex-direction: column;
    margin: 12px 0 0;
  }

  input {
    padding: 12px 24px;
    border: 0;
    background: #fff;
    border-radius: 4px;
  }
`;
