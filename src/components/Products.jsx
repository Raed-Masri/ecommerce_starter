import { useState } from "react";
import { initialProducts } from "../lib/data";
import Title from "./UI/title";

function Products() {
  const [visibleItems, setVisibleItems] = useState(4);
  const [showButton, setShowButton] = useState(true);
  const buttonHandler = () => {
    setVisibleItems(initialProducts.length);
    setShowButton(false);
  };
  return (
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
      <Title title={"Featured Products"} />
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {initialProducts.slice(0, visibleItems).map((product) => (
          <div
            key={product.id}
            class="bg-white rounded-lg shadow-md overflow-hidden group"
          >
            <div class="relative h-48">
              <img
                src={product.image_url}
                alt={product.name}
                class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <button class="absolute top-2 right-2 p-2 rounded-full bg-white shadow-md hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-heart w-5 h-5 text-gray-600"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
              </button>
            </div>

            <div class="p-4">
              <h3 class="text-lg font-semibold mb-2">{product.name}</h3>
              <p class="text-gray-600 text-sm mb-4">{product.description}</p>
              <div class="flex items-center justify-between">
                <span class="text-lg font-bold">
                  ${product.price.toFixed(2)}
                </span>
                <button class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div class="text-center mt-8">
        {showButton && (
          <button
            class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={buttonHandler}
          >
            View All Products
          </button>
        )}
      </div>
    </div>
  );
}

export default Products;
