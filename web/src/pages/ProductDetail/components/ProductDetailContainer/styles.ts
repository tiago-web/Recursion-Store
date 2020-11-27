import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 120px;
  display: flex;

  @media screen and (max-width: 1120px) {
    flex-direction: column;
    align-items: center;
    margin-left: 0;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  h1 {
    margin-right: 24px;
  }

  span {
    margin-top: 24px;
    color: #000;
  }
`;

export const CarouselContent = styled.div`
  width: 750px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1120px) {
    width: 300px;
    margin: 0;
    padding: 0;
  }
`;

export const ProductDetailContent = styled.div`
  width: 250px;
  margin-left: 120px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1120px) {
    margin-top: 48px;
    margin-left: 0;
  }
`;
export const Colors = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  margin-top: 24px;

  strong {
    font-size: 18px;
    color: #222;
  }

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;

    margin-top: 12px;

    li {
      width: 45px;
      height: 45px;
      max-width: 45px;
      border-radius: 50%;
      flex: 1 0 auto;
      margin: 0 5px 10px 0;

      display: flex;
      align-items: center;
      justify-content: center;

      button {
        border: 0;
        border-radius: 50%;
        padding: 14px;
        cursor: pointer;
      }
    }
    #red {
      background: #f00;
      button {
        color: #f00;
        background: #f00;
      }
    }
    #blue {
      background: #00f;
      button {
        color: #00f;
        background: #00f;
      }
    }
    #green {
      background: #0f0;
      button {
        color: #0f0;
        background: #0f0;
      }
    }
    #black {
      background: #000;
      button {
        color: #000;
        background: #000;
      }
    }
  }
`;

export const Sizes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  margin-top: 24px;

  strong {
    font-size: 18px;
    color: #222;
  }

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;

    margin-top: 12px;

    li {
      width: 45px;
      height: 45px;
      flex: 1 0 auto;
      margin: 0 3px 5px 0;
      color: #222;
    }
  }
`;

export const AddToCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 24px;

  div {
    margin-right: 24px;
  }

  div input {
    width: 100px;
    padding: 8px;
    border: none;
    border-radius: 4px;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  margin-top: 32px;

  strong {
    font-size: 18px;
    color: #222;
    margin-bottom: 12px;
  }
`;
