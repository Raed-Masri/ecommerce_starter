
import { Twitter, Instagram, Facebook } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">ShopHub</h3>
            <p className="text-gray-400">
              Your one-stop shop for all your shopping needs.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a className="text-gray-400 hover:text-white" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white" href="/categories">
                  Categories
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: support@shophub.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Address: 123 Shop Street, City, Country</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className=" text-gray-400 hover:text-white">
                <Facebook size={24} className="hover:text-white" />
              </a>
              <a href="#" className=" text-gray-400 hover:text-white">
                <Twitter size={24} className="hover:text-white" />
              </a>
              <a href="#" className=" text-gray-400 hover:text-white">
                <Instagram size={24} className="hover:text-white" />
              </a>
            </div>
          </div>
          
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>© 2025 ShopHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
