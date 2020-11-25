import styled, { css } from 'styled-components';

import { shade } from 'polished';

interface ProductColorProps {
  colorHex: string;
  selected: boolean;
  enabled: boolean;
}

export const Container = styled.div`
  padding: 32px;
  margin-left: -32px;
`;

export const ProductImage = styled.div`
  height: 400px;
  width: 350px;
  border-radius: 5px;
  margin-bottom: 8px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 350px 400px;

  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
`;

export const ProductName = styled.p`
  font-weight: 600;
  font-size: 1.2rem;
  color: ${shade(0.1, '#868c98')};
`;

export const ProductPrice = styled.p`
  margin-top: 4px;
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

  border: ${props => (props.selected ? '3px solid #75b7ee' : 'none')};

  height: 26px;
  width: 26px;

  &:focus {
    outline: none;
  }

  ${props =>
    !props.enabled &&
    css`
      border: 2px solid #c53030;
      position: relative;
      cursor: not-allowed;

      ::after {
        content: '';
        width: 100%;
        border-bottom: solid 3px #c53030;
        position: absolute;
        left: 0;
        top: 46%;
        z-index: 1;
        transform: rotate(45deg);
      }
    `}
`;
