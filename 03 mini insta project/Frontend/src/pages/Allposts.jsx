import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios"
const Allposts = () => {
  const [posts, setPosts] = useState([
    {
      id: "",
      image:"",
      caption: "",
    },
  ]);

  useEffect(() => {
    axios.get("http://localhost:3000/posts").
    then((res) => {
        setPosts(res.data.posts)

    })
  },[])

  return (
    <div className="flex items-start justify-start gap-7 flex-wrap m-10">
      {posts.length > 0 &&
        posts.map((post, idx) => {
          return (
            <div key={idx} className="max-w-sm bg-white rounded-md shadow-lg overflow-hidden hover:shadow-2xl transition duration-300  ">
              <img src={post.image} alt="post" className="w-80 h-80 object-cover" />

              <div className="p-4">
                <p className="text-gray-700 mb-4">{post.caption}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Allposts;
