import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';

import { Container, Form } from './styles';

import Button from '../../components/Button';
import api from '../../services/api';
import { ProductImage } from '../Products/components/ProductList/ProductCard/styles';

interface RouteParams {
  productId: string;
}

export interface ProductImage {
  imageUrl: string;
}

export interface Item {
  color: string;
  productImages: ProductImage[];
}

export interface Product {
  _id: string;
  name: string;
  items: Item[];
}

export interface ReviewFormData {
  productId: string;
  title: string;
  body: string;
}

const ProductReview: React.FC = () => {
  const { productId } = useParams<RouteParams>(); // THE PRODUCT ID IS ON THIS VARIABLE
  const history = useHistory();

  const [product, setProduct] = useState<Product>();
  const [image, setImage] = useState('');

  useEffect(() => {
    async function loadProduct(): Promise<void> {
      const response = await api.get(`products/${productId}`);

      setProduct(response.data);

      if (product) setImage(product.items[0].productImages[0].imageUrl);
    }

    loadProduct();
  }, [productId, image, product]);

  const handleSubmit = useCallback(() => {
    history.push(`/product-detail/${productId}`);
  }, [productId, history]);

  const handleGoBack = useCallback(() => {
    history.push('/products');
  }, [history]);

  return (
    <>
      <Navbar />
      <Container>
        {product ? (
          <>
            <h1>
              Write a review for <span>{product?.name}</span>
            </h1>
            <div className="form">
              <img src={image} alt="Dress" />
              <Form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder="Title" /> {/* Title to api */}
                <textarea placeholder="Review" cols={4} rows={18} />
                {/* Body to api */}
                <Button type="submit">SEND</Button>
              </Form>
            </div>
          </>
        ) : (
            <>
              <h1>Product not found!</h1>
              <Button onClick={handleGoBack} id="go-back">
                Go back
            </Button>
            </>
          )}
      </Container>
    </>
  );
};

export default ProductReview;
