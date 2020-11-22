import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import SideBarItem from './SideBarItem';

import { SideBar } from './styles';

const ProductsSideBar: React.FC = () => {
  return (
    <SideBar>
      <SideBarItem title="Sort By">
        <ul>
          <li>
            <FormControlLabel
              control={<Checkbox name="price" color="primary" />}
              label="Price"
            />
          </li>
          <li>
            <FormControlLabel
              control={<Checkbox name="sale" color="primary" />}
              label="Sale"
            />
          </li>
          <li>
            <FormControlLabel
              control={<Checkbox name="newCollection" color="primary" />}
              label="New Collection"
            />
          </li>
        </ul>
      </SideBarItem>
      <SideBarItem title="Size">
        <ul>
          <li>
            <FormControlLabel
              control={<Checkbox name="xs" color="primary" />}
              label="XS"
            />
          </li>
          <li>
            <FormControlLabel
              control={<Checkbox name="s" color="primary" />}
              label="S"
            />
          </li>
          <li>
            <FormControlLabel
              control={<Checkbox name="m" color="primary" />}
              label="M"
            />
          </li>
          <li>
            <FormControlLabel
              control={<Checkbox name="l" color="primary" />}
              label="L"
            />
          </li>
          <li>
            <FormControlLabel
              control={<Checkbox name="xl" color="primary" />}
              label="XL"
            />
          </li>
          <li>
            <FormControlLabel
              control={<Checkbox name="xxl" color="primary" />}
              label="XXL"
            />
          </li>
        </ul>
      </SideBarItem>
      <SideBarItem title="Category">
        <ul>
          <li>
            <FormControlLabel
              control={<Checkbox name="clothing" color="primary" />}
              label="Clothing"
            />
          </li>
          <li>
            <FormControlLabel
              control={<Checkbox name="shoes" color="primary" />}
              label="Shoes"
            />
          </li>
          <li>
            <FormControlLabel
              control={<Checkbox name="accessories" color="primary" />}
              label="Accessories"
            />
          </li>
          <li>
            <FormControlLabel
              control={<Checkbox name="women" color="primary" />}
              label="Women"
            />
          </li>
          <li>
            <FormControlLabel
              control={<Checkbox name="men" color="primary" />}
              label="Men"
            />
          </li>
          <li>
            <FormControlLabel
              control={<Checkbox name="kids" color="primary" />}
              label="Kids"
            />
          </li>
        </ul>
      </SideBarItem>
      <button type="button">Apply</button>
    </SideBar>
  );
};

export default ProductsSideBar;
