import User from "../models/User.js";
import bycrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username }).select(
      "+password"
    );
    !user && res.status(400).json("Wrong credentials");
    console.log(user);

    const validated = await bycrypt.compareSync(
      req.body.password,
      user.password
    );
    !validated && res.status(400).json("Wrong credentials");

    const accessToken = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET,
      { expiresIn: "3d" }
    );

    const { password, ...others } = user._doc;
    res
      .cookie("token", accessToken, {
        httpOnly: true,
        sameSite: "none",
        secure: true,
      })
      .status(200)
      .json(others);
  } catch (error) {
    next(error);
  }
};
