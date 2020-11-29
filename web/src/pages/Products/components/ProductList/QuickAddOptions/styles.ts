import styled, { css } from 'styled-components';

import { Button as MaterialBtn } from '@material-ui/core';

import { shade } from 'polished';

interface OptionBtnProps {
  selected?: boolean;
  disabled?: boolean;
}

export const Container = styled.div`
  height: 30%;
  width: 100%;
`;

export const OverlayContainer = styled.div`
  margin: 4px;
  background: rgb(255, 255, 255, 0.9);
  border-radius: 5px;
  padding: 8px;

  display: flex;
  align-items: center;
  flex-wrap: wrap;
  max-width: 350px;
`;

export const Options = styled.ul`
  list-style: none;

  display: flex;
  align-items: center;
  flex-wrap: wrap;
  max-width: 350px;
`;

export const OptionBtn = styled.button<OptionBtnProps>`
  border-radius: 50%;
  border: 2px solid var(--text-color);
  font-size: 0.9rem;
  color: var(--text-color);

  padding: 15px;
  font-weight: 600;

  width: 27px;
  height: 27px;

  display: flex;
  align-items: center;
  justify-content: center;

  &:focus {
    outline: none;
  }

  ${props =>
    props.selected &&
    css`
      background: var(--text-color);
      color: #fff;
      border: 2px solid var(--text-color);
    `}

  ${props =>
    props.disabled &&
    css`
      background: #c53030;
      color: #fff;
      opacity: 0.6;
      border: 2px solid #c53030;

      cursor: not-allowed;
    `}
`;

export const OptionTitle = styled.h2`
  width: 100%;
  font-size: 1.5rem;

  color: #462a5e;

  margin: 0 0 14px 4px;
`;

export const OptionItem = styled.div`
  padding: 3px 5px;
`;

export const AddToCartBtn = styled(MaterialBtn)`
  text-transform: uppercase;
  width: 50%;
  margin-top: 13px;
  margin-left: auto;

  padding: 6px 8px;
  background: ${shade(0.1, '#e06b50')};
  color: #fff;
  font-family: Roboto, Ubunto, sans-serif;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.5, '#e06b50')};
  }
`;
