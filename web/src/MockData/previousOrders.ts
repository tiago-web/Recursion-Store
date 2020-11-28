import { TPreviousOrder } from '../pages/User/components/PreviousOrders/PreviousOrderCard';

const previousOrders: TPreviousOrder[] = [
  {
    _id: '5fbd269a7743058d84a71728',
    status: 'In-Process',
    delivered: false,
    userId: {
      _id: '5fab0c16a6b3dc40e46ef245',
      firstName: 'Sergio',
      lastName: 'Sanchez',
      phone: '978 456 6512',
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
          items: [
            {
              productImages: [
                {
                  image: 'il_1140xN.2102609728_mzgn.jpg',
                  imageUrl:
                    'https://i.etsystatic.com/10157633/r/il/9c3c97/2102609728/il_1140xN.2102609728_mzgn.jpg',
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
            quantity: 1,
          },
        ],
        productPrice: 38.47,
      },
      {
        _id: '5fbd269a7743058d84a7172c',
        productId: {
          _id: '5fbd221e7743058d84a71727',
          name: 'Cashmere Scarf',
          items: [
            {
              productImages: [
                {
                  image:
                    'Handmade-Handloom-Cashmere-Scarf-Nepal-76d2f717-287c-42fc-a565-9cca9d676dc7_600.jpg',
                  imageUrl:
                    'https://ak1.ostkcdn.com/images/products/30303059/Handmade-Handloom-Cashmere-Scarf-Nepal-76d2f717-287c-42fc-a565-9cca9d676dc7_600.jpg?impolicy=medium',
                },
              ],
            },
          ],
        },
        items: [
          {
            _id: '5fbd269a7743058d84a7172d',
            color: 'Gray',
            sizeTag: 'U',
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
  {
    _id: '5fbd269a7743058d84a71728',
    status: 'In-Process',
    delivered: false,
    userId: {
      _id: '5fab0c16a6b3dc40e46ef245',
      firstName: 'Sergio',
      lastName: 'Sanchez',
      phone: '978 456 6512',
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
          items: [
            {
              productImages: [
                {
                  image: 'il_1140xN.2102609728_mzgn.jpg',
                  imageUrl:
                    'https://i.etsystatic.com/10157633/r/il/9c3c97/2102609728/il_1140xN.2102609728_mzgn.jpg',
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
          items: [
            {
              productImages: [
                {
                  image:
                    'Handmade-Handloom-Cashmere-Scarf-Nepal-76d2f717-287c-42fc-a565-9cca9d676dc7_600.jpg',
                  imageUrl:
                    'https://ak1.ostkcdn.com/images/products/30303059/Handmade-Handloom-Cashmere-Scarf-Nepal-76d2f717-287c-42fc-a565-9cca9d676dc7_600.jpg?impolicy=medium',
                },
              ],
            },
          ],
        },
        items: [
          {
            _id: '5fbd269a7743058d84a7172d',
            color: 'Gray',
            sizeTag: 'U',
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

export default previousOrders;
