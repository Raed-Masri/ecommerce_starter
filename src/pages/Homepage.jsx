import React from "react";
import HeroSection from "../components/HeroSection";
import Products from "../components/Products";
import Categories from "../components/Categories";

const Homepage = () => {
  return (
    <>
      <div class="min-h-screen flex flex-col">
        <HeroSection />
        <Categories/>
        <Products />
      </div>
    </>
  );
};

export default Homepage;
