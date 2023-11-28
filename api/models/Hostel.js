import mongoose from "mongoose";

const HostelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  type: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  distance: {
    type: String,
    required: true,
  },
  photos: {
    type: [String],
  },
  description: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  rooms: {
    type: [String],
  },
  cheapestPrice: {
    type: Number,
    required: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  // user IDs of users who have booked this hostel
  bookings: {
    type: [String],
  },
});

export default mongoose.model("Hostel", HostelSchema);

// Path: api/routes/hostels.js
// Example of a GET request:
// GET /api/hostels?city=London
// Example of a POST request:
// POST /api/hostels
// {
//   "name": "Hostel One Camden",
//   "type": "Hostel",
//   "city": "London",
//   "address": "2 Southampton Row",
//   "distance": "0.5",
//   "photos": [
//     "https://cf.bstatic.com/images/hotel/max1024x768/247/247695184.jpg",
//     "https://cf.bstatic.com/images/hotel/max1024x768/247/247695184.jpg",
//     "https://cf.bstatic.com/images/hotel/max1024x768/247/247695184.jpg"
//   ],
//   "description": "Hostel One Camden offers a variety of private rooms and shared dormitories. The property has a 24-hour reception with luggage storage.",
//   "rating": 4.5,
//   "rooms": [
//     "Mixed Dormitory Room",
//     "Bed in 4-Bed Mixed Dormitory Room",
//     "Bed in 6-Bed Mixed Dormitory Room",
//     "Bed in 8-Bed Mixed Dormitory Room",
//          "Bed in 10-Bed Mixed Dormitory Room",],
//   "cheapestPrice": 10,
//   "featured": true
// }
