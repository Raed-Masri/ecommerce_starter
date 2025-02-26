import React, { useEffect, useState } from "react";
import { Search, Heart, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";
import { auth } from "../lib/database";
import { onAuthStateChanged, signOut } from "firebase/auth";
const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe(); // Cleanup
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Logout failed", error);
    }
  };
  return (
    <div>
      <nav class="bg-white shadow-md">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-16">
            <div class="flex items-center">
              <a class="text-xl font-bold text-gray-800" href="/">
                ShopHub
              </a>
              <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
                <a
                  class="text-gray-900 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
                  href="/"
                >
                  Home
                </a>
                <a
                  class="text-gray-900 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
                  href="/categories"
                >
                  Categories
                </a>
                <a
                  class="text-gray-900 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
                  href="/contact"
                >
                  Contact
                </a>
              </div>
            </div>
            <div class="flex items-center space-x-4">
              <div class="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  class="w-64 px-4 py-1 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search
                  size={20} //equivalent to w-6 h-6
                  color="gray"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
              </div>
              <a class="text-gray-600 hover:text-gray-900" href="/favorites">
                <Heart
                  size={24}
                  color="currentColor"
                  className="lucide lucide-heart"
                />
              </a>
              <a
                class="text-gray-600 hover:text-gray-900 relative"
                href="/cart"
              >
                <ShoppingCart
                  size={24}
                  color="currentColor"
                  className="lucide lucide-shopping-cart"
                />
              </a>
              {/* <a class="text-gray-600 hover:text-gray-900" href="/sign-in">
                <User
                  size={24}
                  color="currentColor"
                  className="lucide lucide-user"
                />
              </a> */}
              {user ? (
                <div className="flex items-center space-x-2">
                  <span className="text-gray-700">{user.email}</span>
                  <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link
                  className="text-gray-600 hover:text-gray-900"
                  to="/sign-in"
                >
                  <User
                    size={24}
                    color="currentColor"
                    className="lucide lucide-user"
                  />
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
