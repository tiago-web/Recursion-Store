import React, { createContext, useCallback, useState, useContext } from 'react';

export interface Item {
  color: string;
  sizeTag: string;
  quantity: number;
}

interface Product {
  productId: string;
  items: Item[];
}

interface CartContextData {
  products: Product[];
  addToCart(productId: string, updatedItem: Item): void;
  updateItem(productId: string, updatedItem: Item): void;
  deleteItem(productId: string, updatedItem: Item): void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

const CartProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>(() => {
    const existentProducts = localStorage.getItem('@Recursion:products');

    if (existentProducts) return JSON.parse(existentProducts);

    return [];
  });

  const addToCart = useCallback(
    (productId: string, updatedItem: Item) => {
      const existentProduct = products.find(p => p.productId === productId);

      if (existentProduct) {
        const existentItem = existentProduct.items.find(
          item =>
            item.color === updatedItem.color &&
            item.sizeTag === updatedItem.sizeTag,
        );

        if (existentItem) {
          existentItem.quantity += updatedItem.quantity;
        } else {
          existentProduct.items.push(updatedItem);
        }

        localStorage.setItem('@Recursion:products', JSON.stringify(products));

        setProducts(products);
      } else {
        const newProduct = {
          productId,
          items: [updatedItem],
        };

        localStorage.setItem(
          '@Recursion:products',
          JSON.stringify([...products, newProduct]),
        );

        setProducts([...products, newProduct]);
      }
    },
    [products],
  );

  const updateItem = useCallback(
    (productId: string, updatedItem: Item) => {
      const newProductsArray = [...products];

      const product = products.find(p => p.productId === productId);

      if (product) {
        const updatedItems = product.items.map(item =>
          item.color === updatedItem.color &&
            item.sizeTag === updatedItem.sizeTag
            ? updatedItem
            : item,
        );

        product.items = updatedItems;

        localStorage.setItem('@Recursion:products', JSON.stringify(products));

        setProducts(products);
      }
    },
    [products],
  );

  const deleteItem = useCallback(
    (productId: string, updatedItem: Item) => {
      const newProductsArray = [...products];

      const product = newProductsArray.find(p => p.productId === productId);

      if (product) {
        const updatedItems = product.items.filter(
          item =>
            item.color !== updatedItem.color ||
            item.sizeTag !== updatedItem.sizeTag,
        );

        if (updatedItems.length === 0) {
          const restProducts = newProductsArray.filter(
            p => p.productId !== productId,
          );

          localStorage.setItem(
            '@Recursion:products',
            JSON.stringify(restProducts),
          );
          setProducts(restProducts);
        } else {
          product.items = updatedItems;

          console.log(updatedItems);

          localStorage.setItem(
            '@Recursion:products',
            JSON.stringify(newProductsArray),
          );
          setProducts(newProductsArray);
        }
      }
    },
    [products],
  );

  return (
    <CartContext.Provider
      value={{ products, addToCart, updateItem, deleteItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = (): CartContextData => {
  const context = useContext(CartContext);

  return context;
};

export { CartProvider, useCart };
