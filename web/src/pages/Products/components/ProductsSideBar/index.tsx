import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { useAuth } from '../../../../contexts/AuthContext';
import { useProductsFilter } from '../../contexts/ProductsFilterContext';
import SideBarItem from './SideBarItem';
import AddIcon from '@material-ui/icons/Add';

import {
  Container,
  SideBar,
  AddNewProductLink,
  AddNewProductButton,
} from './styles';

interface RouteParams {
  filter?: string;
}

const sideBarSessions = [
  {
    title: 'Sort By',
    items: ['Lowest Price', 'Highest Price'],
    isSortBySection: true,
  },
  {
    title: 'Category',
    items: [
      'New Collection',
      'Clothing',
      'Shoes',
      'Accessories',
      'Women',
      'Men',
      'Kids',
    ],
    isSortBySection: false,
  },
  {
    title: 'Size',
    items: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'U'],
    isSortBySection: false,
  },
];

const ProductsSideBar: React.FC = () => {
  const { filter: urlFilter } = useParams<RouteParams>();
  const { removeAllFilters, addFilter } = useProductsFilter();
  const [isAdminUser, setIsAdminUser] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    if (urlFilter) {
      removeAllFilters();

      sideBarSessions.map(session => {
        const foundItem = session.items.find(
          item =>
            item.replace(/\s/g, '').toLocaleLowerCase() ===
            urlFilter.replace(/\s/g, '').toLocaleLowerCase(),
        );

        if (foundItem) addFilter(session.title, urlFilter);

        return false;
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urlFilter]);

  useEffect(() => {
    setIsAdminUser(user.permission === 'User' ? false : true);
  }, []);

  return (
    <Container>
      <SideBar>
        {isAdminUser && (
          <AddNewProductLink to="/admin/addproduct">
            <AddNewProductButton>
              <p>Add New Product</p>
              <AddIcon />
            </AddNewProductButton>
          </AddNewProductLink>
        )}
        {sideBarSessions.map(session => (
          <SideBarItem
            key={session.title}
            title={session.title}
            items={session.items}
            isSortBySection={session.isSortBySection}
            checkByDefault={urlFilter}
          />
        ))}
      </SideBar>
    </Container>
  );
};

export default ProductsSideBar;
