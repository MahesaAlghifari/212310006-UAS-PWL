const Reservation = require('../models/Reservation');

// Create a new reservation
exports.createReservation = async (req, res) => {
    const { username, phoneNumber, date, seats, time, specialOccasions, notificationTime } = req.body;
    try {
        const reservation = new Reservation({ username, phoneNumber, date, seats, time, specialOccasions, notificationTime });
        await reservation.save();
        res.status(201).json(reservation);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all reservations
exports.getReservations = async (req, res) => {
    try {
        const reservations = await Reservation.find();
        res.json(reservations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get reservation by ID
exports.getReservationById = async (req, res) => {
    try {
        const reservation = await Reservation.findById(req.params.id);
        if (reservation == null) {
            return res.status(404).json({ message: 'Reservation not found' });
        }
        res.json(reservation);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a reservation
exports.updateReservation = async (req, res) => {
    try {
        const reservation = await Reservation.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (reservation == null) {
            return res.status(404).json({ message: 'Reservation not found' });
        }
        res.json(reservation);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a reservation
exports.deleteReservation = async (req, res) => {
    try {
        const reservation = await Reservation.findByIdAndDelete(req.params.id);
        if (reservation == null) {
            return res.status(404).json({ message: 'Reservation not found' });
        }
        res.json({ message: 'Reservation deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
