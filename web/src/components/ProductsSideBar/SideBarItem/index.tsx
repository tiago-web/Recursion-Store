import React, { useCallback, useEffect, useState } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useProductsFilter } from '../../../contexts/ProductsFilterContext';

import SideBarBtn from '../SideBarBtn';

import { Container, Options, CheckboxOption } from './styles';
import formatLabelToName from '../../../utils/formatLabelToName';

interface SideBarProps {
  title: string;
  items: string[];
  isSortBySection?: boolean;
}

const SideBarItem: React.FC<SideBarProps> = ({ title, items }) => {
  const [selected, setSelected] = useState(false);
  const { addFilter, removeFilter } = useProductsFilter();

  const toggleItemSelected = useCallback(() => {
    setSelected(prevState => !prevState);
  }, []);

  const addItemToFilterList = useCallback(
    e => {
      if (e.target.checked) {
        addFilter(e.target.name);
      } else {
        removeFilter(e.target.name);
      }
    },
    [addFilter, removeFilter],
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
