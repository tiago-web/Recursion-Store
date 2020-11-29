import styled from 'styled-components';

interface ProductColorProps {
  colorHex: string;
  selected: boolean;
}

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
  border: none;

  border: ${props => (props.selected ? '4px solid #868c98' : 'none')};

  height: 45px;
  width: 45px;

  &:focus {
    outline: none;
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
