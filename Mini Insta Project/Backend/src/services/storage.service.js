const ImageKit = require("@imagekit/nodejs/index.js");

const imagekit = new ImageKit({
  privateKey: process.env.IMAGE_PRIVATE_KEY,
});

async function uploadFile(buffer) {
  const result = await imagekit.files.upload({
    file: buffer.toString("base64"), // very important
    fileName: "image.jpg",
  });

  return result;
}

module.exports = uploadFile;
