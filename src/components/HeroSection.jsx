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

      <div className="relative flex items-center h-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-white">
          <h1 className="mb-4 text-4xl font-bold md:text-6xl">
            Welcome to ShopHub
          </h1>
          <p className="mb-8 text-xl md:text-2xl" >
            Discover amazing products at great prices
          </p>
          <a href="/categories">
            <button className="flex items-center px-8 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700">
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
