const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {type: String, required: false, min: 4, max: 255},
    username: {type: String, required: true, min: 4, max: 255, unique: true},
    password: {type: String, required: true, min: 6, max: 1024},
    email: {type: String, required: true, min: 6, max: 255, unique: true},
    createdAt: {type: Date, default: Date.now,},
});

module.exports = mongoose.model('User', userSchema);
