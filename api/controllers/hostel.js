import Hostel from "../models/Hostel.js";
import User from "../models/User.js";
export const createHostel = async (req, res, next) => {
  try {
    const hostel = await Hostel.create(req.body);
    return res.status(201).json({
      success: true,
      data: hostel,
    });
  } catch (error) {
    next(error);
  }
};

export const updateHostel = async (req, res, next) => {
  try {
    const hostel = await Hostel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    return res.status(200).json({
      success: true,
      data: hostel,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteHostel = async (req, res, next) => {
  try {
    await Hostel.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      success: true,
      data: "Hostel has been deleted...",
    });
  } catch (error) {
    next(error);
  }
};

export const getHostel = async (req, res, next) => {
  try {
    const hostel = await Hostel.findById(req.params.id);
    return res.status(200).json({
      success: true,
      data: hostel,
    });
  } catch (error) {
    next(error);
  }
};

export const getHostels = async (req, res, next) => {
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
    } else if (ratings) {
      hostels = await Hostel.find({ rating: { $gte: ratings } });
    } else if (featured) {
      hostels = await Hostel.find({ featured: true });
    } else {
      hostels = await Hostel.find();
    }
    return res.status(200).json({
      success: true,
      data: hostels,
    });
  } catch (error) {
    next(error);
  }
};

export const countyByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const hostels = await Hostel.aggregate([
      {
        $match: { city: { $in: cities } },
      },
      {
        $group: {
          _id: "$city",
          count: { $sum: 1 },
        },
      },
    ]);
    return res.status(200).json({
      success: true,
      data: hostels,
    });
  } catch (error) {
    next(error);
  }
};

export const bookHostelById = async (req, res, next) => {
  try {
    const hostel = await Hostel.findById(req.params.hostelId);
    // check if user id is given
    if (!req.params.userId) {
      return res.status(400).json({
        success: false,
        error: "No user id given",
      });
    }
    //check if the user id exists in the database

    if (!User.findById(req.params.userId)) {
      return res.status(404).json({
        success: false,
        error: "No user found",
      });
    }

    // check hostel id
    if (!hostel) {
      return res.status(404).json({
        success: false,
        error: "No hostel found",
      });
    }
    // check user id
    if (hostel.bookings.includes(req.params.userId)) {
      return res.status(400).json({
        success: false,
        error: "Already booked",
      });
    }
    hostel.bookings.push(req.params.userId);
    await hostel.save();
    return res.status(200).json({
      success: true,
      data: hostel,
    });
  } catch (error) {
    next(error);
  }
};
