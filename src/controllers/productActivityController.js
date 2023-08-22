const mongoose = require('mongoose');
const productActivityController = {};
const ProductActivity = require('../models/ProductActivity');
const Product = require("../models/Product");

productActivityController.index = async (req, res) => {
    try {
        const activities = await ProductActivity.find({ product: req.params.id }).exec();
        res.status(200).json(activities);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

productActivityController.create = async (req, res) => {
    const { activity, quantity } = req.body;
    const productId = req.params.id;

    try {
        const productActivity = new ProductActivity({
            product: productId,
            activity,
            quantity
        });
        await productActivity.save();

        const product = await Product.findById(productId);
        if (!product) {
            throw new Error('Product not found');
        }
        if(activity === "add"){
            product.quantity += quantity;
        }else if(activity === "remove"){
            product.quantity -= quantity;
        }

        await product.save();

        res.status(200).json({ message: 'Product activity added successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = productActivityController;
