import React, { FormEvent, useCallback, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { useToast } from '../../contexts/ToastContext';

import Navbar from '../../components/Navbar';
import Button from '../../components/Button';

import api from '../../services/api';

import { Container, Form } from './styles';
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
  title: string;
  body: string;
}

const ProductReview: React.FC = () => {
  const { productId } = useParams<RouteParams>(); // THE PRODUCT ID IS ON THIS VARIABLE
  const history = useHistory();

  const [product, setProduct] = useState<Product>();
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [bodyError, setBodyError] = useState(false);

  useEffect(() => {
    async function loadProduct(): Promise<void> {
      const response = await api.get(`products/${productId}`);

      setProduct(response.data);

      if (product) setImage(product.items[0].productImages[0].imageUrl);
    }

    loadProduct();
  }, [productId, image, product]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();

    if (!title && !body) {
      setTitleError(true);
      setBodyError(true);
      return;
    }
    if (!title) {
      setTitleError(true);
      setBodyError(false);
      return;
    }
    if (!body) {
      setTitleError(false);
      setBodyError(true);
      return;
    }

    setTitleError(false);
    setBodyError(false);

    const data = {
      productId,
      title,
      body,
    };

    await api.post('reviews', data);

    history.push(`/product-detail/${productId}`);
  }

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
              <Form onSubmit={handleSubmit}>
                <input
                  className={titleError ? 'error' : ''}
                  type="text"
                  placeholder="Title"
                  name="title"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                />{' '}
                <textarea
                  className={bodyError ? 'error' : ''}
                  placeholder="Review"
                  name="body"
                  cols={4}
                  rows={18}
                  value={body}
                  onChange={e => setBody(e.target.value)}
                />
                <Button type="submit">SEND</Button>
              </Form>
            </div>
          </>
        ) : (
            <Button>
              <h1>Product not found!</h1>
              <Button onClick={handleGoBack} id="go-back">
                Go back
            </Button>
            </Button>
          )}
      </Container>
    </>
  );
};

export default ProductReview;
