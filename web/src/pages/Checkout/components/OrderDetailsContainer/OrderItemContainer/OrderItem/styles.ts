import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;

  & + div {
    margin-top: 48px;
  }
`;

export const ItemDetails = styled.div`
  display: flex;
  width: 100%;

  img {
    width: 170px;
    height: 200px;
    border: 5px solid #fff;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 12px;

    h2 {
      margin: 0 0 16px;
    }

    strong {
      & + strong {
        margin: 8px 0 0;
      }
      span {
        margin: 0 0 0 4px;
        font-weight: lighter;
        color: #e06b50;
      }
    }

    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin: 0;

      input {
        border-radius: 4px;
        border: 0;
        margin-left: 8px;
        width: 100px;
      }

      button {
        width: 70px;
        height: 30px;
        text-align: center;
        margin-left: 8px;
      }

      select {
        border-radius: 4px;
        border: 0;
        margin-left: 8px;
        padding: 8px;
      }
    }
  }
`;
