import mongoose from "mongoose";
const RoomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    capacity: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    roomNumbers: [{ number: Number, unavailableDates: [{ type: [Date] }] }],
  },
  { timestamps: true }
);

export default mongoose.models.Room || mongoose.model("Room", RoomSchema);

// example of a model
const room = {
  title: "Single Room",
  description: "A simple room with a bed and little space",
  capacity: 1,
  price: 100,
  roomNumbers: [
    {
      number: 1,
      unavailableDates: [
        "2021-05-01T00:00:00.000Z",
        "2021-05-02T00:00:00.000Z",
      ],
    },
    {
      number: 2,
      unavailableDates: [
        "2021-05-01T00:00:00.000Z",
        "2021-05-02T00:00:00.000Z",
      ],
    },
    {
      number: 3,
      unavailableDates: [
        "2021-05-01T00:00:00.000Z",
        "2021-05-02T00:00:00.000Z",
      ],
    },
    {
      number: 4,
      unavailableDates: [
        "2021-05-01T00:00:00.000Z",
        "2021-05-02T00:00:00.000Z",
      ],
    },
    {
      number: 5,
      unavailableDates: [
        "2021-05-01T00:00:00.000Z",
        "2021-05-02T00:00:00.000Z",
      ],
    },
  ],
};
