import React, { useEffect, useState } from 'react';
import api from '../../../../services/api';
// import { useProductsFilter } from '../../../../contexts/ProductsFilterContext';
// import { useSortBy } from '../../../../contexts/SortByContext';

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
  // const { filters } = useProductsFilter();
  // const { sortBy } = useSortBy();

  useEffect(() => {
    setProductsFound(products.length > 0);
  }, [products]);

  // useEffect(() => {
  //   console.log(filters);
  // }, [filters]);

  // useEffect(() => {
  //   console.log(sortBy);
  // }, [sortBy]);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const response = await api.get('products');

      setProducts(response.data);
    }

    loadProducts();
  }, []);

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
