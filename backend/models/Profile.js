const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    username: { type: String, required: true },
    bio: { type: String }
});

module.exports = mongoose.model('Profile', profileSchema);
