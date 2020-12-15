import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import api from '../../services/api';

import ProductDetailContainer from './components/ProductDetailContainer';
import ProductReviewsContainer from './components/ProductReviewsContainer';

import { Section } from './styles';

interface RouteParams {
  productId: string;
}

export interface Review {
  _id: string;
  title: string;
  body: string;
  createdAt: string;
  createdBy: string;
  userInteractions: Array<{
    action: string;
    userId: string;
  }>;
}

export interface ImagesProps {
  id: string;
  imageUrl: string;
}

export interface ItemProps {
  color: string;
  imageColor: string; // HEX
  productImages: ImagesProps[];
  sizes: Array<{
    sizeTag: string;
    quantity: number;
  }>;
}

export interface Product {
  _id: string;
  reviews: Review[];
  items: ItemProps[];
  name: string;
  price: number;
  description: string;
}

const ProductDetail: React.FC = () => {
  const { productId } = useParams<RouteParams>(); // THE PRODUCT ID IS ON THIS VARIABLE
  const [product, setProduct] = useState<Product>({} as Product);
  // const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    async function loadProduct(): Promise<void> {
      const response = await api.get(`products/${productId}`);

      setProduct(response.data);
    }

    loadProduct();
  }, [productId]);

  const handleDeleteReview = useCallback(
    async (reviewId: string) => {
      try {
        await api.delete(`reviews/${reviewId}`, { data: { productId } });

        // Arrumei :)
        setProduct(prevState => ({
          ...prevState,
          reviews: prevState.reviews.filter(
            review => String(review._id) !== reviewId,
          ),
        }));
      } catch (err) {
        console.log(err);
      }
    },
    [productId],
  );

  return (
    <>
      {Object.keys(product).length > 0 ? (
        <>
          <Section>
            <ProductDetailContainer productId={productId} product={product} />
          </Section>
          <ProductReviewsContainer
            productId={productId}
            reviews={product.reviews}
            handleDeleteReview={handleDeleteReview}
          />
        </>
      ) : (
          <h1>Loading...</h1>
        )}
    </>
  );
};

export default ProductDetail;
