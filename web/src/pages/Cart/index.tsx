import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Divider } from '@material-ui/core';
import AlsoLikeList from '../../components/AlsoLikeList';
import Navbar from '../../components/Navbar';
import CarouselList from '../../components/CarouselList';

import Button from '../../components/Button';

import {
  Container,
  CartSection,
  CartContainer,
  YourCartContainer,
  CartItem,
  CartTotalContainer,
} from './styles';

interface Product {
  id: number;
  imageUrl: string;
  name: string;
  price: string;
}

interface Item {
  id: number;
  imageUrl: string;
  name: string;
  size: string;
  color: string;
  quantity: number;
  price: number;
  discount: boolean;
}

const Cart: React.FC = () => {
  // GET from db
  const products = [
    {
      id: 0,
      imageUrl:
        'https://digital.michaelkors.com/refreshes/2020/holiday/refresh1/global/desktop/homepage/HP_PROMO_11-1.jpg',
      name: 'Dress V-shape',
      price: 'CA$499.99',
    },
    {
      id: 1,
      imageUrl:
        'https://www.prada.com/content/dam/pradanux_products/2/291/291832/1WQ8F0002/291832_1WQ8_F0002_S_202_MDF.png/_jcr_content/renditions/cq5dam.web.white.800.1000.webp',
      name: 'Dress V-shape',
      price: 'CA$499.99',
    },
    {
      id: 2,
      imageUrl:
        'https://digital.michaelkors.com/refreshes/2020/holiday/refresh1/global/desktop/homepage/HP_PROMO_11-1.jpg',
      name: 'Dress V-shape',
      price: 'CA$499.99',
    },
    {
      id: 3,
      imageUrl:
        'https://digital.michaelkors.com/refreshes/2020/holiday/refresh1/global/desktop/homepage/HP_PROMO_11-1.jpg',
      name: 'Dress V-shape',
      price: 'CA$499.99',
    },
  ] as Product[];

  // GET from db
  const items = [
    {
      id: 0,
      imageUrl:
        'https://digital.michaelkors.com/refreshes/2020/holiday/refresh1/global/desktop/homepage/HP_PROMO_11-1.jpg',
      name: 'Dress V-shape',
      size: 'Medium',
      color: 'Green',
      quantity: 2,
      price: 99.99,
      discount: false,
    },
    {
      id: 1,
      imageUrl:
        'https://digital.michaelkors.com/refreshes/2020/holiday/refresh1/global/desktop/homepage/HP_PROMO_11-1.jpg',
      name: 'Dress V-shape',
      size: 'Large',
      color: 'Black',
      quantity: 2,
      price: 99.99,
      discount: true,
    },
    {
      id: 1,
      imageUrl:
        'https://digital.michaelkors.com/refreshes/2020/holiday/refresh1/global/desktop/homepage/HP_PROMO_11-1.jpg',
      name: 'Dress V-shape',
      size: 'Large',
      color: 'Black',
      quantity: 2,
      price: 99.99,
      discount: true,
    },
  ] as Item[];

  const [isCartEmpty, setIsCartEmpty] = useState(false);
  const [subTotal, setSubTotal] = useState(0);
  // setIsCartEmpty(true);

  return (
    <>
      <Navbar />
      <Container>
        <CartSection>
          <CartContainer>
            <YourCartContainer>
              <h1>Your Cart</h1>
              {isCartEmpty ? (
                <div className="emptyCart">
                  <strong>You have no items in your bag.</strong>
                  <span>
                    Don't know where to start? Here's our best sellers
                  </span>
                  <Button>
                    <Link to="/products">Best Sellers</Link>
                  </Button>
                </div>
              ) : (
                  items.map(item => (
                    <CartItem key={item.id}>
                      <div>
                        <img src={item.imageUrl} alt={item.name} />
                        <div>
                          <h2>{item.name}</h2>
                          <span>{item.size}</span>
                          <span>{item.color}</span>
                          <div className="quantity">
                            <span>{item.quantity} items</span>
                            <Button className="add">+</Button>
                            <Button className="rmv">-</Button>
                          </div>
                        </div>
                      </div>
                      <span>CA${item.price}</span>
                    </CartItem>
                  ))
                )}
            </YourCartContainer>
            <Divider orientation="vertical" flexItem />
            <CartTotalContainer>
              <span>Subtotal:</span>
              <h1>CA$199.98</h1>
              <Button>Checkout</Button>
              <form action="">
                <input type="text" placeholder="Enter Coupon" />
                <Button>Apply</Button>
              </form>
            </CartTotalContainer>
          </CartContainer>
        </CartSection>
        <CartSection>
          <h1>You also might like</h1>
          <AlsoLikeList />
          <CarouselList items={products} navButtonsAlwaysVisible height={420} />
        </CartSection>
      </Container>
    </>
  );
};

export default Cart;
