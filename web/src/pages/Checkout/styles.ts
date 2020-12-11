import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 86px 48px 0;
  max-width: 1700px;

  @media screen and (max-width: 1120px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
  }
`;
export const CheckoutContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 24px 0 0;
`;
