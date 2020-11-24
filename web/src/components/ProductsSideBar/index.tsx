import React, { useCallback, useState } from 'react';

import SideBarItem from './SideBarItem';

import { Container, SideBar } from './styles';

// I've got all the filters selected by the user on the filters array
const ProductsSideBar: React.FC = () => {
  const [filters, setFilters] = useState<string[]>([]);

  const addFilter = useCallback(filterName => {
    setFilters(prevState => [...prevState, filterName]);
  }, []);

  return (
    <Container>
      <SideBar>
        <SideBarItem
          title="Sort By"
          items={['Price', 'Sale', 'New Collection']}
        />
        <SideBarItem
          title="Size"
          items={['XS', 'S', 'M', 'L', 'XL', 'XXL']}
          addFilter={addFilter}
        />
        <SideBarItem
          title="Category"
          items={['Clothing', 'Shoes', 'Accessories', 'Women', 'Men', 'Kids']}
          addFilter={addFilter}
        />
      </SideBar>
    </Container>
  );
};

export default ProductsSideBar;
