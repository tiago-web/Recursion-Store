import React from 'react';
import { FiHeart, FiThumbsDown, FiThumbsUp } from 'react-icons/fi';
import { Link, useParams } from 'react-router-dom';

import Carousel, { Item } from '../../components/Carousel';
import Navbar from '../../components/Navbar';
import Button from '../../components/Button';

import {
  Section,
  ProductDetailContainer,
  CarouselContent,
  ProductDetailContent,
  Colors,
  Sizes,
  AddToCart,
  Description,
  ReviewsContainer,
  ReviewsHeaderContent,
  ReviewsBodyContent,
} from './styles';

interface RouteParams {
  productId: string;
}

const ProductDetail: React.FC = () => {
  const { productId } = useParams<RouteParams>(); // THE PRODUCT ID IS ON THIS VARIABLE

  // useEffect(() => {
  //   console.log(productId);
  // }, []);

  const items = [
    {
      id: 0,
      imageUrl:
        'https://digital.michaelkors.com/refreshes/2020/holiday/refresh1/global/desktop/homepage/HP_PROMO_11-1.jpg',
    },
    {
      id: 1,
      imageUrl:
        'https://www.prada.com/content/dam/pradanux_products/2/291/291832/1WQ8F0002/291832_1WQ8_F0002_S_202_MDF.png/_jcr_content/renditions/cq5dam.web.white.800.1000.webp',
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
        <ProductDetailContainer>
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
                Tenete ergo quod si servitus quae natura liber, et aliena tua
                tunc impeditur. Dolebis, et turbabuntur, et invenietis, cum
                culpa tam dis hominibusque. Quod si tibi tantum sit propria et
                aliena
              </p>
            </Description>
          </ProductDetailContent>
        </ProductDetailContainer>
      </Section>

      {/* <Section> */}
      <ReviewsContainer>
        <ReviewsHeaderContent>
          <h1>Reviews</h1>
          <Button>READ ALL REVIEWS</Button>
          <Link to="/product/review">WRITE A REVIEW</Link>
        </ReviewsHeaderContent>
        <ReviewsBodyContent id="reviews-body-content">
          <h1>Most Relevant</h1>
          <div className="review">
            <div className="userInfo">
              <span>Sergio</span>
              <span>Address</span>
              <span>Date</span>
            </div>
            <div className="reviewBody">
              <strong>Title of the review</strong>
              <p>
                Tenete ergo quod si servitus quae natura liber, et aliena tua
                tunc impeditur. Dolebis, et turbabuntur, et invenietis, cum
                culpa tam dis hominibusque. Quod si tibi tantum sit propria et
                aliena
              </p>
              <div className="likes">
                <button type="button">
                  <FiThumbsUp size={18} color="#909ea9" />
                </button>
                <span>3900</span>
                <button type="button">
                  <FiThumbsDown size={18} color="#909ea9" />
                </button>
                <span>2</span>
              </div>
            </div>
          </div>

          <div className="review">
            <div className="userInfo">
              <span>Sergio</span>
              <span>Address</span>
              <span>Date</span>
            </div>
            <div className="reviewBody">
              <strong>Title of the review</strong>
              <p>
                Tenete ergo quod si servitus quae natura liber, et aliena tua
                tunc impeditur. Dolebis, et turbabuntur, et invenietis, cum
                culpa tam dis hominibusque. Quod si tibi tantum sit propria et
                aliena
              </p>
              <div className="likes">
                <button type="button">
                  <FiThumbsUp size={18} color="#909ea9" />
                </button>
                <span>3900</span>
                <button type="button">
                  <FiThumbsDown size={18} color="#909ea9" />
                </button>
                <span>2</span>
              </div>
            </div>
          </div>

          <div className="review">
            <div className="userInfo">
              <span>Sergio</span>
              <span>Address</span>
              <span>Date</span>
            </div>
            <div className="reviewBody">
              <strong>Title of the review</strong>
              <p>
                Tenete ergo quod si servitus quae natura liber, et aliena tua
                tunc impeditur. Dolebis, et turbabuntur, et invenietis, cum
                culpa tam dis hominibusque. Quod si tibi tantum sit propria et
                aliena
              </p>
              <div className="likes">
                <button type="button">
                  <FiThumbsUp size={18} color="#909ea9" />
                </button>
                <span>3900</span>
                <button type="button">
                  <FiThumbsDown size={18} color="#909ea9" />
                </button>
                <span>2</span>
              </div>
            </div>
          </div>
        </ReviewsBodyContent>
      </ReviewsContainer>
      {/* </Section> */}
    </>
  );
};

export default ProductDetail;
