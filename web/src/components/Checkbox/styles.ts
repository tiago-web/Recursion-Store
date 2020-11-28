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
    margin-top: 7px;
  }

  color: ${shade(0.25, '#b0b0b0')};

  ${props =>
    props.disabled &&
    css`
      cursor: default;

      color: ${lighten(0.09, '#b0b0b0')};
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
  background: ${props => (props.checked ? '#2196F3' : lighten(0.2, '#b0b0b0'))};
  border-radius: 3px;
  transition: all 0.3s;

  :hover {
    background: ${props => (props.checked ? '#2196F3' : shade(0.2, '#b0b0b0'))};
  }

  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
  }

  ${props =>
    props.disabled &&
    css`
      cursor: default;

      pointer-events: none;
      background: ${lighten(0.27, '#b0b0b0')};
    `}
`;

export const CheckboxLabel = styled.span`
  margin-left: 6px;
`;
