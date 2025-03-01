import { useState } from "react";
import { initialProducts } from "../lib/data";
import Title from "./UI/title";
import ProductCard from "./ProductCard";
import useFavorites from "./useFavorite";

function Products() {
  const [visibleItems, setVisibleItems] = useState(4);
  const [showButton, setShowButton] = useState(true);
  const { favorites, toggleFavorite } = useFavorites();

  const buttonHandler = () => {
    setVisibleItems(initialProducts.length);
    setShowButton(false);  //hide button after its clicked
  };
  return (
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
      <Title title={"Featured Products"} />
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {initialProducts.slice(0, visibleItems).map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            toggleFavorite={toggleFavorite}
            isFavorite={favorites.includes(product.id)}
          />
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
