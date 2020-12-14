import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, ProductOffer } from './styles';

import previousOrders from '../../../../MockData/previousOrders';
import api from '../../../../services/api';

interface Product {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
}

const NewCollectionProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    api
      .get('products', { params: { categories: 'new collection' } })
      .then(res => {
        const firstFourProducts = res.data.slice(0, 4);

        const serializedProducts = firstFourProducts.map((product: any) => {
          return {
            _id: product._id,
            name: product.name,
            price: product.price,
            imageUrl: product.items[0].productImages[0].imageUrl,
          };
        }) as Product[];

        setProducts(serializedProducts);
      });
  }, []);

  return (
    <>
      <Container>
        {products.length > 0 &&
          products.map(product => (
            <ProductOffer key={product._id}>
              <Link to={`/product-detail/${product._id}`}>
                <img src={product.imageUrl} alt="MK" />
                <strong>{product.name}</strong>
                <span>{`CA$${product.price}`}</span>
              </Link>
            </ProductOffer>
          ))}
      </Container>
    </>
  );
};

export default NewCollectionProducts;
