import React from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

const CreatePost = () => {

    const navigate  = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    const fromData = new FormData(e.target);

    axios
      .post("http://localhost:3000/create-post", fromData)
      .then((res) => {
        navigate('/allposts')
      })
      .catch((err) => {
        console.log(err);
        alert("Error creating Post");
      });
  };

  return (
    <div>
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md"
        >
          <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">
            Create Post
          </h2>

          <div className="mb-4">
            <label className="block mb-2 text-gray-700 font-medium">
              Upload Image
            </label>
            <input
              type="file"
              accept="image/*"
              name="image"
              className="w-full border border-gray-300 rounded-lg p-2 cursor-pointer"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-gray-700 font-medium">
              Caption
            </label>
            <textarea
              name="caption"
              placeholder="Write a caption..."
              className="w-full border border-gray-300 rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="3"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
