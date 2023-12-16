import User from "../models/User.js";

export const updateUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    return res.status(200).json(
      {
      success: true,
      data: user,
    }
  );
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    return res.status(200).json(
      {
      success: true,
      data: "User has been deleted...",
    }
    );
  } catch (error) {
    next(error);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    return res.status(200).json(
      {
      success: true,
      data: user,
    }
    );
  } catch (error) {
    next(error);
  }
};

export const getUsers = async (req, res, next) => {
  const query = req.query.new;
  try {
    const users = query
      ? await User.find().sort({ _id: -1 }).limit(5)
      : await User.find();
    return res.status(200).json(
      {
      success: true,
      data: users,
    }
    );
  } catch (error) {
    next(error);
  }
};
