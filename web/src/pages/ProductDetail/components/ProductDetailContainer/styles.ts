import { shade } from 'polished';
import styled from 'styled-components';

interface ProductColorProps {
  colorHex: string;
  selected: boolean;
}

export const Container = styled.div`
  margin-left: 120px;
  display: flex;
  max-width: 1200px;

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
    color: #341c49;
  }

  span {
    margin-top: 24px;
    color: #341c49;
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
  /* width: 250px; */
  flex: 1;
  margin-left: 120px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1120px) {
    margin-top: 48px;
    margin-left: 0;
  }

  span {
    margin-top: 12px;
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
    color: #341c49;
  }
`;

export const AvailableColors = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

export const ColorContainer = styled.div`
  max-width: 350px;

  & + div {
    margin-left: 6px;
  }
`;

export const ProductColor = styled.button<ProductColorProps>`
  background: ${props => props.colorHex};
  border-radius: 50%;

  border: ${props =>
    props.selected ? '3px solid #e06b50' : `3px solid ${props.colorHex}`};

  height: 45px;
  width: 45px;

  &:focus {
    outline: none;
  }
`;

export const AddToCart = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-top: 24px;

  strong {
    font-size: 18px;
    color: #341c49;
    margin-bottom: 12px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    height: 48px;
  }

  div input {
    height: 100%;
    border: 0;
    border-radius: 5px 0 0 5px;
    padding: 0 16px;
    width: 55%;
    outline: none;

    -webkit-box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.05);
    -moz-box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.05);
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.05);

    &::placeholder {
      color: var(--placeholder-text);
    }
  }

  div button {
    height: 100%;
    width: 45%;
    border-radius: 0 5px 5px 0;

    margin: 0;
    background: #e06b50;
    font-size: 0.8rem;

    -webkit-box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.05);
    -moz-box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.05);
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.05);

    &:hover {
      background: ${shade(0.3, '#e06b50')};
    }
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
    color: #341c49;
    margin-bottom: 12px;
  }
`;
