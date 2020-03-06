const mongoose = require('mongoose'),

roomSchema = mongoose.Schema({
    roomTypes: {
        type: [String],
        required: true
    },
    roomsAvailable: {
        type: [Number],
        required: true
    }
})

hotelSchema = mongoose.Schema({
    hotelName: {
        type: String,
        required: true,
        maxlength: 100
    },
    description: {
        type: String,
        required: true,
        maxlength: 300
    },
    stars: {
        type: Number,
        required: true,
        minlength: 1,
        maxlength: 5
    },
    rooms: [roomSchema]
})

    module.exports = mongoose.model('hotel', hotelSchema)
