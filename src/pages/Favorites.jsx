import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { auth } from "../lib/database";
import { onAuthStateChanged } from "firebase/auth";
import { initialProducts } from "../lib/data";
const Favorites = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);

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
                  <div
                    key={product.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                  >
                    <div className="relative h-48">
                      <img
                        src={product.image_url}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold">
                          ${product.price.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
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
