import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { categories, initialProducts  } from "../lib/data";
import { useState } from "react";

const CategoriesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? initialProducts
      : initialProducts.filter((product) => product.category === selectedCategory);

  return (
    <>
 
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <div className="mb-4">
        <select
          className="p-2 border rounded"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="border rounded-lg overflow-hidden shadow-lg">
            <img src={product.image_url} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-blue-500 font-bold">${product.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default CategoriesPage;


