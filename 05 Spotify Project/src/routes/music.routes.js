const express = require("express");
const { createMusic } = require("../controllers/music.controllers");
const multer = require("multer");

const upload = multer({
  storage: multer.memoryStorage(),
});

const router = express.Router();

router.post("/upload", upload.single("music"), createMusic);

module.exports = router;
