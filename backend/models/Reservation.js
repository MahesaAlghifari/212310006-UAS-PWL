const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
    username: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    date: { type: Date, required: true },
    seats: { type: Number, required: true },
    time: { type: String, required: true },
    specialOccasions: { type: String },
    notificationTime: { type: String }
});

module.exports = mongoose.model('Reservation', reservationSchema);
