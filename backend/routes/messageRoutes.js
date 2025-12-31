const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

// Save a message
router.post("/", async (req, res) => {
  const message = new Message(req.body);
  await message.save();
  res.json(message);
});

// Get all messages of a room
router.get("/:roomId", async (req, res) => {
  const messages = await Message.find({ roomId: req.params.roomId });
  res.json(messages);
});

module.exports = router;
