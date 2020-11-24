import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  max-height: 400px;
  overflow-x: auto;
  position: relative;
  width: 100%;

  &::-webkit-scrollbar {
    width: 0;
  }

  div {
    min-width: 300px;
    height: 300px;
    line-height: 300px;
    background: #000;
    text-align: center;
    color: #fff;
    margin: 8px;
  }

  .left {
    position: absolute;
    left: 0;
    border: 0;
    padding: 12px;
    border-radius: 50%;
    background-color: #9eadba;
    opacity: 0.4;

    transition: background-color 0.2s;
    transition: opacity 0.2s;

    &:hover {
      background: ${shade(0.2, '#9eadba')};
      opacity: 0.8;
    }
  }

  .right {
    position: absolute;
    right: 0;
    padding: 12px;
    border-radius: 50%;
    background-color: #9eadba;
    opacity: 0.4;

    transition: background-color 0.2s;
    transition: opacity 0.2s;

    &:hover {
      background: ${shade(0.2, '#9eadba')};
      opacity: 0.8;
    }
  }
`;
