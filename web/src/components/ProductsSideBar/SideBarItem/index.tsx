import React, { useCallback, useState } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import SideBarBtn from '../SideBarBtn';

import { Container, Options, CheckboxOption } from './styles';
import formatLabelToName from '../../../utils/formatLabelToName';

interface SideBarProps {
  title: string;
  items: string[];
  addFilter?(filterName: string): void;
}

const SideBarItem: React.FC<SideBarProps> = ({ title, items, addFilter }) => {
  const [selected, setSelected] = useState(false);

  const toggleItemSelected = useCallback(() => {
    setSelected(prevState => !prevState);
  }, []);

  const addItemToFilterList = useCallback(
    e => {
      if (addFilter) addFilter(e.target.name);
    },
    [addFilter],
  );

  return (
    <Container>
      <SideBarBtn toggleItemSelected={toggleItemSelected}>{title}</SideBarBtn>
      <Options selected={selected}>
        {items.map(item => (
          <CheckboxOption key={item}>
            <FormControlLabel
              control={
                <Checkbox
                  name={formatLabelToName(item)}
                  color="primary"
                  onChange={addItemToFilterList}
                />
              }
              label={item}
            />
          </CheckboxOption>
        ))}
      </Options>
    </Container>
  );
};

export default SideBarItem;
