import React, { useCallback, useEffect, useState } from 'react';

import { useHistory, useParams } from 'react-router-dom';
import SideBarBtn from '../SideBarBtn';
import Checkbox from '../../../../../components/Checkbox';

import { useProductsFilter } from '../../../contexts/ProductsFilterContext';
import { useSortBy } from '../../../contexts/SortByContext';

import { Container, Options } from './styles';

interface SideBarProps {
  title: string;
  items: string[];
  isSortBySection?: boolean;
}

interface RouteParams {
  filter?: string;
}

const SideBarItem: React.FC<SideBarProps> = ({
  title,
  items,
  isSortBySection,
}) => {
  const { filter: urlFilter } = useParams<RouteParams>();

  const [filter, setFilter] = useState<string | undefined>(urlFilter);

  const [selected, setSelected] = useState(false);
  const [checkboxSelectedByFilter, setCheckboxSelectedByFilter] = useState('');
  const { addFilter, removeFilter } = useProductsFilter();
  const { sortBy, setSortBy, removeSortBy } = useSortBy();

  const history = useHistory();

  useEffect(() => {
    if (filter) {
      const hasFilter = items.find(
        item => item.toLocaleLowerCase() === filter.toLocaleLowerCase(),
      );

      if (hasFilter) {
        setCheckboxSelectedByFilter(
          filter.replace(/\s/g, '').toLocaleLowerCase(),
        );

        addFilter(title, filter);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, items, title]);

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
        if (
          filter &&
          name.replace(/\s/g, '').toLocaleLowerCase() ===
            filter.replace(/\s/g, '').toLocaleLowerCase()
        ) {
          history.go(-1);
          setFilter(undefined);
        }
        removeFilter(title, name);
      }
    },
    [
      isSortBySection,
      setSortBy,
      removeSortBy,
      addFilter,
      removeFilter,
      title,
      filter,
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
              checkboxSelectedByFilter ===
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
