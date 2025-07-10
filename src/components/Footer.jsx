import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
       
    <footer className="bg-white dark:bg-gray-800 shadow mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">
        {/* Left side - Copyright */}
        <p className="text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} MyApp. All rights reserved.  (#Jerome)
        </p>

        {/* Right side - Footer Links */}
        <div className="flex space-x-4 text-sm">
          <Link to="/" className="hover:text-yellow-100 transition duration-300">
            Home
          </Link>
          <Link to="/about" className="hover:text-yellow-100 transition duration-300">
            About
          </Link>
          <Link to="/tasks" className="hover:text-yellow-100 transition duration-300">
            Tasks
          </Link>
        </div>
      </div>
    </footer>
    );
}

export default Footer;
