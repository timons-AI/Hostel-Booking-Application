import express from "express";
import Hostel from "../models/Hostel.js";

const router = express.Router();

//CREATE
router.post("/", async (req, res) => {
  const newHostel = new Hostel(req.body);
  try {
    const savedHostel = await newHostel.save();
    res.status(200).json(savedHostel);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
//UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updatedHostel = await Hostel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedHostel);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Hostel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hostel has been deleted...");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
//GET
//GET ALL
export default router;
