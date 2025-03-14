import HeroSection from "../components/HeroSection";
import Products from "../components/Products";
import Categories from "../components/CategoriesCard";

const Homepage = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <HeroSection />
        <Categories />
        <Products />
      </div>
    </>
  );
};

export default Homepage;
