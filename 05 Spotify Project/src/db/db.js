const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("Server is connected to Database");
  } catch (error) {
    console.log("Database connection error : ", error);
  }
};

module.exports = connectDB;
