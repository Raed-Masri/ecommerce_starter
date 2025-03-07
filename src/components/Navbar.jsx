import  { useEffect, useState } from "react";
import { Search, Heart, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";
import { auth } from "../lib/database";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useCart } from "./CartContext";
const Navbar = () => {
  const [user, setUser] = useState(null);
  const { cart } = useCart();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe(); 
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
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a className="text-xl font-bold text-gray-800" href="/">
                ShopHub
              </a>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <a
                  className="text-gray-900 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
                  href="/"
                >
                  Home
                </a>
                <a
                  className="text-gray-900 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
                  href="/categories"
                >
                  Categories
                </a>
                <a
                  className="text-gray-900 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
                  href="/contact"
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-64 px-4 py-1 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search
                  size={20} //equivalent to w-6 h-6
                  color="gray"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
              </div>
              <a className="text-gray-600 hover:text-gray-900" href="/favorites">
                <Heart
                  size={24}
                  color="currentColor"
                  className="lucide lucide-heart"
                />
              </a>
              <Link
                className="text-gray-600 hover:text-gray-900 relative"
                to="/cart"
              >
                <ShoppingCart
                  size={24}
                  color="currentColor"
                  className="lucide lucide-shopping-cart"
                />
                {cart.length > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
                    {cart.length}
                  </span>
                )}
              </Link>
              
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
