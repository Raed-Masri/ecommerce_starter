import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Favorites from "./pages/Favorites";
import Contact from "./pages/Contact";
import Homepage from "./pages/Homepage";
import Categories from "./pages/CategoriesPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { CartProvider } from "./components/CartContext"; // Import the CartProvider
import CartPage from "./pages/CartPage"; // Import the CartPage

function App() {
  return (
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/cart" element={<CartPage />} /> {/* Cart Page */}
      </Routes>
      <Footer />
    </CartProvider>
  );
}

export default App;