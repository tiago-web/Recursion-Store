import styled from 'styled-components';

export const Container = styled.div`
  height: 2rem;
  width: 110px;
  border: 1px solid gray;
  border-radius: 1rem;
  background-color: white;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  button {
    z-index: 2;
    background-color: transparent;
    border: none;
    margin: 0.2rem 0.1rem 0.2rem 0;
    padding: 0;
    text-align: center;
    align-self: normal;
    svg {
      color: #583874;
      border-radius: 12px;
    }
    &:hover {
      svg {
        background-color: #583874;
        color: white;
      }
    }
  }
`;

export const Size = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  height: 2rem;
  width: 100px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
