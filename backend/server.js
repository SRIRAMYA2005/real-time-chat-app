// 1️⃣ Import dependencies
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

// 2️⃣ Import routes
const roomRoutes = require("./routes/roomRoutes");
const messageRoutes = require("./routes/messageRoutes");
const authRoutes = require("./routes/authRoutes");

// 3️⃣ Initialize app & server
const app = express();
const server = http.createServer(app);

// 4️⃣ Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// 5️⃣ Routes
app.use("/api/auth", authRoutes);
app.use("/api/rooms", roomRoutes);
app.use("/api/messages", messageRoutes);

// 6️⃣ MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/chatapp")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// 7️⃣ Socket.IO
const io = new Server(server, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("joinRoom", (roomId) => {
    socket.join(roomId);
  });

  socket.on("sendMessage", (data) => {
    io.to(data.roomId).emit("receiveMessage", data);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

// 8️⃣ Start server
server.listen(5000, () => {
  console.log("Server running on port 5000");
});
