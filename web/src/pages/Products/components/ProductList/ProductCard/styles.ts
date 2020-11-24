import styled from 'styled-components';

interface ProductColorProps {
  colorHex: string;
  selected: boolean;
}

export const Container = styled.div`
  padding: 24px;
  margin-left: -24px;
`;

export const ProductImage = styled.img`
  height: 400px;
  width: 350px;
  border-radius: 5px;
  margin-bottom: 8px;
`;

export const ProductName = styled.p``;

export const ProductPrice = styled.p``;

export const AvailableColors = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;
export const ProductColor = styled.button<ProductColorProps>`
  background: ${props => props.colorHex};
  border-radius: 50%;
  border: none;

  border: ${props => (props.selected ? '3px solid #808080' : 'none')};

  height: 26px;
  width: 26px;

  & + button {
    margin-left: 6px;
  }

  &:focus {
    outline: none;
  }
`;
