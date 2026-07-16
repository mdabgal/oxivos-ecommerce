'use client';

import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);


  useEffect(() => {
    const savedCart = localStorage.getItem('oxivos_cart');
    const savedWishlist = localStorage.getItem('oxivos_wishlist');
    if (savedCart) setCart(JSON.parse(savedCart));
    if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
  }, []);

  const addToCart = (product, color, size) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) => item.id === product.id && item.selectedColor === color && item.selectedSize === size
      );

      let updatedCart;
      if (existingIndex > -1) {
        updatedCart = [...prevCart];
        updatedCart[existingIndex].quantity += 1;
      } else {
        updatedCart = [...prevCart, { ...product, selectedColor: color, selectedSize: size, quantity: 1 }];
      }
      localStorage.setItem('oxivos_cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const removeFromCart = (id, color, size) => {
    const updatedCart = cart.filter(
      (item) => !(item.id === id && item.selectedColor === color && item.selectedSize === size)
    );
    setCart(updatedCart);
    localStorage.setItem('oxivos_cart', JSON.stringify(updatedCart));
  };

  const updateQuantity = (id, color, size, amount) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id && item.selectedColor === color && item.selectedSize === size) {
        const newQty = item.quantity + amount;
        return { ...item, quantity: newQty < 1 ? 1 : newQty };
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem('oxivos_cart', JSON.stringify(updatedCart));
  };

  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      const updated = exists ? prev.filter((item) => item.id !== product.id) : [...prev, product];
      localStorage.setItem('oxivos_wishlist', JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <CartContext.Provider value={{ cart, wishlist, addToCart, removeFromCart, updateQuantity, toggleWishlist }}>
      {children}
    </CartContext.Provider>
  );
}