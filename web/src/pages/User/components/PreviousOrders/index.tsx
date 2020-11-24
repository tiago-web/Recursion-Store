import React from 'react';
import PreviousOrderCard, { TPreviousOrder } from './PreviousOrderCard';

const previousOrders: TPreviousOrder[] = [
  {
    _id: 32123131,
    userId: {
      _id: 'asiduh13287d32j9',
      firstName: 'Sergio',
      lastName: 'Sanchez',
      email: 'sergio@sanchez.com',
      phone: '987 654 3214',
    },
    total: 321.15,
    subTotal: 299.98,
    shippingPrice: 4.35,
    status: 'In-Process',
    delivered: false,
    products: [
      {
        productId: 'as8dh3398jd98en2938',
        productPrice: 12.59,
        items: [
          {
            color: 'Blue',
            sizeTag: 'M',
            quantity: 2,
          },
          {
            color: 'Gray',
            sizeTag: 'L',
            quantity: 3,
          },
        ],
      },
    ],
    shippingAddress: {
      address: '123 Ellesmere Rd',
      country: 'Canada',
      state: 'Ontario',
      city: 'Toronto',
      postalCode: 'M1D 5G6',
    },
    billingAddress: {
      address: '123 Ellesmere Rd',
      country: 'Canada',
      state: 'Ontario',
      city: 'Toronto',
      postalCode: 'M1D 5G6',
    },
    createdAt: 'August 10, 2020',
  },
];

const PreviousOrders: React.FC = () => {
  return (
    <>
      {/* <h2>Orders History</h2> */}
      {previousOrders.map(order => (
        <PreviousOrderCard key={order._id} order={order} />
      ))}
    </>
  );
};

export default PreviousOrders;
