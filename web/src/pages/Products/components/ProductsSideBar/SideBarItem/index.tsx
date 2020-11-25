import React, { useCallback, useState } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import SideBarBtn from '../SideBarBtn';

import { useProductsFilter } from '../../../../../contexts/ProductsFilterContext';
import { useSortBy } from '../../../../../contexts/SortByContext';
import formatLabelToName from '../../../../../utils/formatLabelToName';

import { Container, Options, CheckboxOption } from './styles';

interface SideBarProps {
  title: string;
  items: string[];
  isSortBySection?: boolean;
}

const SideBarItem: React.FC<SideBarProps> = ({
  title,
  items,
  isSortBySection,
}) => {
  const [selected, setSelected] = useState(false);
  const { addFilter, removeFilter } = useProductsFilter();
  const { sortBy, setSortBy, removeSortBy } = useSortBy();

  const toggleItemSelected = useCallback(() => {
    setSelected(prevState => !prevState);
  }, []);

  const addItemToFilterList = useCallback(
    e => {
      if (isSortBySection) {
        if (e.target.checked) {
          setSortBy(e.target.name);
        } else {
          removeSortBy();
        }

        return;
      }

      if (e.target.checked) {
        addFilter(e.target.name);
      } else {
        removeFilter(e.target.name);
      }
    },
    [isSortBySection, setSortBy, removeSortBy, addFilter, removeFilter],
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
                  disabled={
                    isSortBySection &&
                    sortBy !== '' &&
                    sortBy !== formatLabelToName(item)
                  }
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
