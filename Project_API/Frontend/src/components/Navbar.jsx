import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gray-800 h-15 w-full flex  items-center justify-between px-25 mb-15 ">
      <h1 className="text-2xl uppercase font-bold text-red-400">Mini Insta</h1>
      <div className="flex items-center justify-center gap-10 "> 
        <Link className="uppercase text-white active:scale-95 font-semibold transition-all cursor-pointer" to="/">Create post</Link>
        <Link className="uppercase text-white  font-semibold active:scale-95 transition-all cursor-pointer" to="/AllPosts">All post</Link>
      </div>
    </div>
  );
};

export default Navbar;
