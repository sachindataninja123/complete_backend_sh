const musicModel = require("../models/music.model");
const jwt = require("jsonwebtoken");
const uploadFile = require("../services/storage.service");
const albumModel = require("../models/album.model");

const createMusic = async (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // console.log(decoded);
    if (decoded.role !== "artist") {
      return res.status(403).json({
        message: "You don't have access to create music",
      });
    }

    const { title } = req.body;
    const file = req.file;

    if (!file) {
      return res.status(400).json({ message: "Music file is required" });
    }

    const result = await uploadFile(file.buffer.toString("base64"));
    // console.log(result);

    const music = await musicModel.create({
      uri: result.url,
      title,
      artist: decoded.id,
    });

    res.status(201).json({
      message: "Music created successfully",
      music: {
        id: music._id,
        uri: music.uri,
        title: music.title,
        artist: music.artist,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Unauthorized" });
  }
};

const createAlbum = async (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.role !== "artist") {
      return res
        .status(403)
        .json({ message: "You don't have access to create a album" });
    }

    const { title, musics } = req.body;

    const album = await albumModel.create({
      title,
      artist: decoded.id,
      musics: musics,
    });

    res.status(201).json({
      message: "Album created successfully",
      album: {
        id: album._id,
        title: album.title,
        artist: album.artist,
        musics: album.musics,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "authorized" });
  }
};

const getAllMusics = async (req, res) => {
  const musics = await musicModel
    .find()
    .limit(10)
    .populate("artist", "username email");

  res.status(200).json({
    message: "Music fetched successfully",
    musics: musics,
  });
};

async function getAllAlbums(req, res) {
  const albums = await albumModel
    .find()
    .select("title artist")
    .populate("artist", "username email");
  res.status(200).json({
    message: "Albums fetched successfully",
    albums: albums,
  });
}

async function getAlbumById(req, res) {
  const albumId = req.params.albumId;

  const album = await albumModel
    .findById(albumId)
    .populate("artist", "username email")
    .populate("musics");

  return res.status(200).json({
    message: "Album fetched successfully",
    album,
  });
}

module.exports = {
  createMusic,
  createAlbum,
  getAllMusics,
  getAllAlbums,
  getAlbumById,
};
