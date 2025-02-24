import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Favorites from "./pages/Favorites";
import Contact from "./pages/Contact";
import CartEmpty from "./pages/CartEmpty";
import Homepage from "./pages/Homepage";
import Categories from "./pages/Categories";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<CartEmpty />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  );
}

export default App;
