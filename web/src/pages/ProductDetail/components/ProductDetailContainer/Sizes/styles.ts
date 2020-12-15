import styled, { css } from 'styled-components';

interface OptionBtnProps {
  selected?: boolean;
  disabled?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  margin-top: 24px;

  strong {
    font-size: 18px;
    color: #222;
  }

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;

    margin-top: 12px;

    li {
      width: 45px;
      height: 45px;
      flex: 1 0 auto;
      margin: 0 3px 5px 0;
      color: #222;
    }
  }
`;

export const Options = styled.div`
  list-style: none;

  display: flex;
  align-items: center;
  flex-wrap: wrap;
  max-width: 350px;
`;

export const OptionItem = styled.div`
  padding: 3px 5px;
`;

export const OptionBtn = styled.div<OptionBtnProps>`
  border-radius: 50%;
  border: 2px solid var(--text-color);
  color: var(--text-color);
  cursor: pointer;

  padding: 3px;

  width: 30px;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  &:focus {
    outline: none;
  }

  ${props =>
    props.selected &&
    css`
      background: #583874;
      color: #fff;
      border: none;
    `}

  ${props =>
    props.disabled &&
    css`
      background: #c53030;
      color: #fff;
      opacity: 0.5;
      border: none;
      /* display: none; */

      cursor: not-allowed;
    `}
`;
