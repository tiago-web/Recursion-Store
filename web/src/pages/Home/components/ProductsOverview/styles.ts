import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  align-items: flex-start;
  justify-content: space-around;
  width: 90%;

  margin: 48px 0;

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

  border-radius: 5px;

  box-shadow: -1px -3px 36px -5px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: -1px -3px 36px -5px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: -1px -3px 36px -5px rgba(0, 0, 0, 0.1);

  strong {
    color: #000;
    font-size: 36px;
    width: 100%;
    text-align: center;
    background: #fff;
    opacity: 0.5;
  }

  a {
    border: 2px solid #e4740c;

    padding: 8px 16px;
    color: #e4740c;
    font-weight: 600;
    background: #fff;

    transition: all 0.3s;

    @media screen and (max-width: 1120px) {
      text-align: center;
    }

    &:hover {
      color: #fff;
      background: #e4740c;
    }
  }
`;
