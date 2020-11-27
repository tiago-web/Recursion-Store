import React from 'react';
import Carousel from '../../../../components/Carousel';
import Button from '../../../../components/Button';

import {
  Container,
  CarouselContent,
  ProductDetailContent,
  Title,
  Colors,
  Sizes,
  AddToCart,
  Description,
} from './styles';

const ProductDetailContainer: React.FC = () => {
  return (
    <>
      <Container>
        <CarouselContent>
          <Carousel items={[]} height={800} />
        </CarouselContent>
        <ProductDetailContent>
          <Title>
            <h1>Dress V-shape</h1>
            <span>CA$499.99</span>
          </Title>
          <Colors>
            <strong>Colors</strong>
            <ul>
              <li id="red">
                <button type="button">XX</button>
              </li>
              <li id="blue">
                <button type="button">XX</button>
              </li>
              <li id="green">
                <button type="button">XX</button>
              </li>
              <li id="black">
                <button type="button">XX</button>
              </li>
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
          <AddToCart>
            <div className="quantity">
              Quantity
              <input name="qty" type="number" value="1" />
            </div>
            <Button>ADD TO CART</Button>
          </AddToCart>
          <Description>
            <strong>Description</strong>
            <p>
              Tenete ergo quod si servitus quae natura liber, et aliena tua tunc
              impeditur. Dolebis, et turbabuntur, et invenietis, cum culpa tam
              dis hominibusque. Quod si tibi tantum sit propria et aliena
            </p>
          </Description>
        </ProductDetailContent>
      </Container>
    </>
  );
};

export default ProductDetailContainer;
