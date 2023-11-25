import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello This is Auth End point");
});

router.get("/login", (req, res) => {
  res.send("Login");
});

export default router;
