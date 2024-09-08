const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Mongo connection successful"))
  .catch(() => console.log("Mongo connection Failed"));
// const conn = mongoose.connection;

const app = express();
const port = process.env.PORT;

app.use(cors());

// Create a Room schema
const roomSchema = new mongoose.Schema({
  block: String,
  floorNo: Number,
  roomNo: Number,
  note: String,
});

const Room = mongoose.model("Room", roomSchema);

app.use(bodyParser.json());

// 1. Search rooms by block
// /api/v1/rooms?block=XY
app.get("/api/v1/rooms/", async (req, res) => {
  const { block } = req.query;
  try {
    const rooms = await Room.find({ block: block });
    res.json(rooms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 2. Add a room
app.post("/api/v1/rooms", async (req, res) => {
  const { block, floorNo, roomNo, note } = req.body;
  if (block == "" || floorNo < 0 || roomNo < 0 || note == "") {
    res.status(409).json({ message: "incomplete form" });
    res.end();
    return;
  }
  // try {
  const duplicates = await Room.find({
    block: block,
    floorNo: floorNo,
    roomNo: roomNo,
    note: note,
  });
  // } catch (e) {
  //   res.status(400).json({ message: "An Error Occured." });
  //   return;
  // }
  if (duplicates && duplicates.length != 0) {
    res.status(405).json({ message: "duplicate entry" });
    res.end();
  } else {
    const room = new Room({ block, floorNo, roomNo, note });
    try {
      const newRoom = await room.save();
      res.status(201).json(newRoom);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
});

// 3. Remove a room
app.delete("/api/v1/rooms", async (req, res) => {
  const { block, floorNo, roomNo } = req.body;
  try {
    const deletedRoom = await Room.findOneAndDelete({ block, floorNo, roomNo });
    if (deletedRoom) {
      res.json({ message: "Room deleted successfully" });
    } else {
      res.status(404).json({ message: "Room not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(port, () => {
  console.log(`Roommate finder app listening at http://localhost:${port}`);
});
