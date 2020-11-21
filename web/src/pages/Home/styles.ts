import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 2px solid;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;
  padding-bottom: 64px;

  width: 100%;

  /* background-color: #f2f2f2; */

  h1 {
    margin: 80px;
  }
`;

export const ProductOffers = styled.div`
  width: 80%;
  max-width: 800px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* > div {
    margin-right: 48px;
  } */
`;

export const ProductOffer = styled.div`
  /* width: 65%; */
  margin: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: left;

  img {
    /* height: 400px; */
    width: 100%;
  }

  span {
    margin-top: 8px;
  }
`;
