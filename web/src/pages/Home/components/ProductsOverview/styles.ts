import styled from 'styled-components';
import { shade } from 'polished';

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

export const SeeProduct = styled.div`
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 48px 24px;

  background-position: center;
  background-repeat: no-repeat;
  background-size: 350px 400px;
  /* background: url('https://digital.michaelkors.com/refreshes/2020/holiday/refresh1/global/desktop/homepage/HP_PROMO_11-1.jpg')
    no-repeat center; */

  strong {
    color: #909ea9;
    font-size: 36px;
    width: 100%;
    text-align: center;
    background: #fff;
  }

  a {
    border: 1px solid #505050;
    padding: 4px 8px;
    color: #505050;
    font-weight: bold;

    transition: color 0.2s;
    transition: border 0.2s;

    @media screen and (max-width: 1120px) {
      text-align: center;
    }

    &:hover {
      color: ${shade(0.6, '#505050')};
      border: 1px solid ${shade(0.6, '#505050')};
    }
  }
`;
