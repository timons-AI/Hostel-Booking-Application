import express from "express";
import {
  createHostel,
  deleteHostel,
  getHostel,
  getHostels,
  updateHostel,
} from "../controllers/hostel.js";
import { verifyAdmin } from "../utils/verify-token.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createHostel);
//UPDATE
router.put("/:id", verifyAdmin, updateHostel);
//DELETE
router.delete("/:id", verifyAdmin, deleteHostel);
//GET
router.get("/:id", getHostel);
//GET ALL
router.get("/", getHostels);

export default router;
