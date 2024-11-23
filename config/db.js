const mongoose = require("mongoose");
require("dotenv").config();
const URL=process.env.MONGO_URI;
const connectDB = async () => {
  try {

    const conn = await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error("Error while connecting to MongoDB: ", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;