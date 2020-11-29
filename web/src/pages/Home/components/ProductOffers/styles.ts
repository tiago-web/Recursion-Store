import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  align-items: flex-start;
  justify-content: space-around;
  width: 80%;

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
  padding: 15px;

  a {
    display: flex;
    flex-direction: column;
    align-items: left;

    img {
      height: 380px;
      width: 350px;

      border-radius: 5px;

      -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
      -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    }

    strong {
      margin: 8px 0 0 4px;
      font-size: 1.2rem;
      font-weight: 700;
    }

    span {
      margin: 4px 0 0 4px;
      color: #e06b50;
      font-weight: 600;
    }
  }
`;
