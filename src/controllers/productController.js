const productController = {};
const Product = require('../models/Product');

productController.index = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

productController.show = async (req, res) => {
    try {
        const product = await Product.findById(req.params.productId);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

productController.create = async (req, res) => {
    try {
        const { name, description, productCode, quantity } = req.body;

        const product = new Product({
            name,
            description,
            productCode,
            quantity
        });

        const savedProduct = await product.save();

        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

productController.update = async (req, res) => {
    try {
        const { name, description, productCode, quantity } = req.body;

        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.productId,
            {
                name,
                description,
                productCode,
                quantity
            },
            { new: true }
        );

        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

productController.delete = async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.productId);

        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json({ message: 'Product deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = productController;
