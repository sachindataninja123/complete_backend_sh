const express = require("express");
const {
  createMusic,
  createAlbum,
  getAllMusics,
  getAllAlbums,
} = require("../controllers/music.controllers");
const multer = require("multer");

const upload = multer({
  storage: multer.memoryStorage(),
});

const router = express.Router();

router.post("/upload", upload.single("music"), createMusic);

router.post("/album", createAlbum);

router.get("/" , getAllMusics)

router.get('/albums' , getAllAlbums)

module.exports = router;
