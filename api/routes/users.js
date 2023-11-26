import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verify-token.js";

const router = express.Router();

// //CHECK AUTHENTICATION

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.status(200).json({
//     success: true,
//     data: req.user,
//   });
// });

// //CHECK USER
// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.status(200).json({
//     success: true,
//     data: req.user,
//   });
// });

// //CHECK ADMIN
// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.status(200).json({
//     success: true,
//     data: req.user,
//   });
// });

//CREATE is already handled by auth.js

//UPDATE
router.put("/:id", verifyUser, updateUser);
//DELETE
router.delete("/:id", verifyUser, deleteUser);
//GET
router.get("/:id", verifyUser, getUser);
//GET ALL
router.get("/", verifyAdmin, getUsers);

export default router;
