const express = require("express");
const postModel = require("./models/db.model");
const uploadFile = require("./services/storage.service");
const multer = require("multer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const upload = multer({ storage: multer.memoryStorage() });

//post api
app.post("/create-post", upload.single("image"), async (req, res) => {
  const result = await uploadFile(req.file.buffer);

  const post = await postModel.create({
    image: result.url,
    caption: req.body.caption,
  });

  res.status(201).json({
    message: "Post created Successfully",
    post,
  });
});

//get api
app.get("/posts", async (req, res) => {
  const posts = await postModel.find();

  return res.status(200).json({
    message: "Posts fetched successfully",
    posts,
  });
});

// delete api
app.delete("/posts/:id", async (req, res) => {
  const id = req.params.id;

  await postModel.findOneAndDelete({
    _id: id,
  });

  return res.status(200).json({
    message: "Post deleted Successfully",
  });
});

module.exports = app;
