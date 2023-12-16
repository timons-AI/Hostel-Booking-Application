import User from "../models/User.js";
import bycrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  try {
    // Check if email already exists
    const existingEmail = await User.findOne({ email: req.body.email });
    if (existingEmail) {
      return res.json({ error: "Email already exists use another email" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ username: req.body.username });
    if (existingUser) {
      return res.json({ error: "User already exists, use another username" });
    }

    // Hash password
    const salt = await bycrypt.genSalt(10);
    const hashedPassword = await bycrypt.hashSync(req.body.password, salt);

    // Create new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    const savedUser = await newUser.save();

    res.status(200).json(savedUser);
  } catch (error) {
    // Handle error
    next(error);
  }
};

// const salt = bycrypt.genSaltSync(10);
//     const hash = bycrypt.hashSync(req.body.password, salt);

//     const newUser = new User({
//       username: req.body.username,
//       email: req.body.email,
//       password: hash,
//     });
//     const user = await newUser.save();
//     res.status(201).json(user);

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email }).select(
      "+password"
    );
    if (!user) {
      return res.status.json("Wrong credentials");
    }

    const validated = await bycrypt.compare(req.body.password, user.password);
    if (!validated) {
      return res.status.json("Wrong credentials");
    }

    const accessToken = jwt.sign(
      {
        id: user._id,
        username: user.username,
        email: user.email,
        isAdmin: user.isAdmin,
      },
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

export const getProfile = (req, res, next) => {
  const { accessToken } = req.cookies;
  if (!accessToken)
    return res.status(401).json({ error: "You are not authenticated" });
  const decoded = jwt.verify(accessToken, process.env.JWT_SECRET);
  res.status(200).json(decoded);
};
