const Facility = require('../models/Facility');

// Create new facility
exports.createFacility = async (req, res) => {
    try {
        const newFacility = new Facility(req.body);
        const savedFacility = await newFacility.save();
        res.status(201).json(savedFacility);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all facilities
exports.getFacilities = async (req, res) => {
    try {
        const facilities = await Facility.find();
        res.status(200).json(facilities);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get facility by ID
exports.getFacilityById = async (req, res) => {
    try {
        const facility = await Facility.findById(req.params.id);
        if (!facility) return res.status(404).json({ message: 'Facility not found' });
        res.status(200).json(facility);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update facility by ID
exports.updateFacility = async (req, res) => {
    try {
        const updatedFacility = await Facility.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedFacility) return res.status(404).json({ message: 'Facility not found' });
        res.status(200).json(updatedFacility);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete facility by ID
exports.deleteFacility = async (req, res) => {
    try {
        const deletedFacility = await Facility.findByIdAndDelete(req.params.id);
        if (!deletedFacility) return res.status(404).json({ message: 'Facility not found' });
        res.status(200).json({ message: 'Facility deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
