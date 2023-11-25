import User from "../models/User.js";
import bycrypt from "bcryptjs";

export const register = async (req, res, next) => {
  try {
    const salt = bycrypt.genSaltSync(10);
    const hash = bycrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};
