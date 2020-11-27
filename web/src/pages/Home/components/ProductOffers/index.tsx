import React from 'react';
import { Link } from 'react-router-dom';

import { Container, ProductOffer } from './styles';

import previousOrders from '../../../../MockData/previousOrders';

const ProductOffers: React.FC = () => {
  return (
    <>
      <Container>
        {previousOrders.map(prevOrder =>
          prevOrder.products.map(product => (
            <ProductOffer key={prevOrder._id}>
              <Link to={`product-detail/${product._id}`}>
                <img
                  src={product.productId.items[0].productImages[0].imageUrl}
                  alt="MK"
                />
                <strong>{product.productId.name}</strong>
                <span>{`CA$${product.productPrice}`}</span>
              </Link>
            </ProductOffer>
          )),
        )}
        {/* <ProductOffer>
          <Link to="product-detail">
            <img
              src="https://digital.michaelkors.com/refreshes/2020/holiday/refresh1/global/desktop/homepage/HP_PROMO_11-1.jpg"
              alt="MK"
            />
            <strong>Dress V-shape</strong>
            <span>CA$499.99</span>
          </Link>
        </ProductOffer>
        <ProductOffer>
          <Link to="product-detail">
            <img
              src="https://digital.michaelkors.com/refreshes/2020/holiday/refresh1/global/desktop/homepage/HP_PROMO_11-1.jpg"
              alt="MK"
            />
            <strong>Dress V-shape</strong>
            <span>CA$499.99</span>
          </Link>
        </ProductOffer>
        <ProductOffer>
          <Link to="product-detail">
            <img
              src="https://digital.michaelkors.com/refreshes/2020/holiday/refresh1/global/desktop/homepage/HP_PROMO_11-1.jpg"
              alt="MK"
            />
            <strong>Dress V-shape</strong>
            <span>CA$499.99</span>
          </Link>
        </ProductOffer>
        <ProductOffer>
          <Link to="product-detail">
            <img
              src="https://digital.michaelkors.com/refreshes/2020/holiday/refresh1/global/desktop/homepage/HP_PROMO_11-1.jpg"
              alt="MK"
            />
            <strong>Dress V-shape</strong>
            <span>CA$499.99</span>
          </Link>
        </ProductOffer> */}
      </Container>
    </>
  );
};

export default ProductOffers;
