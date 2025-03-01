// useFavorites.js
import { useState } from "react";

const useFavorites = () => {
  // Initialize favorites state from localStorage
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  // Function to toggle a product's favorite status
  const toggleFavorite = (productId) => {
    const updatedFavorites = favorites.includes(productId)
      ? favorites.filter((id) => id !== productId) // Remove if already favorited
      : [...favorites, productId]; // Add if not favorited

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return { favorites, toggleFavorite };
};

export default useFavorites;