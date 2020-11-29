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

  strong {
    color: #000;
    font-size: 36px;
    width: 100%;
    text-align: center;
    background: #fff;
    opacity: 0.6;
  }

  a {
    border: 1px solid #e4740c;
    padding: 8px 16px;
    color: #e4740c;
    font-weight: bold;
    background: #fff;

    transition: color 0.2s;
    transition: border 0.2s;
    transition: background-color 0.2s;

    @media screen and (max-width: 1120px) {
      text-align: center;
    }

    &:hover {
      color: #fff;
      background: #e4740c;
    }
  }
`;
