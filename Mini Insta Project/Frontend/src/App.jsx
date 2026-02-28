import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import PostCreate from "./pages/PostCreate";
import AllPost from "./pages/AllPost";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<PostCreate />} />
        <Route path="/AllPosts" element={<AllPost />} />
      </Routes>
    </div>
  );
};

export default App;
