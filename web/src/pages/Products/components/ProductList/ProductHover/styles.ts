import styled from 'styled-components';
import { Button as MaterialBtn } from '@material-ui/core';
import { shade } from 'polished';

export const Container = styled.div`
  transition: all 0.3s;

  width: 100%;
  height: 100%;
  z-index: 5;
  background: rgb(0, 0, 0, 0.7);
  border-radius: 5px;

  display: flex;
  align-items: flex-end;
`;

export const HoverOptions = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const DetailsBtn = styled(MaterialBtn)`
  text-transform: uppercase;
  background: rgb(255, 255, 255, 0.9);
  width: 100%;

  padding: 6px 8px;
  margin: 3px;
  font-family: Roboto, Ubunto, sans-serif;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  transition: background-color 0.3s;

  &:hover {
    background: ${shade(0.3, 'rgba(255, 255, 255, 0.9)')};
  }

  a {
    font-family: Roboto, Ubunto, sans-serif;
    color: var(--text-color);
    width: 100%;
  }
`;

export const QuickAddBtn = styled(MaterialBtn)`
  text-transform: uppercase;
  width: 100%;
  transition: background-color 0.3s;

  padding: 6px 8px;
  background: rgba(52, 28, 73, 0.9);
  margin: 3px;
  color: #fff;
  font-family: Roboto, Ubunto, sans-serif;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  &:hover {
    background: ${shade(0.3, 'rgba(52, 28, 73, 0.9)')};
  }
`;
