import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PostCreate = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    axios
      .post("http://localhost:3000/create-post", formData)
      .then((res) => {
        
        navigate("/AllPosts");
      })
      .catch((err) => {
        console.log(err);
        alert("Error creating post");
      });
  };

  

  return (
    <div className="w-[40%] bg-white shadow-xl flex items-start justify-center flex-col m-auto rounded-md  p-10 ">
      <h1 className="text-2xl font-bold mb-3 uppercase text-red-400">
        Create Post
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center flex-col gap-6 w-full"
        action=""
      >
        <input
          className="border px-3 py-2 rounded-md w-full"
          type="file"
          name="image"
          accept="image/*"
        />
        <input
          className="border px-3 py-2 rounded-md w-full"
          type="text"
          name="caption"
          placeholder="Enter Caption..."
          required
        />

        <button className="w-full bg-red-400 text-white px-3 py-2 rounded-md active:scale-95 cursor-pointer">
          Create Post
        </button>
      </form>
    </div>
  );
};

export default PostCreate;
