import Room from "../models/Room.js";
import Hostel from "../models/Hostel.js";
import { createError } from "../utils/error.js";

// Create a new room

export const createRoom = async (req, res, next) => {
  const hostelId = req.params.hostelId;
  const newRoom = new Room(req.body);

  try {
    const savedRoom = await newRoom.save();
    try {
      await Hostel.findByIdAndUpdate(
        hostelId,
        { $push: { rooms: savedRoom._id } },
        { new: true }
      );
      res.status(201).json(savedRoom);
    } catch (err) {
      await Room.findByIdAndDelete(savedRoom._id);
      next(createError(404, "Hostel not found"));
    }
  } catch (err) {
    next(createError(400, err.message));
  }
};

// Get all rooms

export const getAllRooms = async (req, res, next) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (err) {
    next(createError(404, err.message));
  }
};

// Get a room by id

export const getRoomById = async (req, res, next) => {
  const roomId = req.params.roomId;

  try {
    const room = await Room.findById(roomId);
    res.status(200).json(room);
  } catch (err) {
    next(createError(404, err.message));
  }
};

// Delete a room by id

export const deleteRoomById = async (req, res, next) => {
  const hostelId = req.params.hostelId;
  const roomId = req.params.roomId;

  try {
    await Hostel.findByIdAndUpdate(
      hostelId,
      { $pull: { rooms: roomId } },
      { new: true }
    );
    const deletedRoom = await Room.findByIdAndDelete(roomId);
    res.status(200).json(`Room ${deletedRoom._id} deleted successfully`);
  } catch (err) {
    next(createError(404, err.message));
  }
};

// Update a room by id

export const updateRoomById = async (req, res, next) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      req.params.roomId,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedRoom);
  } catch (err) {
    next(createError(404, err.message));
  }
};
