const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
    roomNumber: String,
    capacity: Number,
    status: {
        type: String,
        enum: ["available", "occupied", "maintenance"],
        default: "available"
    },
    pricePerHour: Number,
    features: [String]
});

module.exports = mongoose.model("Room", roomSchema);