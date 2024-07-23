const express = require('express');
const router = express.Router();
const ReservationController = require('../controllers/ReservationController');

// Create a new reservation
router.post('/', ReservationController.createReservation);

// Get all reservations
router.get('/', ReservationController.getAllReservations);

// Get a single reservation by ID
router.get('/:id', ReservationController.getReservationById);

// Update a reservation by ID
router.put('/:id', ReservationController.updateReservationById);

// Delete a reservation by ID
router.delete('/:id', ReservationController.deleteReservationById);

module.exports = router;
