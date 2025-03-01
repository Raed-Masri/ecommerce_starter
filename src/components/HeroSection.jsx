import React from "react";
import { ShoppingBag } from "lucide-react";
function HeroSection() {
    return ( 
        <div
        className="relative  bg-cover bg-center h-[600px]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Welcome to ShopHub
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Discover amazing products at great prices
            </p>
            <a href="/categories">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold flex items-center">
              <ShoppingBag className="mr-2" /> 
                Start Shopping
              </button>
            </a>
          </div>
        </div>
      </div>
     );
}

export default HeroSection;