const express = require('express');
const router = express.Router();
const FacilityController = require('../controllers/FacilityController');

// Create a new facility
router.post('/', FacilityController.createFacility);

// Get all facilities
router.get('/', FacilityController.getAllFacilities);

// Get a single facility by ID
router.get('/:id', FacilityController.getFacilityById);

// Update a facility by ID
router.put('/:id', FacilityController.updateFacilityById);

// Delete a facility by ID
router.delete('/:id', FacilityController.deleteFacilityById);

module.exports = router;
