import styled from 'styled-components';

interface ProductsProps {
  productsFound: boolean;
}

export const Container = styled.div`
  margin-left: 74px;
  flex: 1;
`;

export const Products = styled.div<ProductsProps>`
  display: flex;
  flex-wrap: wrap;

  height: ${props => (props.productsFound ? 'auto' : '80vh')};

  @media screen and (min-width: 1600px) {
    height: 80vh;
  }
`;

export const Title = styled.h1`
  margin-bottom: 24px;
`;

export const NoFoundProducts = styled.h3`
  color: var(--text-color);
`;
