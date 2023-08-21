const express = require('express');
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const productController = require('../controllers/productController');

router.get('/products', authMiddleware, productController.index);
router.get('/products/:id', authMiddleware, productController.show);
router.post('/products', authMiddleware, productController.create);
router.put('/products/:id', authMiddleware, productController.update);
router.delete('/products/:id', authMiddleware, productController.delete);

module.exports = router;
