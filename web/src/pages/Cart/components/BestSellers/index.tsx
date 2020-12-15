import React, { useEffect, useState } from 'react';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import { Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import {
  Container,
  Carousel,
  SlideItem,
  SlideImage,
  ProductName,
  ProductPrice,
  CustomButtonBack,
  CustomButtonNext,
} from './styles';
import api from '../../../../services/api';
import formatToDollars from '../../../../utils/formatToDollars';
import { Link } from 'react-router-dom';

interface Product {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
}

const BestSellers: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    api
      .get('products', { params: { categories: 'new collection' } })
      .then(res => {
        const firstEightProducts = res.data.slice(0, 8);

        const serializedProducts = firstEightProducts.map((product: any) => {
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
    <Container id="best-sellers">
      <Carousel
        visibleSlides={3}
        totalSlides={8}
        step={1}
        naturalSlideWidth={350}
        naturalSlideHeight={500}
      >
        <Slider>
          {products.map((product, index) => (
            <Slide key={product._id} index={index}>
              <SlideItem>
                <Link to={`/product-detail/${product._id}`}>
                  <SlideImage
                    style={{
                      backgroundImage: `url(${product.imageUrl})`,
                    }}
                  />
                </Link>

                <ProductName to={`/product-detail/${product._id}`}>
                  {product.name}
                </ProductName>

                <ProductPrice>{formatToDollars(product.price)}</ProductPrice>
              </SlideItem>
            </Slide>
          ))}
        </Slider>
        <CustomButtonBack>
          <NavigateBeforeIcon />
        </CustomButtonBack>
        <CustomButtonNext>
          <NavigateNextIcon />
        </CustomButtonNext>
      </Carousel>
    </Container>
  );
};

export default BestSellers;
