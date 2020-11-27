import styled from 'styled-components';

interface CheckBoxProps {
  checked: boolean;
}

export const CheckboxContainer = styled.div`
  display: flex;
  cursor: pointer;

  & + div {
    margin-top: 7px;
  }
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
  background: ${props => (props.checked ? '#2196F3' : '#eee')};
  border-radius: 3px;
  transition: all 0.3s;

  :hover {
    background: ${props => (props.checked ? '#2196F3' : '#ccc')};
  }

  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
  }
`;

export const CheckboxLabel = styled.span`
  margin-left: 6px;
`;
