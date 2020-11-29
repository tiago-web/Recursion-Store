import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  align-items: flex-start;
  justify-content: space-around;
  width: 100%;

  @media screen and (max-width: 1120px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
  }
`;

export const ProductOffer = styled.div`
  min-width: 400px;
  height: 500px;
  margin: 0 24px;

  a {
    display: flex;
    flex-direction: column;
    align-items: left;

    img {
      height: 400px;
      width: 400px;

      border-radius: 5px;

      -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
      -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    }

    strong {
      margin-top: 8px;
      font-size: 1.15rem;
      font-weight: 600;
    }

    span {
      margin-top: 4px;
      color: var(--text-color);
    }
  }
`;
