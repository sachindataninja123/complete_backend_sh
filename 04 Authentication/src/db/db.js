const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database is connected to server");
  } catch (err) {
    console.log("Databse connection error : ", err);
  }
};

module.exports = connectDb;
