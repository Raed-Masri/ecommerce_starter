import React from "react";
import { Heart } from "lucide-react";
const ProductCard = ({ product, toggleFavorite, isFavorite }) => {
  return (
    <div
      key={product.id}
      className="bg-white rounded-lg shadow-md overflow-hidden group"
    >
      <div className="relative h-48">
        <img
          src={product.image_url}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <button
          className="absolute top-2 right-2 p-2 rounded-full bg-white shadow-md hover:bg-gray-100"
          onClick={() => toggleFavorite(product.id)}
        >
          <Heart
            className="w-5 h-5 text-gray-600"
            fill={isFavorite ? "red" : "none"}
            color={isFavorite ? "red" : "currentColor"}
          />
        </button>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
