import express from "express";
import {
  bookHostelById,
  countyByCity,
  createHostel,
  deleteHostel,
  getHostel,
  getHostels,
  updateHostel,
} from "../controllers/hostel.js";
import { verifyAdmin, verifyToken } from "../utils/verify-token.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createHostel);
//UPDATE
router.put("/:id", verifyAdmin, updateHostel);
//DELETE
router.delete("/find/:id", verifyAdmin, deleteHostel);
//GET
router.get("/:id", getHostel);
//GET ALL
router.get("/", getHostels);

router.get("/", getHostels);
router.get("/countByCity", countyByCity);
router.get("/countByType", getHostels);

// book hostel by id
router.post("/book/:hostelId/:userId", verifyToken, bookHostelById);

export default router;
