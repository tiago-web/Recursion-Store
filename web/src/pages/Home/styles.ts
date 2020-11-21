import styled from 'styled-components';
import { shade } from 'polished';

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
  }
  /* border-top: 2px solid; */
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;
  padding-bottom: 64px;

  width: 100%;

  background-color: #f2f2f2;

  h1 {
    margin: 80px;
  }
`;

export const ProductOffers = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  align-items: flex-start;
  justify-content: space-around;
  /* padding-bottom: 64px; */
  width: 100%;

  @media (max-width: 100) {
    width: 100%;
  }
  /* width: 100%;
  max-width: 1500px;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  align-items: flex-start;
  justify-content: center; */
`;

export const ProductOffer = styled.div`
  /* width: 20%; */
  height: 500px;
  margin: 0 24px;

  a {
    display: flex;
    flex-direction: column;
    align-items: left;

    img {
      height: 400px;
      width: 100%;
    }

    strong {
      margin-top: 8px;
    }

    span {
      margin-top: 4px;
    }
  }
`;

export const SeeProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  align-items: flex-start;
  justify-content: space-around;
  /* padding-bottom: 64px; */

  width: 50%;
`;

export const SeeProduct = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 80px;

  background: url('https://digital.michaelkors.com/refreshes/2020/holiday/refresh1/global/desktop/homepage/HP_PROMO_11-1.jpg')
    no-repeat center;

  strong {
    color: #fff;
    font-size: 32px;
  }

  a {
    border: 1px solid #f4ede8;
    padding: 4px 8px;
    color: #f4ede8;
    font-weight: bold;

    transition: color 0.2s;
    transition: border 0.2s;

    &:hover {
      color: ${shade(0.2, '#f4ede8')};
      border: 1px solid ${shade(0.2, '#f4ede8')};
    }
  }
`;
