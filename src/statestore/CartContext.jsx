import React, { createContext, useState, useContext } from "react";

// Create the Cart Context
const CartContext = createContext();

// Custom Hook to use the CartContext easily
export const useCart = () => {
  return useContext(CartContext);
};

// CartProvider to wrap around components that need cart state
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add items to cart
  const addToCart = (course) => {
    setCartItems((prevItems) => {
      // Check if the course already exists in the cart
      const itemExists = prevItems.find((item) => item.id === course.id);
      if (itemExists) {
        return prevItems.map((item) =>
          item.id === course.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...course, quantity: 1 }];
    });
  };

  // Function to remove items from the cart
  const removeFromCart = (courseId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== courseId)
    );
  };

  // Function to clear the cart
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
