import React, { createContext, useCallback, useEffect, useState } from 'react';
import api from '../services/api';

interface Product {
  id: number;
  items: Array<{
    color: string;
    sizeTag: string;
    quantity: number;
  }>;
}

interface CartContextData {
  items: Product[];
  addToCart(item: Omit<Product, 'quantity'>): void;
  increment(id: string): void;
  decrement(id: string): void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

const CartProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const { data } = await api.get('products');

      if (data) {
        setProducts(data);
      }
    }

    loadProducts();
  }, []);

  const addToCart = useCallback(
    async product => {
      const productExists = products.find(
        specificProduct => specificProduct.id === product.id,
      );

      if (productExists) {
        setProducts(
          products.map(specificProduct =>
            specificProduct === product.id
              ? { ...product, quantity: specificProduct.items.quantity + 1 }
              : specificProduct,
          ),
        );
      } else {
        setProducts([...products, { ...product, quantity: 1 }]);
      }

      await localStorage.setItem();
    },
    [products],
  );
};
