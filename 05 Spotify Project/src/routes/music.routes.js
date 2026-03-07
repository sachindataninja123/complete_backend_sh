const express = require("express");
const {
  createMusic,
  createAlbum,
  getAllMusics,
  getAllAlbums,
  getAlbumById,
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

router.get("/albums/:albumId" ,getAlbumById )

module.exports = router;
