import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import roomsRoute from "./routes/rooms.js";
import hostelsRoute from "./routes/hostels.js";

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

// middlewares

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/hostels", hostelsRoute);

app.listen(3000, () => {
  connect();
  console.log("Server is running on port 3000.");
});
