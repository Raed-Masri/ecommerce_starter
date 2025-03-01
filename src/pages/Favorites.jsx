import React, { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { auth } from "../lib/database";
import { onAuthStateChanged } from "firebase/auth";
import { initialProducts } from "../lib/data";
import useFavorites from "../components/useFavorite";
import ProductCard from "../components/ProductCard";
const Favorites = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const { favorites, toggleFavorite } = useFavorites();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  const handleSignInClick = () => {
    navigate("/sign-in");
  };

  const favoriteProducts = initialProducts.filter((product) =>
    favorites.includes(product.id)
  );

  return (
    <>
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {user ? (
            // If user is signed in, show favorite items
            <div className="text-center">
              <Heart size={48} color="red" className="mx-auto" />
              <h2 className="mt-2 text-lg font-medium text-gray-900">
                Your Favorite Items
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Here are the items you've marked as favorite.
              </p>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {favoriteProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    toggleFavorite={toggleFavorite}
                    isFavorite={favorites.includes(product.id)}
                  />
                ))}
              </div>
            </div>
          ) : (
            // If user is NOT signed in, show sign-in prompt
            <div className="text-center">
              <Heart size={48} color="gray" className="mx-auto text-gray-400" />
              <h2 className="mt-2 text-lg font-medium text-gray-900">
                Sign in to view your favorites
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                You need to be signed in to manage your favorite items.
              </p>
              <div className="mt-6">
                <button
                  onClick={handleSignInClick}
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Sign In
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Favorites;
