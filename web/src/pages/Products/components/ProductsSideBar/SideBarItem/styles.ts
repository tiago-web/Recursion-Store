import styled from 'styled-components';

interface CheckBoxProps {
  checked: boolean;
}

interface OptionsProps {
  selected: boolean;
}

export const Container = styled.div`
  width: 80%;
`;

export const Options = styled.ul<OptionsProps>`
  display: ${props => (props.selected ? 'block' : 'none')};

  padding: 12px 8px 8px;
  list-style: none;
`;
