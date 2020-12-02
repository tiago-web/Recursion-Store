import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  max-width: 800px;

  & + div {
    margin-top: 48px;
  }

  img {
    width: 170px;
    height: 200px;
    border: 5px solid #fff;
  }

  div {
    display: flex;
    width: 100%;

    div {
      display: flex;
      flex-direction: column;
      margin-left: 12px;

      strong {
        span {
          margin-left: 4px;
          font-weight: lighter;
          color: #e06b50;
        }
      }

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

    .oldPrice {
      text-decoration: line-through;
      color: #555;
    }

    .newPrice {
      color: #f00;
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
