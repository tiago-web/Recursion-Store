import React from 'react';
import { Link } from 'react-router-dom';

import { Container, ProductOffer } from './styles';

import previousOrders from '../../../../MockData/previousOrders';

const ProductOffers: React.FC = () => {
  return (
    <>
      <Container>
        {previousOrders.map(prevOrder =>
          prevOrder.products.slice(0, 4).map(product => (
            <ProductOffer key={prevOrder._id}>
              <Link to="products">
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
      </Container>
    </>
  );
};

export default ProductOffers;
