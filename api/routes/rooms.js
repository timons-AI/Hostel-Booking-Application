import express from "express";
import {
  createRoom,
  deleteRoomById,
  getAllRooms,
  getRoomById,
  updateRoomById,
} from "../controllers/room.js";

import { verifyAdmin } from "../utils/verify-token.js";

const router = express.Router();

// create
router.post("/:hostelId", verifyAdmin, createRoom);

// update
router.put("/:roomId", verifyAdmin, updateRoomById);

// get all
router.get("/", getAllRooms);

// get one
router.get("/:Id", getRoomById);

// delete one
router.delete("/:roomId/:hotelId", verifyAdmin, deleteRoomById);

export default router;
