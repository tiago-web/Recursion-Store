import React from 'react';
import PreviousOrderCard, { TPreviousOrder } from './PreviousOrderCard';
import api from '../../../../services/api';

const previousOrders: TPreviousOrder[] = [
  {
    _id: '5fbd269a7743058d84a71728',
    status: 'In-Process',
    delivered: false,
    userId: {
      _id: '5fab0c16a6b3dc40e46ef245',
      firstName: 'Sergio',
      lastName: 'Sanchez',
      phone: '123',
      email: 's2@s.co',
    },
    shippingAddress: {
      address: '123 Eglinton Rd',
      country: 'Canada',
      state: 'Ontario',
      city: 'Toronto',
      postalCode: '1A2 B3C',
    },
    billingAddress: {
      address: '123 Eglinton Rd',
      country: 'Canada',
      state: 'Ontario',
      city: 'Toronto',
      postalCode: '1A2 B3C',
    },
    products: [
      {
        _id: '5fbd269a7743058d84a71729',
        productId: {
          _id: '5fbd22067743058d84a71726',
          name: 'Developer Sweater',
          price: 38.47,
          items: [
            {
              productImages: [
                {
                  image: '1a0b42ab44bbe73352f6-dev_sweater.jpg',
                  imageUrl:
                    'http://localhost:3333/files/1a0b42ab44bbe73352f6-dev_sweater.jpg',
                },
              ],
            },
          ],
        },
        items: [
          {
            _id: '5fbd269a7743058d84a7172a',
            color: 'Black',
            sizeTag: 'S',
            quantity: 4,
          },
          {
            _id: '5fbd269a7743058d84a7172b',
            color: 'Black',
            sizeTag: 'M',
            quantity: 2,
          },
        ],
        productPrice: 38.47,
      },
      {
        _id: '5fbd269a7743058d84a7172c',
        productId: {
          _id: '5fbd221e7743058d84a71727',
          name: 'Cashmere Scarf',
          price: 28.99,
          items: [
            {
              productImages: [
                {
                  image: 'c7fbca527592190d25cf-Cashmere-Scarf-Nepal.jpg',
                  imageUrl:
                    'http://localhost:3333/files/c7fbca527592190d25cf-Cashmere-Scarf-Nepal.jpg',
                },
              ],
            },
          ],
        },
        items: [
          {
            _id: '5fbd269a7743058d84a7172d',
            color: 'Gray',
            sizeTag: 'M',
            quantity: 5,
          },
        ],
        productPrice: 28.99,
      },
    ],
    total: 431,
    subTotal: 375.77,
    shippingPrice: 5.56,
    createdAt: '2020-11-24T15:28:26.021Z',
    updatedAt: '2020-11-24T15:28:26.021Z',
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
