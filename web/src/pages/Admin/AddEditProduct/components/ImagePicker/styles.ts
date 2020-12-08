import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 144px;
  width: 110px;
  border: 1px solid gray;
  background-color: white;
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  button {
    outline: none;
    z-index: 2;
    background-color: transparent;
    border: 0;
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

export const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  height: 144px;
  width: 110px;
  /* border: 1px solid orange; */
  /* background-color: white; */
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-width: 100px;
    max-height: 138px;
  }
`;
