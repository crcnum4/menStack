const express = require("express");
const router = express.Router();
const Room = require("../models/room");

//Get all rooms
router.get("/", async (req, res) => {
    try {
        const rooms = await Room.find();
        res.json(rooms);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});

//Create new room
router.post("/", async (req, res) => {
    const room = new Room({
        roomTypes: req.body.roomTypes,
        roomsAvailable: req.body.roomsAvailable,

    });

    try {
        const newRoom = await room.save();
        res.status(201).json(newRoom);
    } catch (err) {
        res.status(400).json({

            message: err.message
        });
    }
});


module.exports = router;