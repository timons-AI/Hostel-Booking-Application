import express from "express";
import {
  createHostel,
  deleteHostel,
  getHostel,
  getHostels,
  updateHostel,
} from "../controllers/hostel.js";

const router = express.Router();

//CREATE
router.post("/", createHostel);
//UPDATE
router.put("/:id", updateHostel);
//DELETE
router.delete("/:id", deleteHostel);
//GET
router.get("/:id", getHostel);
//GET ALL
router.get("/", getHostels);

export default router;
