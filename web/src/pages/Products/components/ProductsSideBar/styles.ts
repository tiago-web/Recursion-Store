import styled from 'styled-components';

export const Container = styled.div`
  @media screen and (min-width: 3150px) {
    height: 85vh;
  }

  min-height: 85vh;
`;

export const SideBar = styled.div`
  background: #462a5e;

  height: 100%;
  width: 16vw;
  border-top-right-radius: 8px;
  max-width: 320px;
  min-width: 180px;
  display: flex;
  align-items: center;
  flex-direction: column;

  box-shadow: 2px -2px 4px 0px rgba(0, 0, 0, 0.3);
`;
