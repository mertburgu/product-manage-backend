const mongoose = require('mongoose');

const productActivitySchema = new mongoose.Schema({
    activity: {type: String, required: true, min: 5, max: 5},
    quantity: {type: Number, required: true},
    createdAt: {type: Date, default: Date.now,},
    product: {type: mongoose.Schema.Types.ObjectId, ref: 'Product',
    },
});

module.exports = mongoose.model('ProductActivity', productActivitySchema);