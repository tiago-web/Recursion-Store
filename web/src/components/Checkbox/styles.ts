import { lighten, shade } from 'polished';
import styled, { css } from 'styled-components';

interface CheckBoxProps {
  checked?: boolean;
  disabled?: boolean;
}

export const CheckboxContainer = styled.div<CheckBoxProps>`
  display: flex;
  cursor: pointer;

  & + div {
    margin-top: 8px;
  }

  font-size: 1.05rem;

  ${props =>
    props.disabled &&
    css`
      cursor: default;
    `}
`;

export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

export const HiddenCheckbox = styled.input`
  position: absolute;
  height: 0;
  overflow: hidden;
  width: 0;
`;

export const StyledCheckbox = styled.div<CheckBoxProps>`
  display: inline-block;
  width: 18px;
  height: 18px;
  background: ${props => (props.checked ? '#e06b50' : '#E0E1E2')};
  border-radius: 3px;
  transition: all 0.3s;

  :hover {
    background: ${props => (props.checked ? '#e06b50' : shade(0.5, '#E0E1E2'))};
  }

  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
  }

  ${props =>
    props.disabled &&
    css`
      cursor: default;

      pointer-events: none;
      background: ${shade(0.2, '#E0E1E2')};

      opacity: 0.4;
    `}
`;

export const CheckboxLabel = styled.span<CheckBoxProps>`
  margin-left: 6px;
  transition: color 0.3s;

  color: ${props => (props.checked ? '#e06b50' : shade(0.25, '#E0E1E2'))};
  ${props =>
    props.disabled &&
    css`
      color: ${shade(0.2, '#E0E1E2')};

      opacity: 0.4;
    `}
`;
