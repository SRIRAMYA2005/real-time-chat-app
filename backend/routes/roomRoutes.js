const express = require("express");
const router = express.Router();
const Room = require("../models/Room");

// Create a new chat room
router.post("/", async (req, res) => {
  const room = new Room({ name: req.body.name });
  await room.save();
  res.json(room);
});

// Get all chat rooms
router.get("/", async (req, res) => {
  const rooms = await Room.find();
  res.json(rooms);
});

module.exports = router;
