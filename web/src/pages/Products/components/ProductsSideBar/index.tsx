import React from 'react';

import SideBarItem from './SideBarItem';

import { Container, SideBar } from './styles';

const ProductsSideBar: React.FC = () => {
  return (
    <Container>
      <SideBar>
        <SideBarItem
          title="Sort By"
          items={['Lowest Price', 'Highest Price']}
          isSortBySection
        />
        <SideBarItem
          title="Category"
          items={[
            'New Collection',
            'Clothing',
            'Shoes',
            'Accessories',
            'Women',
            'Men',
            'Kids',
          ]}
        />
        <SideBarItem
          title="Size"
          items={['XS', 'S', 'M', 'L', 'XL', 'XXL', 'U']}
        />
      </SideBar>
    </Container>
  );
};

export default ProductsSideBar;
