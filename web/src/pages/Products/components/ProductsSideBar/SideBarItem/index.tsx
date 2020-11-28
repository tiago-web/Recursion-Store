import React, { useCallback, useState } from 'react';

import { useHistory } from 'react-router-dom';
import SideBarBtn from '../SideBarBtn';
import Checkbox from '../../../../../components/Checkbox';

import { useProductsFilter } from '../../../contexts/ProductsFilterContext';
import { useSortBy } from '../../../contexts/SortByContext';

import { Container, Options } from './styles';

interface SideBarProps {
  title: string;
  items: string[];
  isSortBySection?: boolean;
  checkByDefault?: string;
}

const SideBarItem: React.FC<SideBarProps> = ({
  title,
  items,
  isSortBySection,
  checkByDefault,
}) => {
  const [selected, setSelected] = useState(false);
  const { addFilter, removeFilter } = useProductsFilter();
  const { sortBy, setSortBy, removeSortBy } = useSortBy();

  const history = useHistory();

  const toggleItemSelected = useCallback(() => {
    setSelected(prevState => !prevState);
  }, []);

  const addItemToFilterList = useCallback(
    (checked, name) => {
      if (isSortBySection) {
        if (checked) {
          setSortBy(name);
        } else {
          removeSortBy();
        }

        return;
      }

      if (checked) {
        addFilter(title, name);
      } else {
        removeFilter(title, name);

        if (
          name.replace(/\s/g, '').toLocaleLowerCase() ===
          checkByDefault?.replace(/\s/g, '').toLocaleLowerCase()
        ) {
          history.push('/products');
        }
      }
    },
    [
      isSortBySection,
      setSortBy,
      removeSortBy,
      addFilter,
      removeFilter,
      title,
      checkByDefault,
      history,
    ],
  );

  return (
    <Container>
      <SideBarBtn toggleItemSelected={toggleItemSelected}>{title}</SideBarBtn>
      <Options selected={selected}>
        {items.map(item => (
          <Checkbox
            key={item}
            name={item}
            isChecked={
              checkByDefault?.replace(/\s/g, '').toLocaleLowerCase() ===
              item.replace(/\s/g, '').toLocaleLowerCase()
            }
            handleCheckboxChange={addItemToFilterList}
            disabled={isSortBySection && sortBy !== '' && sortBy !== item}
          >
            {item}
          </Checkbox>
        ))}
      </Options>
    </Container>
  );
};

export default SideBarItem;
