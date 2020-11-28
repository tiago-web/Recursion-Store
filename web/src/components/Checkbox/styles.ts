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
  background: ${props => (props.checked ? '#2196F3' : '#d1d1d1')};
  border-radius: 3px;
  transition: all 0.3s;

  :hover {
    background: ${props => (props.checked ? '#2196F3' : shade(0.4, '#d1d1d1'))};
  }

  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
  }

  ${props =>
    props.disabled &&
    css`
      cursor: default;

      pointer-events: none;
      background: ${lighten(0.1, '#d1d1d1')};
    `}
`;

export const CheckboxLabel = styled.span`
  margin-left: 6px;
`;
