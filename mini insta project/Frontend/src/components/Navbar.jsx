import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <h1 className="text-2xl font-bold text-blue-600">
          MiniInsta
        </h1>

      
        <div className="flex space-x-6">
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-600 font-medium transition duration-300"
          >
            Create Post
          </Link>

          <Link
            to="/allposts"
            className="text-gray-700 hover:text-blue-600 font-medium transition duration-300"
          >
            All Posts
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;