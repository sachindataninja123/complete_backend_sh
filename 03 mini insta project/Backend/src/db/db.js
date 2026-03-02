const mongoose = require("mongoose");

const connectDb = async () => {
await  mongoose.connect(
    process.env.MONGODB_URI
  );

  console.log("Connected to Database")
};

module.exports = connectDb