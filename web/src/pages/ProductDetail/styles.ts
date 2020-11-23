import { shade } from 'polished';
import styled from 'styled-components';

export const Section = styled.section`
  /* height: 800px; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 80px 0;

  @media screen and (max-width: 1120px) {
    flex-direction: column;
  }

  a {
    text-decoration: none;
  }
`;

export const ProductDetailContainer = styled.div`
  margin-left: 120px;
  display: flex;

  @media screen and (max-width: 1120px) {
    flex-direction: column;
    align-items: center;
    margin-left: 0;
  }

  div.title {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    h1 {
      margin-right: 24px;
    }
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

export const ReviewsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: #f2f2f2;
  width: 100%;
  padding-bottom: 80px;

  @media screen and (max-width: 1120px) {
    width: screen;
  }
`;
export const ReviewsHeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 45%;
  margin-top: 48px;

  @media screen and (max-width: 1120px) {
    flex-direction: column;
  }

  h1 {
    margin-right: 64px;

    @media screen and (max-width: 1120px) {
      margin-left: 0;
      margin-right: 0;
      margin-bottom: 12px;
    }
  }

  a {
    background: #809bb1;
    height: 48px;
    border-radius: 4px;
    border: 0;
    padding: 0 12px;
    color: #312e38;
    width: 100%;
    font-weight: 500;
    transition: background-color 0.2s;
    font-size: 14px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-left: 16px;

    @media screen and (max-width: 1120px) {
      margin-left: 0;
      margin-right: 0;
      margin-top: 12px;
    }

    &:hover {
      background: ${shade(0.2, '#809bb1')};
    }
  }
`;

export const ReviewsBodyContent = styled.div`
  width: 80%;
  margin-top: 80px;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  div.review {
    margin-top: 48px;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 1120px) {
      flex-direction: column;
    }

    & + div {
      border-top: 1px solid;
      padding-top: 48px;
    }

    div.userInfo {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      @media screen and (max-width: 1120px) {
        flex-direction: row;
        margin-bottom: 12px;
      }

      span {
        font-weight: bold;

        & + span {
          margin-top: 8px;

          @media screen and (max-width: 1120px) {
            margin: 0 0 0 12px;
          }
        }
      }
    }

    div.reviewBody {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      width: 80%;

      strong {
        font-weight: bold;
        font-size: 18px;
        color: #333;
        margin-bottom: 24px;
      }

      p {
        font-size: 16px;
        margin-bottom: 18px;
      }

      div.likes {
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 15%;

        button {
          border: 0;
          padding: 6px;
          background: #f2f2f2;
        }
      }
    }
  }
`;
