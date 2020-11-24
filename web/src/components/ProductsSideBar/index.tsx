import React, { useCallback, useState } from 'react';

import SideBarItem from './SideBarItem';

import { Container, SideBar } from './styles';

const ProductsSideBar: React.FC = () => {
  return (
    <Container>
      <SideBar>
        <SideBarItem
          title="Sort By"
          items={['Price', 'Sale', 'New Collection']}
          isSortBySection
        />
        <SideBarItem title="Size" items={['XS', 'S', 'M', 'L', 'XL', 'XXL']} />
        <SideBarItem
          title="Category"
          items={['Clothing', 'Shoes', 'Accessories', 'Women', 'Men', 'Kids']}
        />
      </SideBar>
    </Container>
  );
};

export default ProductsSideBar;
