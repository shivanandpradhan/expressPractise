import mongoose from "mongoose";

// function for connecting to mongodb
const connectDB = async (DATABASE_URL) => {
  try {
    const DB_OPTIONS = {
      dbName: process.env.DB_NAME,
    };

    // connecting to mongodb
    await mongoose.connect(DATABASE_URL, DB_OPTIONS);
    console.log("Connected to db successfully ....");
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;
