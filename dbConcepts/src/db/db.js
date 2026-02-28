const mongoose = require("mongoose")

const connectDb = async () => {
    await mongoose.connect("mongodb+srv://skraj703345_db_user:xNtulCxqCouySzc4@backend-complete-sh.awwx2qj.mongodb.net/halley")

    console.log("Connected to DB")
}

module.exports = connectDb