import React from 'react';
import AddIcon from '@material-ui/icons/Add';

import { SideBar, SideBarBtn } from './styles';

const ProductsSideBar: React.FC = () => {
  return (
    <SideBar>
      <SideBarBtn>
        Sort by
        <AddIcon />
      </SideBarBtn>
    </SideBar>
  );
};

export default ProductsSideBar;
