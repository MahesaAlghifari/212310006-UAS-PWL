const mongoose = require('mongoose');

const facilitySchema = new mongoose.Schema({
    type: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true }
});

module.exports = mongoose.model('Facility', facilitySchema);
