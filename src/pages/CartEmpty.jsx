import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ShoppingCart } from 'lucide-react';
const CartEmpty = () => {
  return (
    <>
      <Navbar />
      <main>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div class="text-center">
          <ShoppingCart size={48} color="silver" className="mx-auto" />
            <h2 class="mt-2 text-lg font-medium text-gray-900">
              Your cart is empty
            </h2>
            <p class="mt-1 text-sm text-gray-500">
              Start adding some items to your cart!
            </p>
            <div class="mt-6">
              <button class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Browse Products
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CartEmpty;
