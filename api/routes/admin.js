import express from "express";

import { verifyAdmin, verifyToken } from "../utils/verify-token.js";
import { getStatistics } from "../controllers/admin.js";
import { getUsers } from "../controllers/user.js";
import { getHostels } from "../controllers/hostel.js";

const router = express.Router();

// book hostel by id
// router.post("/book/:hostelId/:userId", verifyToken, bookHostelById);

// getting all statistics for admin
router.get("/statistics", getStatistics);
router.get("/users", getUsers);
router.get("/listings", getHostels);

export default router;
