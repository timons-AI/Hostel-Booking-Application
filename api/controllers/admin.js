import User from "../models/User.js";
import Hostel from "../models/Hostel.js";

export const getStatistics = async (req, res, next) => {
  try {
    const usersCount = await User.countDocuments();
    const hostelsCount = await Hostel.countDocuments();

    // Fetch all hostels and calculate total bookings
    const hostels = await Hostel.find();
    const totalBookings = hostels.reduce(
      (total, hostel) => total + hostel.bookings.length,
      0
    );

    const statistics = {
      users: usersCount,
      hostels: hostelsCount,
      bookings: totalBookings,
      remaining: hostelsCount * 25 - totalBookings,
    };

    return res.status(200).json({
      success: true,
      data: statistics,
    });
  } catch (error) {
    console.error("Error fetching statistics:", error);
    return res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
};
