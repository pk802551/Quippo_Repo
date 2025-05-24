// WishlistContext.js
import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = async (vehicleId, userId) => {
    try {
      // Make the API call
      const response = await axios.post('http://localhost:8080/wishlist', {
  userId: userId,
  vehicleId: vehicleId,
});

      // Update local state if not already in wishlist
      setWishlist((prev) => {
        const safePrev = Array.isArray(prev) ? prev : [];
        return safePrev.some((i) => i.id === vehicleId.id) ? safePrev : [...safePrev, vehicleId];
      });
      console.log('Added to wishlist:', response.data);
    } catch (error) {
      console.error('Error adding to wishlist:', error);
    }
  };

  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
    // Optionally: Add API call here to remove from server if supported
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
