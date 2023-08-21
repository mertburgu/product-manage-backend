const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    desctription: String,
    productCode: String,
    quantity: Number,
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Product', productSchema);