import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Favorites = () => {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate("/sign-in");
  };
  return (
    <>
      <Navbar />
      <main class="flex-grow">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div class="text-center">
            <Heart size={48} color="gray" className="mx-auto text-gray-400" />
            <h2 class="mt-2 text-lg font-medium text-gray-900">
              Sign in to view your favorites
            </h2>
            <p class="mt-1 text-sm text-gray-500">
              You need to be signed in to manage your favorite items.
            </p>
            <div class="mt-6">
              <button
                onClick={handleSignInClick}
                class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Favorites;
