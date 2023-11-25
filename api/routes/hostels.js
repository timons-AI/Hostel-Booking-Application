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
router.get("/:id", async (req, res) => {
  try {
    const hostel = await Hostel.findById(req.params.id);
    res.status(200).json(hostel);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
//GET ALL
router.get("/", async (req, res) => {
  const city = req.query.city;
  const type = req.query.type;
  const name = req.query.name;
  const rating = req.query.rating;
  const featured = req.query.featured;
  try {
    let hostels;
    if (city) {
      hostels = await Hostel.find({ city: city });
    } else if (type) {
      hostels = await Hostel.find({ type: type });
    } else if (name) {
      hostels = await Hostel.find({ name: name });
    } else if (rating) {
      hostels = await Hostel.find({ rating: { $gte: rating } });
    } else if (featured) {
      hostels = await Hostel.find({ featured: true });
    } else {
      hostels = await Hostel.find();
    }
    res.status(200).json(hostels);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
export default router;
