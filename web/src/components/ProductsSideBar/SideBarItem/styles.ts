import styled from 'styled-components';

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

export const CheckboxOption = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  margin-left: 6px;

  & + li {
    margin-top: 4px;
  }

  .PrivateSwitchBase-root-8 {
    padding: 0;
  }
`;
