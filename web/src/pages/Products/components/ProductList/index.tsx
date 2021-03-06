import React, { useEffect, useState } from 'react';
import api from '../../../../services/api';
import { useProductsFilter } from '../../contexts/ProductsFilterContext';
import { useSortBy } from '../../contexts/SortByContext';
import ProductCard from './ProductCard';

import { Title, Container, Products, NoFoundProducts } from './styles';

export interface ItemProps {
  color: string;
  imageColor: string; // HEX
  productImages: Array<{
    imageUrl: string;
  }>;
  sizes: Array<{
    sizeTag: string;
    quantity: number;
  }>;
}

export interface Product {
  _id: string;
  items: ItemProps[];
  name: string;
  price: number;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [productsFound, setProductsFound] = useState(false);

  const { filters } = useProductsFilter();
  const { sortBy } = useSortBy();

  useEffect(() => {
    setProductsFound(products.length > 0);
  }, [products]);

  useEffect(() => {
    const categories = filters
      .find(filter => filter.sessionTitle === 'Category')
      ?.filterNames.join(',');

    const sizes = filters
      .find(filter => filter.sessionTitle === 'Size')
      ?.filterNames.join(',');

    api
      .get('products', {
        params: {
          categories,
          sizes,
        },
      })
      .then(response => setProducts(response.data));
  }, [filters]);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const response = await api.get('products');

      setProducts(response.data);
    }

    loadProducts();
  }, []);

  useEffect(() => {
    if (sortBy && sortBy !== '') {
      const newArray = [...products];

      switch (sortBy) {
        case 'Lowest Price':
          newArray.sort((a, b) => a.price - b.price);
          break;
        case 'Highest Price':
          newArray.sort((a, b) => b.price - a.price);
          break;
        default:
          break;
      }

      setProducts(newArray);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortBy]);

  return (
    <Container>
      <Title>Products</Title>
      <Products productsFound={productsFound}>
        {productsFound ? (
          products.map(product => (
            <ProductCard
              key={product.name}
              productId={product._id}
              name={product.name}
              items={product.items}
              price={product.price}
            />
          ))
        ) : (
          <NoFoundProducts>No products were found.</NoFoundProducts>
        )}
      </Products>
    </Container>
  );
};

export default ProductList;
