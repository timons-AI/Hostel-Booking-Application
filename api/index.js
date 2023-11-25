import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Successfully connected to database");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose connection is disconnected");
});

mongoose.connection.on("connected", () => {
  console.log("Mongoose connection is connected");
});

app.listen(3000, () => {
  connect();
  console.log("Server is running on port 3000.");
});
