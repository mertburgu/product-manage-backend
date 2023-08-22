const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {type: String, required: false, min: 3, max: 255},
    description: {type: String, required: false, min: 3, max: 255},
    productCode: {type: String, required: true, min: 3, max: 255},
    quantity: {type: Number, required: true, default:0},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
});

module.exports = mongoose.model('Product', productSchema);