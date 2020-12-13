import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
`;

export const ShippingType = styled.div`
  h3 {
    margin: 32px 0 12px;
  }

  select {
    padding: 8px 8px;
    border: 0;
    background: #fff;
    border-radius: 4px;

    width: 100px;
    margin: 0 12px 0 0;
  }
`;
