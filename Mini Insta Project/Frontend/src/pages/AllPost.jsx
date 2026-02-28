import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const AllPost = () => {
  const [posts, setPosts] = useState([
    {
      _id: "",
      image: "",
      caption: "",
    },
  ]);

  useEffect(() => {
    axios.get("http://localhost:3000/posts").then((res) => {
      setPosts(res.data.posts);
    });
  }, []);

  return (
    <div className="w-full mx-auto py-10 px-17 flex flex-wrap gap-5 justify-start">
      {posts.length > 0 &&
        posts.map((post) => {
          return (
            <div
              key={post._id}
              className="w-65 bg-white rounded-md shadow-md overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <div className="h-72">
                <img
                  className="w-full h-full object-cover"
                  src={post.image}
                  alt=""
                />
              </div>
              <div className="p-4">
                <h2 className="text-gray-700 text-sm leading-relaxed">
                  {post.caption}
                </h2>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default AllPost;
