import React from 'react';

import SideBarItem from './SideBarItem';

import { SideBar } from './styles';

const ProductsSideBar: React.FC = () => {
  return (
    <SideBar>
      <SideBarItem
        title="Sort By"
        items={['Price', 'Sale', 'New Collection']}
      />
      <SideBarItem title="Size" items={['XS', 'S', 'M', 'L', 'XL', 'XXL']} />
      <SideBarItem
        title="Category"
        items={['Clothing', 'Shoes', 'Accessories', 'Women', 'Men', 'Kids']}
      />

      <button type="button">Apply</button>
    </SideBar>
  );
};

export default ProductsSideBar;
