const express = require('express');
const router = express.Router();
const ProfileController = require('../controllers/ProfileController');

// Create a new profile
router.post('/', ProfileController.createProfile);

// Get all profiles
router.get('/', ProfileController.getAllProfiles);

// Get a single profile by ID
router.get('/:id', ProfileController.getProfileById);

// Update a profile by ID
router.put('/:id', ProfileController.updateProfileById);

// Delete a profile by ID
router.delete('/:id', ProfileController.deleteProfileById);

module.exports = router;
