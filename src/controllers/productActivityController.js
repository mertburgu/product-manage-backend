const productActivityController = {};
const ProductActivity = require('../models/ProductActivity');

productActivityController.create = async (req, res) => {
    const { productId, activity, quantity } = req.body;

    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const productActivity = new ProductActivity({
            productId,
            activity,
            quantity
        });
        await productActivity.save({ session });

        const product = await Product.findById(productId).session(session);
        if (!product) {
            throw new Error('Product not found');
        }
        product.stockAmount += quantity;
        await product.save({ session });

        await session.commitTransaction();
        session.endSession();

        res.status(200).json({ message: 'Product activity added successfully' });
    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        res.status(500).json({ error: error.message });
    }
};

module.exports = productActivityController;
