import React from 'react';
import { FiHeart } from 'react-icons/fi';

import Carousel, { Item } from '../../components/Carousel';
import Navbar from '../../components/Navbar';

import {
  Section,
  CarouselContent,
  ProductDetailContent,
  Colors,
  Sizes,
} from './styles';

const ProductDetail: React.FC = () => {
  const items = [
    {
      id: 0,
      imageUrl:
        'https://digital.michaelkors.com/refreshes/2020/holiday/refresh1/global/desktop/homepage/HP_PROMO_11-1.jpg',
    },
    {
      id: 1,
      imageUrl:
        'https://digital.michaelkors.com/refreshes/2020/holiday/refresh1/global/desktop/homepage/HP_PROMO_11-1.jpg',
    },
    {
      id: 2,
      imageUrl:
        'https://digital.michaelkors.com/refreshes/2020/holiday/refresh1/global/desktop/homepage/HP_PROMO_11-1.jpg',
    },
    {
      id: 3,
      imageUrl:
        'https://digital.michaelkors.com/refreshes/2020/holiday/refresh1/global/desktop/homepage/HP_PROMO_11-1.jpg',
    },
  ] as Item[];

  return (
    <>
      <Navbar />
      <Section>
        <CarouselContent>
          <Carousel items={items} height={800} />
        </CarouselContent>
        <ProductDetailContent>
          <div className="title">
            <h1>Dress V-shape</h1>
            <FiHeart />
          </div>
          <span>CA$499.99</span>
          <Colors>
            <strong>Colors</strong>
            <ul>
              <li id="red" />
              <li id="blue" />
              <li id="green" />
              <li id="black" />
            </ul>
          </Colors>
          <Sizes>
            <strong>Sizes</strong>
            <ul>
              <li>
                <a href="/">XS</a>
              </li>
              <li>
                <a href="/">S</a>
              </li>
              <li>
                <a href="/">M</a>
              </li>
              <li>
                <a href="/">L</a>
              </li>
              <li>
                <a href="/">XL</a>
              </li>
              <li>
                <a href="/">XXL</a>
              </li>
            </ul>
          </Sizes>
        </ProductDetailContent>
      </Section>
    </>
  );
};

export default ProductDetail;
